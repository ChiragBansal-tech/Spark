import React, { useState } from "react";

import InvoiceCard from "../../components/cards/InvoiceCard";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";


const InvoiceListSection = () => {
    const [open, setOpen] = useState(true);

    const invoices = [
        { id: 1, client: "Client Name", amount: "₹1,25,000", due: "2024-06-15", status: "dropdown" },
        { id: 2, client: "Client Name", amount: "₹1,25,000", due: "2024-06-15", status: "Unpaid" },
        { id: 3, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Disputed" },
        { id: 4, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Paid" },
        { id: 5, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Paid" },
        { id: 6, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Partially Paid" },
        { id: 7, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Paid" },
        { id: 8, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Overdue" },
        { id: 9, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Awaited" },
        { id: 10, client: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Draft" },
    ];

    return (
        <div className="bg-white ">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <h2 className="text-sm md:text-lg roboto-500 md:roboto-600 text-[#999999] ">Your Invoices</h2>
                {open ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
            </div>

            <div
                className={`transition-all duration-300 ease-in-out overflow-auto px-1 md:px-2 scrollbar-style  ${open ? "max-h-[430px] opacity-100 mt-4 " : "max-h-0 opacity-0"
                    }`}
            >
                {invoices.map((inv) => (
                    <InvoiceCard key={inv.id} invoice={inv} />
                ))}
            </div>
        </div>
    );
};

export default InvoiceListSection;
