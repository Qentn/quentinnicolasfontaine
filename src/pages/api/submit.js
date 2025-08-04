import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('realestate');
      const collection = db.collection('leads');

      const { name, email, budget, preferences } = req.body;

      await collection.insertOne({
        name,
        email,
        budget,
        preferences,
        createdAt: new Date(),
      });

      res.status(200).json({ message: 'Lead enregistré avec succès ✅' });
    } catch (error) {
      console.error('Erreur MongoDB:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
