import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/Layout'
import Alert from '../../components/Alert'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Page</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <Alert type='success'>This is an alarm!</Alert>
        </Layout>
    )
}