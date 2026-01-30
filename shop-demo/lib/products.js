import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const productsDir = path.join(process.cwd(), 'content', 'products')

export function getAllProducts() {
  const files = fs.readdirSync(productsDir)
  return files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const fullPath = path.join(productsDir, file)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(raw)
    return { slug, ...data }
  })
}

export function getProductBySlug(slug) {
  const fullPath = path.join(productsDir, `${slug}.md`)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  return { slug, ...data, content }
}