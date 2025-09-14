import React from 'react'

const FinanceCard = ({ label, amount }) => {
    return (
        <div className='flex flex-col gap-2 border-2 border-[#F2F2F2] shadow rounded-2xl px-3 py-4 '>
            <h3 className='font-medium text-sm md:text-lg text-[#999999]'>{label}</h3>
            <p className='text-base md:text-2xl font-semibold text-[#8134AF]'>${amount}</p>
        </div>
    )
}

export default FinanceCard
