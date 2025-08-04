import Head from 'next/head';
import Link from 'next/link';

export default function DCH() {
  return (
    <>
      <Head>
        <title>Dubai Creek Harbour | Quentin Fontaine</title>
        <meta name="description" content="Découvrez les projets d’Emaar à Dubai Creek Harbour." />
      </Head>

      <main className="min-h-screen bg-white p-6">
        <h1 className="text-2xl font-bold mb-4">Dubai Creek Harbour</h1>
        <p className="mb-4">Ici je vous présente tous les projets en cours et à venir sur DCH, développés principalement par Emaar.</p>

        {/* ✅ Exemples de sous-projets à venir */}
        <ul className="list-disc ml-6 space-y-2">
          <li>Altan by Emaar</li>
          <li>Creek Waters 2</li>
          <li>Creek Beach</li>
        </ul>

        {/* ✅ Bouton de contact */}
        <div className="mt-6">
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Me contacter à propos d’un projet
          </Link>
        </div>
      </main>
    </>
  );
}
