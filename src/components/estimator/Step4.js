import React from 'react';

const Step4 = ({ formData, handleChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea 
            name="additionalNotes" 
            value={formData.additionalNotes} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
        ></textarea>
    </div>
);

export default Step4;
