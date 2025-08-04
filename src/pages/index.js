import Head from 'next/head';
import Link from 'next/link';
import UserForm from '@/components/UserForm'; // formulaire prospect

export default function Home() {
  return (
    <>
      {/* ✅ Titre de l'onglet navigateur */}
      <Head>
        <title>Accueil | Quentin Nicolas Fontaine</title>
        <meta name="description" content="Conseiller immobilier spécialisé sur Dubai Creek Harbour." />
      </Head>

      {/* ✅ Contenu principal */}
      <main className="min-h-screen bg-gray-50 p-6">
        {/* ✅ Titre d'accueil */}
        <h1 className="text-3xl font-bold mb-4">Bienvenue, je suis Quentin Fontaine</h1>
        <p className="mb-6">
          Spécialisé sur Dubai Creek Harbour je vous accompagne dans chaque étape de votre projet immobilier à Dubaï.
        </p>

        {/* ✅ Liens vers les pages clés */}
        <nav className="mb-8 flex flex-col gap-2">
          <Link href="/dch" className="text-blue-600 hover:underline">Découvrir Dubai Creek Harbour</Link>
          <Link href="/developers" className="text-blue-600 hover:underline">Autres promoteurs & projets</Link>
          <Link href="/about" className="text-blue-600 hover:underline">À propos de moi</Link>
          <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
        </nav>

        {/* ✅ Formulaire intégré directement sur l'accueil */}
        <section>
          <UserForm />
        </section>
      </main>
    </>
  );
}
