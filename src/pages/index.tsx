import Banner from "../components/Banner";
import { Features } from "../components/Features";
import { Layout } from "../components/Layout";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Features />
      <Slider />
    </Layout>
  )
}