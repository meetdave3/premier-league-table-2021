import Head from "next/head";
import Image from "next/image";

import { Table } from "./table";
import styles from "../../styles/Home.module.css";

export default function Home(props) {
  const tableData = props?.tableData?.table?.teams;

  return (
    <div className={styles.container}>
      <Head>
        <title>English Premier League (2020 - 2021)</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/logo.png"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.tableWrapper}>
          <div className={styles.header}>
            <Image
              src="/logo.png"
              alt="Premier League logo"
              width={300}
              height={60}
            />
            <h1 className={styles.title}>(2020 - 2021)</h1>
          </div>
          <Table tableData={tableData} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.figma.com/file/4KpDje786vjJ3jTow7krfC/Premier-League-Table?node-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma Design:{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
