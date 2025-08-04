import Head from 'next/head';
import UserForm from '@/components/UserForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Quentin Fontaine</title>
        <meta name="description" content="Prenez contact avec Quentin Fontaine pour votre projet immobilier à Dubaï." />
      </Head>

      <main className="min-h-screen bg-white p-6">
        <h1 className="text-2xl font-bold mb-4">Contact direct</h1>
        <p className="mb-6">Remplissez le formulaire ci-dessous, je vous recontacte dans les 24h.</p>
        <UserForm />
      </main>
    </>
  );
}
