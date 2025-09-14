import React from "react";
import CommonDropdown from "../CommonDropdown";
import { BiBell, BiPencil } from "react-icons/bi";

const statusStyles = {
    Paid: "bg-green-100 text-green-600",
    Unpaid: "bg-gray-100 text-gray-500",
    "Partially Paid": "bg-yellow-100 text-yellow-600",
    Disputed: "bg-red-100 text-red-600",
    Overdue: "bg-red-100 text-red-600",
    Awaited: "bg-orange-100 text-orange-600",
    Draft: "bg-gray-100 text-gray-600",
};

const options = [
    { label: "Paid", color: "text-[#34C759] bg-[#9CEFB8]" },
    { label: "Unpaid", color: "text-[#999999] bg-[#F2F2F2]" },
    { label: "Partially Paid", color: "text-[#FFCC00] bg-[#FFFAE5]" },
    { label: "Disputed", color: "text-[#FF2D55] bg-[#FFB1B1]" },
    { label: "Overdue", color: "text-[#FF2D55] bg-[#FFB1B1]", icon: <BiBell size={14} /> },
    { label: "Awaited", color: "text-[#FFCC00] bg-[#FFFAE5]" },
    { label: "Draft", color: "text-[#999999] bg-[#F2F2F2]", icon: <BiPencil size={14} /> },
];

const InvoiceCard = ({ invoice }) => {
    return (
        <div className="flex justify-between items-center bg-white border-2 border-[#F2F2F2] rounded-lg p-3 mb-3 shadow">
            <div>
                <p className="roboto-500 text-sm md:text-base text-[#6B7280]">{invoice.client}</p>
                <p className="text-xs md:text-sm text-[#999999]">
                    {invoice.amount}, Due: {invoice.due}
                </p>
            </div>

            {invoice.status === "dropdown" ? (
                <CommonDropdown options={options} />
            ) : (
                <span
                    className={`px-2 md:px-4 py-2 rounded-full text-xs md:text-base roboto-500 flex items-center gap-1 ${statusStyles[invoice.status]}`}
                >
                    {invoice.status === "Draft" && <BiPencil size={14} />}
                    {invoice.status === "Overdue" && <BiBell size={14} />}
                    {invoice.status}
                </span>
            )}
        </div>
    );
};

export default InvoiceCard;
