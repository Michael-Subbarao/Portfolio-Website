
import Head from "next/head"
import Header from "../sections/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout