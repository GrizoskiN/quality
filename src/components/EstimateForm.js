import { useState } from 'react';
import Step1 from './estimator/Step1';
import Step2 from './estimator/Step2';
import Step3 from './estimator/Step3';
import Step4 from './estimator/Step4';
import axios from 'axios';

const ImprovedEstimateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectDetails: '',
        location: '',
        projectType: '',
        squareFootage: '',
        materials: '',
        additionalNotes: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [estimate, setEstimate] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/estimate', formData);
            setEstimate(response.data.estimate);
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Get Your Free Construction Estimate</h2>
            <form onSubmit={handleSubmit}>
                {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
                {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
                {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} />}
                {currentStep === 4 && <Step4 formData={formData} handleChange={handleChange} />}

                <div className="flex justify-between mt-4">
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded-md">
                            Previous
                        </button>
                    )}
                    {currentStep < 4 && (
                        <button type="button" onClick={nextStep} className="bg-blue-600 text-white p-2 rounded-md">
                            Next
                        </button>
                    )}
                    {currentStep === 4 && (
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
                            Submit
                        </button>
                    )}
                </div>
            </form>
            {estimate && (
                <div className="mt-4 p-4 border rounded-md">
                    <h3 className="text-xl font-bold">Your Estimate: ${estimate}</h3>
                </div>
            )}
        </div>
    );
};

export default ImprovedEstimateForm;
