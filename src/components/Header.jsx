import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import profilePicture from "../assets/profilePicture.svg"
const Header = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const title = path.charAt(0).toUpperCase() + path.slice(1);

    return (
        <div className="flex justify-between py-5 items-center">
            <div className="flex items-center">
                <div className="">
                    <Button icon={<IoMdArrowRoundBack className="w-5 h-5" />} />
                </div>
                <h2 className="text-xl md:text-4xl text-black font-semibold capitalize leading-none">
                    {title}
                </h2>
            </div>

            <div className="rounded-full w-10 h-10 md:w-15  md:h-15 overflow-hidden ">
                <img
                    src={profilePicture}
                    alt="profilePicture"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default Header;
