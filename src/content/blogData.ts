interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content?: string
}

export const posts: Post[] = [
  {
    title: '使用Vue3和TypeScript构建现代化Web应用',
    description: '探讨Vue3的组合式API和TypeScript带来的开发体验提升',
    date: '2024-03-05',
    readTime: '5 min read',
    category: '前端开发'
  },
  {
    title: '深入理解React Hooks',
    description: '详细解析React Hooks的工作原理和最佳实践',
    date: '2024-03-03',
    readTime: '8 min read',
    category: '前端开发'
  },
  {
    title: 'Node.js性能优化实践',
    description: '分享在Node.js应用中提升性能的关键技巧和经验',
    date: '2024-03-01',
    readTime: '10 min read',
    category: '后端开发'
  },
  {
    title: '大模型 Tokenizer 差异分析',
    description: '深入探讨不同大模型Tokenizer的实现差异和性能影响',
    date: '2024-03-07',
    readTime: '12 min read',
    category: 'AI技术'
  }
]