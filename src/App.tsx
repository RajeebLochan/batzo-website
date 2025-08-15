import { useState } from 'react'

const products = [
  {
    id: 'fire-blanket',
    name: 'Fire Blanket',
    image: '/fire-blanket.png',
    description:
      'Essential home safety. Quickly smother small fires with this durable, easy-to-use fire blanket.',
    link: 'https://www.amazon.com/dp/B0F22Q692C',
  },
  {
    id: 'glow-fort',
    name: 'Glow-in-the-Dark Fort Kit',
    image: '/glow-fort.png',
    description:
      'Build magical forts that glow! Safe, durable pieces spark creativity for hours of imaginative play.',
    link: 'https://a.co/d/0wFNcHO',
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            
            <div>
            <img src="/logo.png" alt="Batzo logo" className="h-10 w-auto" />
              
              <div className="text-xs text-gray-500 -mt-0.5">Safety &amp; Fun, the Batzo Way</div>
            </div>
          </a>
          <nav aria-label="Primary">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <li><a className="hover:text-orange-600" href="#home">Home</a></li>
              <li><a className="hover:text-orange-600" href="#products">Products</a></li>
              <li><a className="hover:text-orange-600" href="#about">About</a></li>
              <li><a className="hover:text-orange-600" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        {open && (
          <div id="mobile-menu" className="md:hidden pb-3">
            <ul className="grid gap-2 text-sm">
              <li><a className="block px-3 py-2 rounded-md hover:bg-gray-100" href="#home" onClick={() => setOpen(false)}>Home</a></li>
              <li><a className="block px-3 py-2 rounded-md hover:bg-gray-100" href="#products" onClick={() => setOpen(false)}>Products</a></li>
              <li><a className="block px-3 py-2 rounded-md hover:bg-gray-100" href="#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a className="block px-3 py-2 rounded-md hover:bg-gray-100" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-sm font-semibold text-orange-600">Safety &amp; Fun, the Batzo Way</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">Welcome to Batzo</h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              We create quality products that keep families safe and spark imagination. Explore our top picks below.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#products" className="inline-flex items-center rounded-lg bg-orange-500 px-5 py-3 text-white font-medium shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Shop Products
              </a>
              <a href="#about" className="inline-flex items-center rounded-lg px-5 py-3 text-gray-700 font-medium hover:text-orange-600">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-100">
              <img
                src="/glow.png"
                alt="Kids building a glow-in-the-dark fort kit"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Product = (typeof products)[number]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4">
          <a
            href={product.link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 text-white font-medium shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  )
}

function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Products</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Batzo</h2>
        <p className="mt-4 text-gray-700">
          At Batzo, our mission is simple: deliver safe, reliable essentials and creative play products that bring
          families peace of mind and joy. We rigorously test for quality and design every detail with real-world use in
          mind—so you can focus on what matters most.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="py-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Batzo logo" className="h-8 w-auto" />
              {/* <span className="font-semibold">Batzo</span> */}
            </div>
            <p className="mt-3 text-sm text-gray-600">Contact: contact.batzo@gmail.com</p>
            <p className="mt-1 text-xs text-gray-500">© {new Date().getFullYear()} Batzo. All rights reserved.</p>
          </div>
          <div className="md:justify-self-end">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Visit Batzo on X" className="text-gray-600 hover:text-orange-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 3H21l-6.56 7.49L22 21h-6.59l-4.7-5.63L4.3 21H2l7.02-8.01L2 3h6.7l4.23 5.11L18.244 3Zm-1.158 16.2h1.826L7.01 4.71H5.09L17.086 19.2Z" />
                </svg>
                <span className="sr-only">X</span>
              </a>
              <a href="#" aria-label="Visit Batzo on Instagram" className="text-gray-600 hover:text-orange-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" aria-label="Visit Batzo on Facebook" className="text-gray-600 hover:text-orange-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 22v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H6v4h3v8h4Z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </div>
  )
}
