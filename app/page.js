'use client';

import Head from 'next/head';
import Home from './components/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Christmas Lighting Over Columbus</title>
        <meta name="description" content="Serving Columbus With Stress-Free Holiday Lighting" />
      </Head>
      <Home />
    </>
  );
}