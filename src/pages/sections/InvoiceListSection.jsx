import React, { useEffect, useState } from "react";
import InvoiceCard from "../../components/cards/InvoiceCard";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import axios from "axios";

const InvoiceListSection = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://68ca7f27430c4476c349b61c.mockapi.io/api/v1/invoices")
      .then((response) => {
        // initialize status as null for all cards
        const withDropdown = response.data.map((inv) => ({
          ...inv,
          selectedOption: null,
        }));
        setData(withDropdown);
      });
  }, []);

  const handleStatusChange = (id, newOption) => {
    setData((prev) =>
      prev.map((inv) =>
        inv.id === id ? { ...inv, selectedOption: newOption } : inv
      )
    );
  };

  return (
    <div className="bg-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-sm md:text-lg roboto-500 md:roboto-600 text-[#999999]">
          Your Invoices
        </h2>
        {open ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-auto px-1 md:px-2 scrollbar-style  
          ${open ? "max-h-[430px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        {data.map((inv) => (
          <InvoiceCard
            key={inv.id}
            invoice={inv}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default InvoiceListSection;
