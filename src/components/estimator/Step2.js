import React from 'react';

const Step2 = ({ formData, handleChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <select 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
            required
        >
            <option value="">Select Location</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
            <option value="Illinois">Illinois</option>
        </select>
        <label className="block text-sm font-medium text-gray-700 mt-4">Project Type</label>
        <select 
            name="projectType" 
            value={formData.projectType} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
            required
        >
            <option value="">Select Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Institutional">Institutional</option>
        </select>
    </div>
);

export default Step2;
