import React from 'react'
import { IoClose } from 'react-icons/io5'

const CreateInvoice = ({ onClose }) => {
    return (
        <div className="relative bg-pink110 rounded-xl p-10 w-full max-w-xl min-w-[75vw] max-h-screen overflow-y-auto flex flex-col gap-4">
            <div className='absolute right-2 top-2'>
                <button
                    onClick={onClose}
                    className="bg-transparent border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 cursor-pointer rounded-full p-1"
                >
                    <IoClose className="w-5 h-5" />
                </button>
            </div>
            <div className='bg-gray-100 p-8 rounded-xl'>

                <div className="flex justify-between items-start">
                    <h1 className="text-xl text-black roboto-600">Create Invoice</h1>

                </div>

                <p className="text-black mt-4">Here goes the invoice form content...</p>
            </div>
        </div>
    )
}

export default CreateInvoice
