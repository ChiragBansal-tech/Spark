import React, { useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import useUpdateQueryParam from '../../hooks/useUpdateQueryParam'
import ModalContainer from '../../utils/ModelContainer'
import CreateInvoice from '../../forms/CreateInvoice'

const InvoiceSection = () => {
    const location = useLocation()
    const updateQueryParam = useUpdateQueryParam()
    const [uploadedFile, setUploadedFile] = useState(null)
    const fileInputRef = useRef(null)

    const showModal = new URLSearchParams(location.search).get('modal') === 'create-invoice'

    const handleCreateInvoiceClick = () => {
        updateQueryParam({ modal: 'create-invoice' })
    }

    const handleCloseModal = () => {
        updateQueryParam({ modal: null })
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file && file.type === 'application/pdf') {
            setUploadedFile(file)
        } else if (file) {
            alert('Please upload a PDF file only!')
        }
    }

    const handleRemoveFile = (e) => {
        e.stopPropagation() 
        setUploadedFile(null)
    }

    return (
        <div className='flex flex-col gap-8'>
            <div
                className='flex flex-col justify-center items-center  bg-gray-100 p-6 py-15 rounded-[46px] md:rounded-2xl cursor-pointer'
                onClick={handleCreateInvoiceClick}
            >
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-white text-xl">
                        <FaPlus />
                    </div>
                </div>

                <h2 className="text-2xl font-bold bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-transparent bg-clip-text mb-2">
                    Create New Invoice
                </h2>
                <p className="text-gray-600 mb-4">Start by creating and sending new invoice</p>
            </div>

            <div
                className="text-sm md:text-base text-center bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-transparent bg-clip-text underline cursor-pointer flex justify-center items-center gap-2 group"
                onClick={handleUploadClick}
            >
                {uploadedFile ? (
                    <>
                        {uploadedFile.name}
                        <IoCloseCircle
                            className=" opacity-100 transition-opacity duration-200 cursor-pointer text-red-500"
                            size={18}
                            onClick={handleRemoveFile}
                        />
                    </>
                ) : (
                    'Or upload an existing invoice and set payment reminder'
                )}
            </div>

            <input
                type="file"
                accept="application/pdf"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {showModal && (
                <ModalContainer show={showModal} onClose={handleCloseModal}>
                    <CreateInvoice onClose={handleCloseModal} />
                </ModalContainer>
            )}
        </div>
    )
}

export default InvoiceSection
