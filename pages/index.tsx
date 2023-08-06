
import Head from 'next/head'
import HomePage from './_home'
import Layout from './_layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tendrs.ai | Business matchmaking, automated</title>
        <link rel="icon" type="image/x-icon" href="/LogoIcon.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tendrs.ai is a revolutionary platform for automated business matchmaking. Find your perfect business partner today!" />
        <meta name="keywords" content="Tendrs, Tendrs.ai, business matchmaking, automated, business partner" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}
