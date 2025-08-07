import { useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';

export default function ContactPage() {
  const { t } = useTranslation('contact');

  const [formData, setFormData] = useState({
    type: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    preferredTime: '',
    message: '',
    budget: '',
    propertyType: '',
    location: '',
    delivery: '',
    urgency: '',
    furnished: '',
    moveIn: '',
    surface: '',
    price: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          type: '',
          name: '',
          surname: '',
          phone: '',
          email: '',
          preferredTime: '',
          message: '',
          budget: '',
          propertyType: '',
          location: '',
          delivery: '',
          urgency: '',
          furnished: '',
          moveIn: '',
          surface: '',
          price: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-6 pt-28">
        <h1 className="text-3xl font-bold mb-6 text-center">{t('title')}</h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4 rounded mb-6 text-sm">
          <p>
            <strong>{t('warning.title')} :</strong> {t('warning.text')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          >
            <option value="">{t('selectType')}</option>
            <option value="Acheteur">{t('types.buyer')}</option>
            <option value="Vendeur">{t('types.seller')}</option>
            <option value="Location">{t('types.renter')}</option>
            <option value="Autre">{t('types.other')}</option>
          </select>

          <input name="name" placeholder={t('placeholders.name')} value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded" />
          <input name="surname" placeholder={t('placeholders.surname')} value={formData.surname} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded" />
          <input name="phone" placeholder={t('placeholders.phone')} value={formData.phone} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded" />
          <input name="email" placeholder={t('placeholders.email')} value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />

          <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded">
            <option value="">{t('placeholders.preferredTime')}</option>
            <option value="Matin">Matin</option>
            <option value="Après-midi">Après-midi</option>
            <option value="Soir">Soir</option>
          </select>

          {/* Acheteur */}
          {formData.type === 'Acheteur' && (
            <>
              <input name="budget" placeholder={t('placeholders.budget')} value={formData.budget} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="propertyType" placeholder={t('placeholders.propertyType')} value={formData.propertyType} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="location" placeholder={t('placeholders.location')} value={formData.location} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <select name="delivery" value={formData.delivery} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded">
                <option value="">{t('placeholders.delivery')}</option>
                <option value="Disponible immédiatement">{t('deliveryOptions.now')}</option>
                <option value="Planifié / Off-plan">{t('deliveryOptions.offplan')}</option>
              </select>
              <input name="urgency" placeholder={t('placeholders.urgency')} value={formData.urgency} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
            </>
          )}

          {/* Vendeur */}
          {formData.type === 'Vendeur' && (
            <>
              <input name="propertyType" placeholder={t('placeholders.propertyType')} value={formData.propertyType} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="location" placeholder={t('placeholders.location')} value={formData.location} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="surface" placeholder={t('placeholders.surface')} value={formData.surface} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="price" placeholder={t('placeholders.price')} value={formData.price} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="urgency" placeholder={t('placeholders.urgency')} value={formData.urgency} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
            </>
          )}

          {/* Locataire */}
          {formData.type === 'Location' && (
            <>
              <input name="budget" placeholder={t('placeholders.budget')} value={formData.budget} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="propertyType" placeholder={t('placeholders.propertyType')} value={formData.propertyType} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <select name="furnished" value={formData.furnished} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded">
                <option value="">{t('placeholders.furnished')}</option>
                <option value="Oui">{t('furnishedOptions.yes')}</option>
                <option value="Non">{t('furnishedOptions.no')}</option>
                <option value="Peu importe">{t('furnishedOptions.any')}</option>
              </select>
              <input name="moveIn" placeholder={t('placeholders.moveIn')} value={formData.moveIn} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
              <input name="urgency" placeholder={t('placeholders.duration')} value={formData.urgency} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" />
            </>
          )}

          <textarea name="message" placeholder={t('placeholders.message')} value={formData.message} onChange={handleChange} rows={5} className="w-full border border-gray-300 p-3 rounded" />

          <button type="submit" disabled={status === 'loading'} className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            {status === 'loading' ? t('submit.sending') : t('submit.send')}
          </button>

          {status === 'success' && <p className="text-green-600 mt-2">{t('submit.success')}</p>}
          {status === 'error' && <p className="text-red-600 mt-2">{t('submit.error')}</p>}
        </form>

        <hr className="my-10" />
        <div className="text-center">
          <a
            href="https://wa.me/971552901489?text=Bonjour%20Quentin..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 text-lg rounded hover:bg-green-600"
          >
            {t('whatsapp.cta')}
          </a>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['contact'])),
    },
  };
}
