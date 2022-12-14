import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SlashAuth Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SlashAuth Starter using <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <button className={styles.card} onClick={async () => {
            const resp = await fetch('/api/test', {
              method: 'POST',
            });
            if (resp.ok) {
              resp.json().then((data) => console.log(data));
            } else {
              console.log('error creating: ', resp);
            }
          }}>
            <h2>Create a test in DB</h2>
            <p>Click here to create a DB row in the test table and print to console</p>
          </button>
          <button className={styles.card} onClick={async () => {
            const resp = await fetch('/api/test', {
              method: 'POST',
            });
            if (resp.ok) {
              const json = await resp.json();
              const getResp = await fetch(`/api/test?id=${json.id}`, {
                method: 'GET',
              })
              if (getResp.ok) {
                getResp.json().then((data) => console.log(data));
              } else {
                console.log('error getting: ', getResp);
              }
            } else {
              console.log('error creating: ', resp);
            }
          }}>
            <h2>Fetch a Test from DB</h2>
            <p>Click here to create and then fetch from the DB</p>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
