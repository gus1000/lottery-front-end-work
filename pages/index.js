// imports  work with our front end
//require does not
//nodes != ecmascript/javascript javascript 
//backend js is a little bit different from front end js

import { useMoralis } from 'react-moralis'


import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ManualHeader from '../components/ManualHeader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManualHeader />
      {/* header /connect button */}
      Hello!


      
    </div>
  )
}
