import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Google Tag Manager */}
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P4N2QHQJ');`,
						}}
					/>
					{/* End Google Tag Manager */}
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/static/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicons/favicon2nnn.ico"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/favicons/favicon2nnn.ico"
					/>
					<link
						rel="manifest"
						href="/static/favicons/manifest.json"
					/>
				</Head>
				<body>
					{/* Google Tag Manager (noscript) */}
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-P4N2QHQJ"
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						></iframe>
					</noscript>
					{/* End Google Tag Manager (noscript) */}

					<ColorModeScript
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
