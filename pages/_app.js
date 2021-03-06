import '../src/global.css'
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /></Head>
            <Component {...pageProps} />
        </>
    )
}