import { useState } from 'react';

export default function UserForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    preferences: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSent(true);
      setForm({ name: '', email: '', budget: '', preferences: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-6 border rounded bg-white shadow">
      <h2 className="text-xl font-bold text-center">Contact personnalisé</h2>
      <input name="name" placeholder="Nom complet" required value={form.name} onChange={handleChange} className="border p-2 rounded" />
      <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} className="border p-2 rounded" />
      <input name="budget" placeholder="Budget AED" required value={form.budget} onChange={handleChange} className="border p-2 rounded" />
      <textarea name="preferences" placeholder="Type de bien, localisation, etc." value={form.preferences} onChange={handleChange} className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Envoyer</button>
      {sent && <p className="text-green-600 text-center">✅ Merci, je vous recontacte rapidement !</p>}
    </form>
  );
}
