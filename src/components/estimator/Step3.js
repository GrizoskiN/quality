import React from 'react';

const Step3 = ({ formData, handleChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Square Footage</label>
        <input 
            type="number" 
            name="squareFootage" 
            value={formData.squareFootage} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
            placeholder="e.g., 2000" 
            required 
        />
        <label className="block text-sm font-medium text-gray-700 mt-4">Project Details</label>
        <textarea 
            name="projectDetails" 
            value={formData.projectDetails} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
            required 
        ></textarea>
        <label className="block text-sm font-medium text-gray-700 mt-4">Materials</label>
        <select 
            name="materials" 
            value={formData.materials} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
            required
        >
            <option value="">Select Materials</option>
            <option value="Concrete">Concrete</option>
            <option value="Steel">Steel</option>
            <option value="Wood">Wood</option>
            <option value="Brick">Brick</option>
        </select>
    </div>
);

export default Step3;
