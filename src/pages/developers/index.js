import Head from 'next/head';
import Link from 'next/link';

export default function Developers() {
  return (
    <>
      <Head>
        <title>Autres promoteurs | Quentin Fontaine</title>
        <meta name="description" content="Présentation des autres promoteurs immobiliers à Dubaï." />
      </Head>

      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">Autres développeurs & projets</h1>
        <p className="mb-4">En plus de Dubai Creek Harbour, je vous accompagne sur d'autres projets à fort potentiel :</p>

        <ul className="list-disc ml-6 space-y-2">
          <li>DAMAC (ex: Coral Reef, Lagoons)</li>
          <li>Sobha Realty (ex: Sobha Hartland)</li>
          <li>Ellington, Binghatti, Select Group...</li>
        </ul>

        <div className="mt-6">
          <Link href="/contact" className="text-blue-600 hover:underline">
            Discutons ensemble de vos critères
          </Link>
        </div>
      </main>
    </>
  );
}
