import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Faqs from '../components/Faqs'
import PageLoader from '../components/PageLoader'
import Secondary from '../components/Secondary'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [loading])

  return (
    <>
      <Head>
        <title>Challenge</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="msapplication-TileColor" content="#EC7480" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#EC7480" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mada:wght@400;700&family=Paytone+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Secondary />
          <Faqs />
          <Footer />{' '}
        </>
      )}
    </>
  )
}

export default Home
