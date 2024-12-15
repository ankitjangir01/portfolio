import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./quickViewDialog.css";

const QuickViewDialog = ({ isOpen, onClose, dialogRef }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="dialog-overlay"
          onClick={onClose}
        >
          <motion.div
            className="dialog-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the dialog
            ref={dialogRef}
          >
            <h2>Welcome to the Dialog</h2>
            <p>This is an animated dialog that opens when you click the icon.</p>
            <button onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewDialog;