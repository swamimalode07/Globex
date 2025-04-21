import React, { useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FaUser, FaCartPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function DashboardTab() {
    const context = useContext(myContext)
    const { mode, product, edithandle, deleteProduct, order, user } = context

    const add = () => {
        window.location.href = '/addproduct'
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="tab-container bg-white rounded-lg shadow-xl overflow-hidden" 
                style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <Tabs defaultIndex={0}>
                    <TabList className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 border-b" 
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '' }}>
                        <Tab>
                            <button type="button" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${mode === 'dark' ? 
                                'bg-gray-700 hover:bg-gray-600 text-white' : 
                                'bg-white hover:bg-gray-200 text-gray-800'} shadow-md`}>
                                <MdOutlineProductionQuantityLimits className="text-lg" />
                                <span className="font-medium">Products</span>
                            </button>
                        </Tab>
                        <Tab>
                            <button type="button" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${mode === 'dark' ? 
                                'bg-gray-700 hover:bg-gray-600 text-white' : 
                                'bg-white hover:bg-gray-200 text-gray-800'} shadow-md`}>
                                <AiFillShopping className="text-lg" />
                                <span className="font-medium">Orders</span>
                            </button>
                        </Tab>
                        <Tab>
                            <button type="button" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${mode === 'dark' ? 
                                'bg-gray-700 hover:bg-gray-600 text-white' : 
                                'bg-white hover:bg-gray-200 text-gray-800'} shadow-md`}>
                                <FaUser className="text-lg" />
                                <span className="font-medium">Users</span>
                            </button>
                        </Tab>
                    </TabList>

                    {/* Product Tab */}
                    <TabPanel>
                        <div className='p-6'>
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                                <h1 className='text-2xl md:text-3xl font-bold mb-4 md:mb-0'>
                                    Product Details
                                </h1>
                                <button
                                    onClick={add}
                                    type="button"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${mode === 'dark' ? 
                                        'bg-blue-700 hover:bg-blue-600 text-white' : 
                                        'bg-blue-600 hover:bg-blue-700 text-white'} shadow-md`}>
                                    Add Product <FaCartPlus size={16} />
                                </button>
                            </div>
                            
                            <div className="overflow-x-auto rounded-lg border" 
                                style={{ borderColor: mode === 'dark' ? 'rgb(75 85 99)' : 'rgb(229 231 235)' }}>
                                <table className="min-w-full divide-y" 
                                    style={{ color: mode === 'dark' ? 'white' : 'rgb(55 65 81)' }}>
                                    <thead className={`${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${mode === 'dark' ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'}`}>
                                        {product.map((item, index) => {
                                            const { title, price, imageUrl, category, date } = item;
                                            return (
                                                <tr key={index} className={`hover:${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {index + 1}.
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <img className='w-16 h-16 object-cover rounded' src={imageUrl} alt={title} />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {title}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        ₹{price}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {category}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {date}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex gap-4">
                                                            <button 
                                                                onClick={() => deleteProduct(item)} 
                                                                className={`p-2 rounded-full ${mode === 'dark' ? 
                                                                    'hover:bg-gray-600 text-red-400' : 
                                                                    'hover:bg-gray-200 text-red-500'}`}>
                                                                <FaTrash />
                                                            </button>
                                                            <Link to={'/updateproduct'}>
                                                                <button 
                                                                    onClick={() => edithandle(item)} 
                                                                    className={`p-2 rounded-full ${mode === 'dark' ? 
                                                                        'hover:bg-gray-600 text-blue-400' : 
                                                                        'hover:bg-gray-200 text-blue-500'}`}>
                                                                    <FaEdit />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>

                    {/* Order Tab */}
                    <TabPanel>
                        <div className="p-6">
                            <h1 className='text-2xl md:text-3xl font-bold mb-8'>Order Details</h1>
                            {order.length > 0 ? (
                                order.map((allorder, index) => (
                                    <div key={index} className="mb-8 border rounded-lg overflow-hidden" 
                                        style={{ borderColor: mode === 'dark' ? 'rgb(75 85 99)' : 'rgb(229 231 235)' }}>
                                        <div className={`p-4 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} border-b`} 
                                            style={{ borderColor: mode === 'dark' ? 'rgb(75 85 99)' : 'rgb(229 231 235)' }}>
                                            <div className="flex flex-wrap justify-between items-center">
                                                <div>
                                                    <span className="font-semibold">Order ID:</span> {allorder.paymentId}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Date:</span> {allorder.date}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Customer:</span> {allorder.addressInfo.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y" 
                                                style={{ color: mode === 'dark' ? 'white' : 'rgb(55 65 81)' }}>
                                                <thead className={`${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                                                    </tr>
                                                </thead>
                                                <tbody className={`divide-y ${mode === 'dark' ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'}`}>
                                                    {allorder.cartItems.map((item, itemIndex) => {
                                                        const { title, category, imageUrl, price } = item;
                                                        return (
                                                            <tr key={itemIndex} className={`hover:${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <img className='w-16 h-16 object-cover rounded' src={imageUrl} alt={title} />
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    {title}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    ₹{price}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    {category}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-16">
                                    <AiFillShopping className="text-6xl text-gray-400 mb-4" />
                                    <h2 className='text-xl text-gray-500'>No Orders yet</h2>
                                </div>
                            )}
                        </div>
                    </TabPanel>

                    {/* User Tab */}
                    <TabPanel>
                        <div className="p-6">
                            <h1 className='text-2xl md:text-3xl font-bold mb-8'>User Details</h1>
                            <div className="overflow-x-auto rounded-lg border" 
                                style={{ borderColor: mode === 'dark' ? 'rgb(75 85 99)' : 'rgb(229 231 235)' }}>
                                <table className="min-w-full divide-y" 
                                    style={{ color: mode === 'dark' ? 'white' : 'rgb(55 65 81)' }}>
                                    <thead className={`${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Uid</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${mode === 'dark' ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'}`}>
                                        {user.map((item, index) => {
                                            const { name, uid, email } = item;
                                            return (
                                                <tr key={index} className={`hover:${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {index + 1}.
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {email}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">
                                                        {uid}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default DashboardTab