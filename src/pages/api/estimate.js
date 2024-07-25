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
            const { name, email, phone, businessName, projectDetails, location, projectType, squareFootage, materials, additionalNotes } = req.body;
            console.log('Form data received:', { name, email, phone, businessName, projectDetails, location, projectType, squareFootage, materials, additionalNotes });

            const estimate = calculateEstimate({ projectDetails, location, projectType, squareFootage, materials });
            console.log('Calculated estimate:', estimate);

            await sendEmailToClient({ name, email, estimate });
            console.log('Email sent to client:', email);

            await sendEmailToAdmin({ name, email, phone, businessName, estimate });
            console.log('Email sent to admin');

            await saveToDatabase({ name, email, phone, businessName, projectDetails, location, projectType, squareFootage, materials, additionalNotes, estimate });
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

const sendEmailToClient = async ({ name, email, estimate }) => {
    const data = {
        to: email,
        from: FROM_EMAIL,
        subject: 'Your Free Construction Estimate',
        text: `Hi ${name},\n\nThank you for choosing us for your construction project estimation. Based on your inputs and location, according to our experience and information, your estimate is around $${estimate}.\n\nPlease note that this is a preliminary estimate. For a more detailed and accurate quote, feel free to reach out to us directly.\n\nBest regards,\nQuality Estimation Team`,
        html: `
            <p>Hi ${name},</p>
            <p>Thank you for choosing us for your construction project estimation.</p>
            <p>Based on your inputs and location, according to our experience and information, your estimate is around <strong>$${estimate}</strong>.</p>
            <p>Please note that this is a preliminary estimate. For a more detailed and accurate quote, feel free to reach out to us directly.</p>
            <p>Best regards,<br>Quality Estimation Team</p>
        `,
    };

    await sgMail.send(data);
};

const sendEmailToAdmin = async ({ name, email, phone, businessName, estimate }) => {
    const message = `
        Name: ${name}\r\n
        Email: ${email}\r\n
        Phone: ${phone}\r\n
        Business Name: ${businessName}\r\n
        Estimate: ${estimate}
    `;
    const data = {
        to: EMAIL_TO,
        from: FROM_EMAIL,
        subject: 'New Estimate Request',
        text: message,
        html: `
            <h3>Name: <strong>${name}</strong></h3>
            <h3>Email: <strong>${email}</strong></h3>
            <h3>Phone: <strong>${phone}</strong></h3>
            <h3>Business Name: <strong>${businessName}</strong></h3>
            <h3>Estimate: <strong>$${estimate}</strong></h3>
        `,
    };

    await sgMail.send(data);
};

const saveToDatabase = async ({ name, email, phone, businessName, projectDetails, location, projectType, squareFootage, materials, additionalNotes, estimate }) => {
    const client = await connectToDatabase();
    const db = client.db(MONGODB_DB); 
    const collection = db.collection('estimates');
    await collection.insertOne({ name, email, phone, businessName, projectDetails, location, projectType, squareFootage, materials, additionalNotes, estimate, date: new Date() });
    console.log('Database insertion successful');
};
