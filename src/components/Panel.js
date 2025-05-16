import React from 'react';
import { motion } from 'framer-motion';

const Panel = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring", bounce: 0.3 }}
      className="bg-[#0A2C40] text-white max-w-4xl mx-auto p-6 md:p-8 rounded-2xl shadow-md
                 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <div className="flex items-center text-lg md:text-xl font-semibold mb-2">
        {Icon && <Icon className="text-[#4ADE80] text-2xl mr-3" />}
        <span>{title}</span>
      </div>
      <p className="text-gray-200">{description}</p>
    </motion.div>
  );
};

export default Panel;
