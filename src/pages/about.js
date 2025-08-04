import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>À propos | Quentin Fontaine</title>
        <meta name="description" content="En savoir plus sur Quentin Fontaine, conseiller immobilier à Dubaï." />
      </Head>

      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">À propos de moi</h1>
        <p className="mb-2">
          Ancien sergent dans l’armée française, je me suis reconverti dans l’immobilier à Dubaï avec un focus sur Dubai Creek Harbour.
        </p>
        <p className="mb-2">
          Je travaille avec Sherwoods Property pour offrir un accompagnement humain, rigoureux et personnalisé à mes clients.
        </p>
        <p>
          Mes valeurs : pragmatisme, clarté, engagement.
        </p>
      </main>
    </>
  );
}
