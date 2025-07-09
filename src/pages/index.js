import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1>Welcome to My Blog</h1>
      <p>Here are my latest posts:</p>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug}>
          <h2>
            <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
          </h2>
          <p>{frontmatter.date}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/pages/blog'))
  const posts = files
    .filter(name => name.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const markdown = fs.readFileSync(path.join('src/pages/blog', filename), 'utf-8')
      const { data: frontmatter } = matter(markdown)
      return { slug, frontmatter }
    })

  return { props: { posts } }
}
