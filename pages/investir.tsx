import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';

export default function InvestirPage() {
  const { t } = useTranslation('investir');
  const { locale } = useRouter();

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 pt-28">
        <h1 className="text-4xl font-bold text-center mb-4">{t('title')}</h1>
        <p className="text-center text-lg text-gray-600 mb-12 px-4">
          {t('intro')}
        </p>

        {/* Chiffres clés */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 mb-16 text-center">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="text-4xl font-bold">{t('stats.transactions')}</p>
            <p className="text-gray-600 mt-2">{t('stats.transactionsLabel')}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="text-4xl font-bold">{t('stats.value')}</p>
            <p className="text-gray-600 mt-2">{t('stats.valueLabel')}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="text-4xl font-bold">{t('stats.yield')}</p>
            <p className="text-gray-600 mt-2">{t('stats.yieldLabel')}</p>
          </div>
        </section>

        {/* Graphique */}
        <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t('priceEvolutionTitle')}</h2>
          <Image
            src="/evolution-creek-harbour-vs-dubai.png"
            alt={t('priceEvolutionTitle')}
            width={800}
            height={500}
            className="mx-auto rounded shadow-md"
          />
          <p className="text-gray-500 text-sm mt-2">{t('source')}</p>
        </section>

        {/* Call-to-action */}
        <section className="text-center mb-20 px-4">
          <h3 className="text-2xl font-semibold mb-4">{t('ctaTitle')}</h3>
          <p className="text-lg mb-6">{t('ctaText')}</p>
          <Link href="/contact" locale={locale} legacyBehavior>
            <a className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
              {t('ctaButton')}
            </a>
          </Link>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'investir'])),
    },
  };
}
