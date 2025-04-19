import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
        <section>
          <div className="container mx-auto px-5 md:py-10">
            <div className="flex flex-wrap -m-4 justify-center">
              {[
                {
                  title: "Premium products",
                  description: "get the most affordable and premium products",
                  icon: (
                    <svg
                      className="text-blue-600 w-12 h-12 mb-3 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Affordable Items",
                  description: "Most affordable .",
                  icon: (
                    <svg
                      className="text-blue-600 w-12 h-12 mb-3 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Everthing available",
                  description: "Anything and everything available.",
                  icon: (
                    <svg
  className="text-blue-600 w-12 h-12 mb-3 inline-block"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
  />
</svg>

                  ),
                },
              ].map((item, index) => (
                <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
                  <div
                    className="text-center rounded-2xl border shadow-md hover:shadow-xl transition duration-300 px-6 py-8"
                    style={{
                      backgroundColor: mode === "dark" ? "#2e3137" : "#ffffff",
                      color: mode === "dark" ? "white" : "",
                      borderColor: mode === "dark" ? "#374151" : "#e5e7eb",
                    }}
                  >
                    {item.icon}
                    <h2
                      className="title-font font-semibold text-lg mb-2"
                      style={{ color: mode === "dark" ? "#60a5fa" : "#1f2937" }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="text-sm"
                      style={{ color: mode === "dark" ? "#e5e7eb" : "#4b5563" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    )
}

export default Track