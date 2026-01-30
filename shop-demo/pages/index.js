import Link from 'next/link'
import { getAllProducts } from '../lib/products'

export default function Home({ products }) {
  return (
    <div>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold">MR Watch Demo</div>
          <nav className="flex gap-6">
            <Link href="#">Collections</Link>
            <Link href="#">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Timeless Elegance</h1>
              <p className="mb-4 text-gray-700">Discover our curated collection of premium watches.</p>
              <Link href="#products"><a className="inline-block bg-black text-white px-6 py-2 rounded">Shop Now</a></Link>
            </div>
            <div>
              <img src="/foto/SANTABARBARAPOLOSB.1.10434.2_1200x1200.jpg" alt="hero" className="w-64 h-64 object-cover rounded" />
            </div>
          </div>
        </section>

        <section id="products">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.slug} className="border rounded p-4">
                <img src={p.images?.[0] || '/foto/71129D33-7FB2-4A5C-B4FB-ABA47E111348_1200x1200.webp'} alt={p.title} className="w-full h-64 object-cover mb-3" />
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-gray-600">{p.brand}</div>
                  </div>
                  <div className="text-lg font-bold">€{p.price}</div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/products/${p.slug}`}><a className="text-sm text-blue-600">View</a></Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const products = getAllProducts()
  return { props: { products } }
}