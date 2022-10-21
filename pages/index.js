import Head from "next/head";
import axios from "axios";

import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

import styles from "../styles/Home.module.css";
import ResponseCache from "next/dist/server/response-cache";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in dhaka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
}
