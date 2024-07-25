import { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [estimates, setEstimates] = useState([]);

    useEffect(() => {
        const fetchEstimates = async () => {
            try {
                const response = await axios.get('/api/estimates');
                setEstimates(response.data);
            } catch (error) {
                console.error('Error fetching estimates', error);
            }
        };
        fetchEstimates();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 my-[20%]">
            <h2 className="text-2xl font-bold mb-4">Estimates</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Business Name</th>
                        <th className="px-4 py-2">Project Details</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Estimate</th>
                        <th className="px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {estimates.map((estimate, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{estimate.name}</td>
                            <td className="border px-4 py-2">{estimate.email}</td>
                            <td className="border px-4 py-2">{estimate.phone}</td>
                            <td className="border px-4 py-2">{estimate.businessName}</td>
                            <td className="border px-4 py-2">{estimate.projectDetails}</td>
                            <td className="border px-4 py-2">{estimate.location}</td>
                            <td className="border px-4 py-2">{estimate.estimate}</td>
                            <td className="border px-4 py-2">{new Date(estimate.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
