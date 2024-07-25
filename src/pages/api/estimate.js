import sgMail from '@sendgrid/mail';
import { MongoClient } from 'mongodb';

const { SENDGRID_API_KEY, FROM_EMAIL, EMAIL_TO, MONGODB_URI, MONGODB_DB } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

let cachedClient = null;

const connectToDatabase = async () => {
    if (cachedClient) {
        return cachedClient;
    }
    const client = new MongoClient(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    cachedClient = client;
    return client;
};

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { name, email, phone, projectDetails, location, projectType, squareFootage, materials, additionalNotes } = req.body;
            console.log('Form data received:', { name, email, phone, projectDetails, location, projectType, squareFootage, materials, additionalNotes });

            const estimate = calculateEstimate({ projectDetails, location, projectType, squareFootage, materials });
            console.log('Calculated estimate:', estimate);

            await sendEmailToClient({ name, email, phone, location, projectType, squareFootage, materials, estimate });
            console.log('Email sent to client:', email);

            await sendEmailToAdmin({ name, email, phone, location, projectType, squareFootage, materials, estimate });
            console.log('Email sent to admin');

            await saveToDatabase({ name, email, phone, projectDetails, location, projectType, squareFootage, materials, additionalNotes, estimate });
            console.log('Data saved to database');

            res.status(200).json({ success: true, estimate });
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Error processing estimate:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

const calculateEstimate = ({ projectDetails, location, projectType, squareFootage, materials }) => {
    let baseCost = 50000;
    if (location === 'California') baseCost += 10000;
    if (location === 'New York') baseCost += 15000;
    if (projectDetails.includes('commercial')) baseCost += 20000;
    if (projectType.toLowerCase() === 'commercial') baseCost += 20000;
    baseCost += squareFootage * 150;
    if (materials.toLowerCase().includes('steel')) baseCost += 5000;
    return baseCost;
};

const sendEmailToClient = async ({ name, email, phone, location, projectType, squareFootage, materials, estimate }) => {
    const data = {
        to: email,
        from: FROM_EMAIL,
        subject: 'Your Free Construction Estimate',
        text: `Hi ${name},

Thank you for choosing us for your construction project estimation. Based on the information you provided, here is a detailed cost breakdown for your ${projectType.toLowerCase()} project in ${location}.

Detailed Cost Breakdown:
1. Demolition
   - Selective Demolition: $6 - $12 per square foot
   - Full Demolition: $14 - $20 per square foot
   - Disposal Fees: $400 - $1,000 per dumpster load (30 cubic yards)
2. Electrical Work
   - Electrical Rough-In: $8 - $16 per square foot
   - Lighting Fixtures Installation: $160 - $350 per fixture
   - Data Cabling and Networking: $4 - $6 per linear foot
   - Switches and Outlets Installation: $140 - $250 per outlet/switch
3. Interior Finishing
   - Drywall Installation: $2 - $4 per square foot
   - Painting: $2 - $4 per square foot
   - Flooring:
     - Carpet: $5 - $9 per square foot
     - Vinyl: $4 - $7 per square foot
     - Hardwood: $10 - $18 per square foot
   - Millwork and Trim: $8 - $16 per linear foot
   - Ceiling Installation (Acoustic Tiles): $6 - $8 per square foot

Total Estimated Cost for your ${squareFootage} square foot ${projectType.toLowerCase()} project with ${materials.toLowerCase()} materials:
   - Demolition: $46,400
   - Electrical Work: $84,750
   - Interior Finishing: $106,000

Grand Total Estimated Cost: $237,150

Disclaimer:
These costs are estimates based on typical projects and can vary based on specific project details, materials chosen, and market conditions. For precise budgeting, consult with local contractors and use detailed project plans and specifications. Utilize tools like RSMeans and ProEst for updated cost data specific to the project's location and scope.

Best regards,
Quality Estimation Team`,
        html: `
            <p>Hi ${name},</p>
            <p>Thank you for choosing us for your construction project estimation. Based on the information you provided, here is a detailed cost breakdown for your ${projectType.toLowerCase()} project in ${location}.</p>
            <h3>Detailed Cost Breakdown:</h3>
            <ul>
                <li><strong>Demolition</strong>
                    <ul>
                        <li>Selective Demolition: $6 - $12 per square foot</li>
                        <li>Full Demolition: $14 - $20 per square foot</li>
                        <li>Disposal Fees: $400 - $1,000 per dumpster load (30 cubic yards)</li>
                    </ul>
                </li>
                <li><strong>Electrical Work</strong>
                    <ul>
                        <li>Electrical Rough-In: $8 - $16 per square foot</li>
                        <li>Lighting Fixtures Installation: $160 - $350 per fixture</li>
                        <li>Data Cabling and Networking: $4 - $6 per linear foot</li>
                        <li>Switches and Outlets Installation: $140 - $250 per outlet/switch</li>
                    </ul>
                </li>
                <li><strong>Interior Finishing</strong>
                    <ul>
                        <li>Drywall Installation: $2 - $4 per square foot</li>
                        <li>Painting: $2 - $4 per square foot</li>
                        <li>Flooring:
                            <ul>
                                <li>Carpet: $5 - $9 per square foot</li>
                                <li>Vinyl: $4 - $7 per square foot</li>
                                <li>Hardwood: $10 - $18 per square foot</li>
                            </ul>
                        </li>
                        <li>Millwork and Trim: $8 - $16 per linear foot</li>
                        <li>Ceiling Installation (Acoustic Tiles): $6 - $8 per square foot</li>
                    </ul>
                </li>
            </ul>
            <h3>Total Estimated Cost for your ${squareFootage} square foot ${projectType.toLowerCase()} project with ${materials.toLowerCase()} materials:</h3>
            <ul>
                <li>Demolition: $46,400</li>
                <li>Electrical Work: $84,750</li>
                <li>Interior Finishing: $106,000</li>
            </ul>
            <h3>Grand Total Estimated Cost: $237,150</h3>
            <p><strong>Disclaimer:</strong><br>
            These costs are estimates based on typical projects and can vary based on specific project details, materials chosen, and market conditions. For precise budgeting, consult with local contractors and use detailed project plans and specifications. Utilize tools like RSMeans and ProEst for updated cost data specific to the project's location and scope.</p>
            <p>Best regards,<br>Quality Estimation Team</p>
        `,
    };

    await sgMail.send(data);
};

// const sendEmailToAdmin = async ({ name, email, phone, location, projectType, squareFootage, materials, estimate }) => {
//     const message = `
//         Name: ${name}\r\n
//         Email: ${email}\r\n
//         Phone: ${phone}\r\n
//         Location: ${location}\r\n
//         Project Type: ${projectType}\r\n
//         Square Footage: ${squareFootage}\r\n
//         Materials: ${materials}\r\n
//         Estimate: $${estimate}
//     `;
//     const data = {
//         to: email,
//         from: FROM_EMAIL,
//         subject: 'New Estimate Request',
//         text: message,
//         html: `
//             <h3>Name: <strong>${name}</strong></h3>
//             <h3>Email: <strong>${email}</strong></h3>
//             <h3>Phone: <strong>${phone}</strong></h3>
//             <h3>Location: <strong>${location}</strong></h3>
//             <h3>Project Type: <strong>${projectType}</strong></h3>
//             <h3>Square Footage: <strong>${squareFootage}</strong></h3>
//             <h3>Materials: <strong>${materials}</strong></h3>
//             <h3>Estimate: <strong>$${estimate}</strong></h3>
//         `,
//     };

//     await sgMail.send(data);
// };
