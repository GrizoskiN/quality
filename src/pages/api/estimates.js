import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async (req, res) => {
    try {
        if (req.method === 'GET') {
            if (!client.isConnected()) await client.connect();
            const db = client.db('qualityEstimation');
            const collection = db.collection('estimates');
            const estimates = await collection.find().sort({ date: -1 }).toArray();
            res.status(200).json(estimates);
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Error fetching estimates:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
