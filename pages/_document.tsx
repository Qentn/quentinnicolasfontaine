// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document<{ locale?: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // Selon la version de Next, ctx.locale est dispo côté serveur
    // On force 'fr' par défaut si non défini
    // @ts-ignore
    const locale = ctx?.locale || 'fr';
    return { ...initialProps, locale };
  }

  render() {
    // @ts-ignore
    const locale = this.props.locale || 'fr';
    return (
      <Html lang={locale}>
        <Head>
          {/* Google Font Inter */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
