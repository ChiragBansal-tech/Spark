import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { createPortal } from "react-dom";

const CommonDropdown = ({ options, selected, onSelect }) => {
    const defaultOption = {
        label: "Choose",
        color: "bg-[#8134AF] text-white",
    };

    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const dropdownRef = useRef(null);

    const current = selected || defaultOption;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        if (!open && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const dropdownHeight = Math.min(options.length * 40, 200); // Max height
            let top = rect.bottom;
            if (top + dropdownHeight > window.innerHeight) {
                top = rect.top - dropdownHeight; // flip up if near bottom
            }
            setPosition({ top, left: rect.left });
        }
        setOpen(!open);
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <div
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm roboto-500 cursor-pointer ${current.color}`}
                onClick={toggleDropdown}
            >
                {current.icon}
                {current.label}
                <BiChevronDown size={16} />
            </div>

            {open &&
                createPortal(
                    <div
                        className="fixed w-40 bg-white border border-gray-200 rounded-lg shadow-md z-50 overflow-auto"
                        style={{
                            top: position.top,
                            left: position.left,
                            maxHeight: "200px",
                        }}
                    >
                        {options.map((opt) => (
                            <div
                                key={opt.label}
                                onClick={() => {
                                    onSelect(opt);
                                    setOpen(false);
                                }}
                                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                            >
                                {opt.icon}
                                {opt.label}
                            </div>
                        ))}
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default CommonDropdown;
