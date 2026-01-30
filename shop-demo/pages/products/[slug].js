import { getAllProducts, getProductBySlug } from '../../lib/products'
import Link from 'next/link'

export default function Product({ product }) {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.images?.[0] || '/foto/71129D33-7FB2-4A5C-B4FB-ABA47E111348_1200x1200.webp'} alt={product.title} className="w-full h-[480px] object-cover rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <div className="text-sm text-gray-600 mb-4">{product.brand}</div>
          <div className="text-3xl font-extrabold mb-4">€{product.price}</div>

          <div className="mb-4">
            <button className="bg-black text-white px-6 py-3 rounded">Contact to Buy</button>
          </div>

          <div className="prose max-w-none">
            <h3>Specifications</h3>
            <ul>
              <li><strong>Mechanism:</strong> {product.mechanism}</li>
              <li><strong>Features:</strong> {product.features?.join(', ')}</li>
              <li><strong>Strap:</strong> {product.strap_material}</li>
              <li><strong>Glass:</strong> {product.glass_material}</li>
              <li><strong>Case size:</strong> {product.case_size}</li>
              <li><strong>Water resistance:</strong> {product.water_resistance}</li>
            </ul>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <Link href="#">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const prods = getAllProducts()
  return {
    paths: prods.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug)
  return { props: { product } }
}