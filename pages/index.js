import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {useTheme} from 'next-themes'

export default function Home() {
  const {theme, setTheme} = useTheme();
  return (
    <div className={styles.container} id={styles.grid}>
      <header className={styles.header}>
          <div>header</div>
      </header>
      <section id="sidenav" className={styles.sidenav}>
          <ul className={styles.navbar}>
              <li className={styles.item}><a className={styles.link}href="#about">About</a></li>
              <li className={styles.item}><a className={styles.link} href="#projects">Projects</a></li>
              <li className={styles.item}><a className={styles.link} href="#skills">Skills</a></li>
              <li className={styles.item}><a className={styles.link} href="#contact">Contact</a></li>
           </ul>
           <button className={styles.darkModeButton} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
             button
           </button>
      </section>
      <main id="main" className={styles.main}>
        <section className={styles.main__text}>...</section>
      </main>
     </div>
  )
}
