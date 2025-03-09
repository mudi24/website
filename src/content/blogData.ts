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
    "title": "人工智能学习路线规划",
    "description": "人工智能学习路线规划",
    "date": "2025-12-03T00:00:00.000Z",
    "readTime": "8 min read",
    "category": "人工智能"
  },
  {
    "title": "大模型 Tokenizer 差异分析",
    "description": "作为人工智能领域的研究方向，不同大模型使用的 tokenizer 有着显著差异，这些差异直接影响模型的性能、效率和语言理解能力。下面我将详细分析 ChatGPT、Claude、DeepSeek 和通义千问等主流大模型使用的 tokenizer 差异。",
    "date": "2025-01-03T00:00:00.000Z",
    "readTime": "8 min read",
    "category": "人工智能"
  }
]
