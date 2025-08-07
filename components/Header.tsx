import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function LanguageSwitcher() {
  const { locales, locale, asPath } = useRouter();

  return (
    <div className="flex space-x-2">
      {locales?.map((lng) => (
        <Link key={lng} href={asPath} locale={lng}>
          <button
            disabled={lng === locale}
            className={`px-2 py-1 border rounded ${
              lng === locale ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {lng.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <div>
        <Image
          src="/sherwoods-logo.jpg"
          alt="Sherwoods Logo"
          width={220}
          height={140}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/" className="hover:underline">
              {t('menu.home')}
            </Link>
          </li>
          <li>
            <Link href="/investir" className="hover:underline">
              {t('menu.invest')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              {t('menu.contact')}
            </Link>
          </li>
        </ul>

        {/* Language Switcher intégré */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
