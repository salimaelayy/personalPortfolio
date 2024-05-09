import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const serviceCard = () => {
    return (
        <div className="bg-black border-white border  p-6">
        <div className="flex items-center justify-center mb-4">
            <FiCheckCircle className="w-8 h-8 text-white mr-2"/>
            <h3 className="text-lg font-semibold">Service 6</h3>
        </div>
        <p className="text-gray-300">Description of Service 6 goes here.</p>
    </div>
    );
};

export default serviceCard;
