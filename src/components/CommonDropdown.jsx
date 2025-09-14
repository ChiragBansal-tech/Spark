import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

const CommonDropdown = ({ options }) => {
    const defaultOption = {
        label: "Choose",
        color: "bg-[#8134AF] text-white",
    };

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultOption);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <div
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm roboto-500 cursor-pointer ${selected.color}`}
                onClick={() => setOpen(!open)}
            >
                {selected.icon}
                {selected.label}
                <BiChevronDown size={16} />
            </div>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10 animate-fadeIn">
                    {options.map((opt) => (
                        <div
                            key={opt.label}
                            onClick={() => {
                                setSelected(opt);
                                setOpen(false);
                            }}
                            className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                        >
                            {opt.icon}
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommonDropdown;
