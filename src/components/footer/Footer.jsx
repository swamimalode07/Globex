import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
  <footer
    className="text-white body-font"
    style={{
      backgroundColor: mode === 'dark' ? '#1e293b' : '#1e3a8a',
      color: mode === 'dark' ? '#f8fafc' : '#ffffff',
    }}
  >
    <div className="container px-5 py-16 mx-auto">
      <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
          <h2 className="title-font font-bold tracking-widest text-lg mb-4 uppercase">
            Categories
          </h2>
          <nav className="list-none space-y-2">
            <li><a className="hover:text-blue-300 cursor-pointer">Home</a></li>
            <li><a className="hover:text-blue-300 cursor-pointer">Order</a></li>
            <li><a className="hover:text-blue-300 cursor-pointer">Local For Vocal</a></li>
            <li><a className="hover:text-blue-300 cursor-pointer">Cart</a></li>
          </nav>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
          <h2 className="title-font font-bold tracking-widest text-lg mb-4 uppercase">
            Customer Service
          </h2>
          <nav className="list-none space-y-2">
            <li><Link to="/returnpolicy" className="hover:text-blue-300">Return Policy</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
          </nav>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
          <h2 className="title-font font-bold tracking-widest text-lg mb-4 uppercase">Payment</h2>
          <img src="https://ecommerce-sk.vercel.app/pay.png" alt="payment methods" className="rounded-lg shadow-lg" />
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
          <h2 className="title-font font-bold tracking-widest text-lg mb-4 uppercase">Connect</h2>
          <div className="flex space-x-4">
            <a className="text-white hover:text-blue-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-white hover:text-blue-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-white hover:text-blue-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              </svg>
            </a>
            <a className="text-white hover:text-blue-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      className="text-sm py-4 text-center border-t border-blue-700"
      style={{
        backgroundColor: mode === 'dark' ? '#1e293b' : '#1e40af',
        color: mode === 'dark' ? '#cbd5e1' : '#ffffff',
      }}
    >
      <div className="container mx-auto px-5 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="font-bold text-lg hover:text-blue-300">E-Bharat</Link>
        <p className="mt-2 sm:mt-0">
          © 2025 Globex Online — 
          <a
            href="https://globexonline.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:text-blue-300"
          >
            https://globexonline.vercel.app
          </a>
        </p>
      </div>
    </div>
  </footer>
</div>

  )
}

export default Footer