import * as fs from 'fs'
// import * as path from 'path'
import { promisify } from 'util'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const blogsDir = path.join(__dirname, '..', 'src', 'content', 'blogs')

interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content?: string
}

// 提取文章描述的函数
function extractDescription(content: string): string {
  const contentWithoutFrontmatter = content.split('---').slice(2).join('---').trim()
  const firstParagraph = contentWithoutFrontmatter.split('\n\n')[0]
  const description = firstParagraph
    .replace(/[#*`]/g, '')
    .replace(/\n/g, ' ')
    .trim()
    .slice(0, 150)
  return description + (description.length >= 150 ? '...' : '')
}

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const writeFile = promisify(fs.writeFile)

async function updateBlogData() {
  try {
    const files = await readdir(blogsDir)
    const posts: Post[] = []
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(blogsDir, file)
        const content = await readFile(filePath, 'utf-8')
        const { data } = matter(content)
        
        posts.push({
          title: data.title,
          description: extractDescription(content),
          date: data.date,
          readTime: data.readTime,
          category: data.category
        })
      }
    }
    
    // 按日期降序排序
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    const outputPath = path.join(__dirname, '../src/content/blogData.ts')
    const outputContent = `interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content?: string
}

export const posts: Post[] = ${JSON.stringify(posts, null, 2)}
`
    
    await writeFile(outputPath, outputContent, 'utf-8')
    console.log('博客数据更新成功！')
  } catch (error) {
    console.error('更新博客数据时出错：', error)
  }
}

updateBlogData()

// 读取并处理博客文件
const blogFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'))
const posts = blogFiles.map(file => {
  const content = fs.readFileSync(path.join(blogsDir, file), 'utf-8')
  const { data } = matter(content)
  return {
    ...data,
    description: extractDescription(content)
  }
})

// 生成 blogData.ts 文件
const output = `interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content?: string
}

export const posts: Post[] = ${JSON.stringify(posts, null, 2)}
`

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'content', 'blogData.ts'),
  output,
  'utf-8'
)

console.log('Blog data updated successfully!')