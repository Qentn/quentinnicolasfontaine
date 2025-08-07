import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';

export default function HomePage() {
  const { t } = useTranslation('common');

  const images = [
    '/carousel/burj-khalifa.jpg',
    '/carousel/creek-harbour.jpg',
    '/carousel/palm-jumeirah.jpg',
    '/carousel/downtown-views.jpg',
    '/carousel/marina-vista.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="h-[70vh] mt-20 flex flex-col items-center justify-center text-center bg-white px-4">
          <div className="mb-6">
            <Image
              src="/profile.jpg"
              alt="Photo de Quentin"
              width={180}
              height={180}
              className="rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Quentin Nicolas Fontaine</h1>
          <p className="text-2xl text-gray-700 mb-8">
            {t('hero.subtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-black text-white px-6 py-3 text-lg hover:bg-gray-800"
          >
            {t('hero.cta')}
          </Link>
        </section>

        <section className="py-10 bg-gray-100 text-center">
          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <Image
              src={images[currentIndex]}
              alt="Project Image"
              width={1000}
              height={600}
              className="transition duration-500 ease-in-out object-cover w-full h-[400px]"
            />
          </div>
        </section>

        <section className="py-12 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-8">{t('about.title')}</h2>
          <div className="max-w-2xl mx-auto px-4 text-gray-800 text-lg leading-relaxed space-y-6">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
}
