import Head from 'next/head'
import { Mobile, Desktop } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Panda</title>
        <meta name="description" content="Created by Panda Labs" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>

      <Mobile className="lg:hidden" />
      <Desktop className="hidden lg:block relative" />

    </div>
  )
}
