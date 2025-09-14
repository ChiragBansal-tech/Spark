import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
    variant = "transparent",
    icon,
    className,
    label,
    ...props
}) => {
    const baseClasses =
        "flex items-center justify-center gap-[8px] rounded-full cursor-pointer border px-4 py-2 text-sm transition-colors";

    const variantClasses = {
        transparent: "bg-transparent text-black text-[17px] md:text-xl border-none",
        gradient:
            "bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-white border-none",
        cancel:
            "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-white",
    };

    return (
        <button
            className={twMerge(baseClasses, variantClasses[variant], className)}
            {...props}
        >
            {icon}
            {label}
        </button>
    );
};

export default Button;
