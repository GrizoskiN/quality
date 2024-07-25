import React from 'react';

const Step1 = ({ formData, handleChange }) => {
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
                required 
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={`mt-1 p-2 block w-full border ${validateEmail(formData.email) ? 'border-gray-300' : 'border-red-500'} rounded-md`} 
                required 
            />
            {!validateEmail(formData.email) && formData.email !== '' && (
                <p className="text-red-500 text-sm mt-1">Invalid email address</p>
            )}
            <label className="block text-sm font-medium text-gray-700 mt-4">Phone</label>
            <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
                required 
            />
        </div>
    );
};

export default Step1;
