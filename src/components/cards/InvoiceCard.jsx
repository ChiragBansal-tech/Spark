import React from "react";
import CommonDropdown from "../CommonDropdown";
import { BiBell, BiPencil } from "react-icons/bi";

const options = [
    { label: "Paid", color: "bg-green-100 text-green-600" },
    { label: "Unpaid", color: "bg-gray-100 text-gray-500" },
    { label: "Partially Paid", color: "bg-yellow-100 text-yellow-600" },
    { label: "Disputed", color: "bg-red-100 text-red-600" },
    { label: "Overdue", color: "bg-red-100 text-red-600", icon: <BiBell size={14} /> },
    { label: "Awaited", color: "bg-orange-100 text-orange-600" },
    { label: "Draft", color: "bg-gray-100 text-gray-600", icon: <BiPencil size={14} /> },
];

const InvoiceCard = ({ invoice, onStatusChange }) => {
    return (
        <div className="flex justify-between items-center bg-white border-2 border-[#F2F2F2] rounded-lg p-3 mb-3 shadow">
            <div>
                <p className="roboto-500 text-sm md:text-base text-[#6B7280]">
                    {invoice.client_name}
                </p>
                <p className="text-xs md:text-sm text-[#999999]">
                    Due: {invoice.due_amount}, {new Date(invoice.due_date).toLocaleDateString()}
                </p>
            </div>

            <CommonDropdown
                options={options}
                selected={invoice.selectedOption}
                onSelect={(opt) => onStatusChange(invoice.id, opt)}
            />
        </div>
    );
};

export default InvoiceCard;
