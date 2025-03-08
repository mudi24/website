import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import matter from 'gray-matter'

interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content?: string
}

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const writeFile = promisify(fs.writeFile)

async function updateBlogData() {
  try {
    const blogsDir = path.join(__dirname, '../src/content/blogs')
    const files = await readdir(blogsDir)
    
    const posts: Post[] = []
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(blogsDir, file)
        const content = await readFile(filePath, 'utf-8')
        const { data } = matter(content)
        
        posts.push({
          title: data.title,
          description: data.description,
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