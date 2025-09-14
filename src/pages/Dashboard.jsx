import React from 'react'
import Layout from './Layout'
import InvoiceSection from './sections/InvoiceSection'
import FinanceSection from './sections/FinanceSection'
import ChartSection from './sections/ChartSection'
import InvoiceListSection from './sections/InvoiceListSection'

const Dashboard = () => {
    return (
        <Layout>
            <div className='grid grid-cols-1 p-2 md:p-10 lg:grid-cols-[40%_auto] gap-10 bg-white rounded-t-[46px] md:rounded-[46px] '>
                <InvoiceSection />
                <FinanceSection />
                <ChartSection />
                <InvoiceListSection />
            </div>
        </Layout>
    )
}

export default Dashboard
