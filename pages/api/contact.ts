import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const {
    name,
    surname,
    email,
    phone,
    preferredTime,
    type,
    message,
    budget,
    propertyType,
    location,
    delivery,
    urgency,
    furnished,
    moveIn,
    surface,
    price,
    propertyToSell,
    availability,
    expectedPrice,
    contractType,
    otherDetails,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailText = `
📬 Nouveau message reçu depuis le site

============================
ℹ️ Informations obligatoires :
============================
- 👤 Nom complet : ${name || 'Non renseigné'} ${surname || ''}
- 📞 Numéro de téléphone : ${phone || 'Non renseigné'}

============================
📎 Informations complémentaires :
============================
- 📧 Email : ${email || 'Non renseigné'}
- 🕐 Préférence horaire de contact : ${preferredTime || '—'}
- 🗂 Type de demande : ${type || '—'}

${message ? `📝 Message personnel :\n${message}\n` : ''}

${type === 'Acheteur' ? `
--- 🏠 Acheteur ---
- 💰 Budget : ${budget || '—'}
- 🏢 Type de bien recherché : ${propertyType || '—'}
- 📍 Emplacement souhaité : ${location || '—'}
- 📦 Livraison souhaitée : ${delivery || '—'}
- ⏱ Urgence : ${urgency || '—'}
- 🪑 Meublé : ${furnished || '—'}
- 📅 Emménagement prévu : ${moveIn || '—'}
` : ''}

${type === 'Vendeur' ? `
--- 🏠 Vendeur ---
- 🏘 Bien à vendre : ${propertyToSell || '—'}
- 📅 Disponibilité : ${availability || '—'}
- 💸 Prix attendu : ${expectedPrice || '—'}
` : ''}

${type === 'Location' ? `
--- 🏠 Location ---
- 🏢 Type de bien : ${propertyType || '—'}
- 📍 Localisation : ${location || '—'}
- 💰 Budget mensuel : ${budget || '—'}
- 📅 Date d’emménagement : ${moveIn || '—'}
- ⏱ Durée du bail : ${contractType || '—'}
- 🪑 Meublé : ${furnished || '—'}
` : ''}

${type === 'Autre' ? `
--- ❓ Autre ---
- 📋 Détails : ${otherDetails || '—'}
` : ''}

${surface ? `📐 Surface souhaitée : ${surface}\n` : ''}
${price ? `💸 Prix souhaité : ${price}\n` : ''}
`;

  const mailOptions = {
    from: `"Site Conseil Dubai" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: 'Nouveau message de contact du site',
    text: mailText,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({ error: 'Erreur lors de l’envoi de l’email' });
  }
}
