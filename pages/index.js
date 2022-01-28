import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
//把图片都保存到本地 仔细看一遍 然后配置vercel app改造下 

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-screen-2xl">
        {/*  max-w-screen-2xl 1536p 宽度  max-w-7xl 1280p */}
        <Banner />
      </main>
      <ProductFeed products={products} />
    </div>
  )
}


export async function getStaticProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return {
    props: {
      products,
    },
  }
}