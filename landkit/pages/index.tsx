import Head from 'next/head'
import Nav from '../src/components/nav/index'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </>
  )
}
