import React, { useState, useEffect, useRef } from "react";
import FinanceCard from "../../components/cards/FinanceCard";
import { FaCrown, FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button";

const FinanceSection = () => {
    const [active, setActive] = useState("3Months");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [customRange, setCustomRange] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef(null);

    const options = [
        { label: "1Month", value: "1Month" },
        { label: "3Months", value: "3Months" },
        {
            label: "1Year",
            value: "1Year",
            icon: (
                <div className="p-2 rounded-full bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-white text-sm">
                    <FaCrown />
                </div>
            )
        },
        {
            label: "Custom",
            value: "Custom",
            icon: (
                <div className="p-2 rounded-full bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-white text-sm">
                    <FaRegCalendarAlt />
                </div>
            )
        },
    ];

    const formatDate = (date) => {
        if (!date) return "";
        return date.toLocaleDateString("en-GB"); // dd/mm/yyyy
    };

    const handleShowResult = () => {
        if (startDate && endDate) {
            setCustomRange(`${formatDate(startDate)} - ${formatDate(endDate)}`);
            setShowPicker(false);
        }
    };

    const handleCancel = () => {
        setStartDate(null);
        setEndDate(null);
        setShowPicker(false);
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target)) {
                setShowPicker(false);
            }
        };
        if (showPicker) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPicker]);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 border-2 shadow border-[#F2F2F2] rounded-2xl px-3 py-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm md:text-lg font-medium md:font-semibold text-[#999999] ">
                        Time Period
                    </p>
                    <span className="text-gray-400 text-sm">
                        {active === "Custom" && customRange
                            ? customRange
                            : "dd:mm:yyyy - dd:mm:yyyy"}
                    </span>
                </div>

                <div className="relative flex gap-3 mt-2 flex-wrap">
                    {options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => {
                                setActive(opt.value);
                                if (opt.value === "Custom") {
                                    setShowPicker(true);
                                } else {
                                    setShowPicker(false);
                                }
                            }}
                            className={`px-4 py-2 rounded-full cursor-pointer text-sm flex items-center gap-2 transition-colors
                                ${active === opt.value
                                    ? "bg-gray-100 border border-[#F3E8FF] bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-transparent bg-clip-text font-medium"
                                    : "bg-gray-100 text-[#999999] border border-transparent"
                                }`}
                        >
                            {opt.label}
                            {opt.icon && <span>{opt.icon}</span>}
                        </button>
                    ))}

                    {active === "Custom" && showPicker && (
                        <div
                            ref={pickerRef}
                            className="absolute right-38 top-14 p-3 bg-gray-200 rounded-2xl shadow-lg z-50"
                        >
                            <div className="flex flex-col gap-3">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(dates) => {
                                        const [start, end] = dates;
                                        setStartDate(start);
                                        setEndDate(end);
                                    }}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    inline
                                />
                                <div className="flex gap-3">
                                    <Button
                                        onClick={handleShowResult}
                                        disabled={!startDate || !endDate}
                                        label="Show Result"
                                        variant="gradient"
                                        className="disabled:opacity-50"
                                    />

                                    <Button
                                        onClick={handleCancel}
                                        label="Cancel"
                                        variant="cancel"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <FinanceCard label="Total Earnings" amount="1,25,000" />
            <div className="grid grid-cols-2 gap-3">
                <FinanceCard label="Payment Awaited" amount="25,000" />
                <FinanceCard label="Payment Overdue" amount="25,000" />
            </div>
        </div>
    );
};

export default FinanceSection;
