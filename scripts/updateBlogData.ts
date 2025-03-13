import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  images?: string[]  // 添加图片数组字段
}

async function updateBlogData() {
  try {
    const blogsDir = join(__dirname, '../public/blogs')
    const imagesDir = join(blogsDir, 'images')
    const files = await fs.promises.readdir(blogsDir)
    
    const posts: Post[] = []
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const content = await fs.promises.readFile(join(blogsDir, file), 'utf-8')
        const { data } = matter(content)
        const baseName = file.replace('.md', '')
        
        // 查找对应的图片
        const postImages = await fs.promises.readdir(imagesDir)
          .then(images => images.filter(img => img.startsWith(baseName)))
          .then(images => images.map(img => `/blogs/images/${img}`))
          .catch(() => [])
        
        posts.push({
          title: data.title || baseName,
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          readTime: data.readTime || '5 min read',
          category: data.category || '未分类',
          images: postImages
        })
      }
    }
    
    // 按日期降序排序
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    const outputPath = join(__dirname, '../src/content/blogData.ts')
    const outputContent = `export interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

export const posts: Post[] = ${JSON.stringify(posts, null, 2)}
`
    
    await fs.promises.writeFile(outputPath, outputContent, 'utf-8')
    console.log('博客数据更新成功！')
  } catch (error) {
    console.error('更新博客数据时出错：', error)
  }
}

updateBlogData()