import { Html, Head, Main, NextScript } from 'next/document'
/*this file is optional*/
export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    rel="stylesheet"
                />
            </Head>
            <body className='bg-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}