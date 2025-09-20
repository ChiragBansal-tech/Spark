import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

const dropIn = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)",
        transition: { duration: 0.25, ease: "easeIn" },
    },
};

const ModalContainer = ({ show, onClose, children }) => {
    return createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[1000] flex items-center justify-center"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose} 
                >
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        variants={backdrop}
                    />

                    <motion.div
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl min-w-[75vw] max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-lg"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ModalContainer;
