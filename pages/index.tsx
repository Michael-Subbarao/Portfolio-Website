import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useTheme} from 'next-themes'
import Main from "../sections/Main";

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  )
}