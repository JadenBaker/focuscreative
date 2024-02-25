'use client'

import { motion } from "framer-motion";

interface Data {
  children : any,
  onClick : () => void
  handleClick? : () => void
}

const Backdrop = ({ children, onClick, handleClick }:Data) => {
  return (
    <motion.div
      className="h-screen fixed bg-black/30 z-[100px] top-[50px] left-0 w-screen flex flex-col"
      onClick={(e) => {
        onClick();
        if (handleClick) {
          handleClick();
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;