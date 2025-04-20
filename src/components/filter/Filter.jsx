import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Filter() {
    const context = useContext(myContext)
    const { mode, searchkey, setSearchkey, filterType, setFilterType,
        filterPrice, setFilterPrice, product } = context

    return (
      <>
      </>
      //   <div>
      //   <div className="container mx-auto px-4 mt-5">
      //     <div
      //       className="p-5 rounded-2xl border drop-shadow-xl border-blue-100"
      //       style={{
      //         backgroundColor: mode === 'dark' ? '#1e293b' : '#f0f9ff',
      //         color: mode === 'dark' ? '#e0f2fe' : '#0f172a',
      //       }}
      //     >
      //       {/* Search Input */}
      //       <div className="relative">
      //         <div className="absolute flex items-center ml-3 h-full">
      //           <svg
      //             className="w-5 h-5 text-blue-500"
      //             fill="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path d="M21.53 20.47l-4.82-4.82a7.5 7.5 0 10-1.06 1.06l4.82 4.82a.75.75 0 101.06-1.06zM10.5 17a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
      //           </svg>
      //         </div>
      //         <input
      //           type="text"
      //           name="searchkey"
      //           value={searchkey}
      //           onChange={(e) => setSearchkey(e.target.value)}
      //           id="searchkey"
      //           placeholder="Search products..."
      //           className="pl-10 pr-4 py-3 w-full rounded-md text-sm border border-blue-200 focus:border-blue-500 outline-none transition-all duration-200"
      //           style={{
      //             backgroundColor: mode === 'dark' ? '#334155' : '#ffffff',
      //             color: mode === 'dark' ? '#e0f2fe' : '#1e293b',
      //           }}
      //         />
      //       </div>
      
      //       {/* Filters */}
      //       <div className="flex items-center justify-between mt-6 mb-2">
      //         <p className="font-semibold text-blue-100 dark:text-blue-300 text-black">Filters</p>
      //         <button
      //           className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium rounded-md transition-all duration-200"
      //           onClick={() => {
      //             setSearchkey('');
      //             setFilterType('');
      //             setFilterPrice('');
      //           }}
      //         >
      //           Reset Filter
      //         </button>
      //       </div>
      
      //       {/* Dropdowns */}
      //       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-3">
      //         <select
      //           value={filterType}
      //           onChange={(e) => setFilterType(e.target.value)}
      //           className="px-4 py-3 w-full rounded-md border border-blue-200 text-sm focus:border-blue-500 outline-none transition-all duration-200"
      //           style={{
      //             backgroundColor: mode === 'dark' ? '#334155' : '#ffffff',
      //             color: mode === 'dark' ? '#e0f2fe' : '#1e293b',
      //           }}
      //         >
      //           <option value="">All Categories</option>
      //           {[...new Set(product.map((item) => item.category))].map((category, index) => (
      //             <option key={index} value={category}>{category}</option>
      //           ))}
      //         </select>
      
      //         <select
      //           value={filterPrice}
      //           onChange={(e) => setFilterPrice(e.target.value)}
      //           className="px-4 py-3 w-full rounded-md border border-blue-200 text-sm focus:border-blue-500 outline-none transition-all duration-200"
      //           style={{
      //             backgroundColor: mode === 'dark' ? '#334155' : '#ffffff',
      //             color: mode === 'dark' ? '#e0f2fe' : '#1e293b',
      //           }}
      //         >
      //           <option value="">All Prices</option>
      //           {[...new Set(product.map((item) => item.price))].map((price, index) => (
      //             <option key={index} value={price}>{price}</option>
      //           ))}
      //         </select>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      
    )
}

export default Filter