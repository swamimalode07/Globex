import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order, deleteOrder } = context
  
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <div className="h-full pt-10">
          {order
            .filter(obj => obj.userid === userid)
            .map((order) => {
              return (
                <div key={order.paymentId} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mb-8">
                  <div className="rounded-lg md:w-2/3">
                    <div className="bg-white p-6 shadow-md rounded-lg mb-4" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '' }}>
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
                          Order #{order.paymentId}
                        </h2>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status === 'completed' ? 'Paid' : 'Pending'}
                          </span>
                          <span className="ml-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>Order Date: {order.date}</p>
                      <p className="text-sm mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Delivery Address: {order.addressInfo.address}, {order.addressInfo.pincode}
                      </p>
                      
                      {order.cartItems.map((item, index) => {
                        return (
                          <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" 
                            style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2 className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                <p className="mt-1 text-xs" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                                <p className="mt-1 text-xs" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                              </div>
                              {order.status === 'pending' && (
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                  <div onClick={() => deleteOrder(order.paymentId)} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ) 
                      })}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      ) : (
        <h2 className='text-center text-2xl text-gray-300 pt-28 pb-28'>No Orders yet</h2>
      )}
    </Layout>
  )
}

export default Order