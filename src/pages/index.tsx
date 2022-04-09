import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"


// markup
const IndexPage = () => {

  return (
    <Layout>
      <div className="relative">
        <StaticImage loading="eager" layout="fullWidth" src="../images/hero.png" alt="" />
        <div className="flex flex-col absolute top-0 left-0 items-center w-full h-full justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-3">Welcome to The ChumJar</h2>
          <p className="text-gray-200 text-xl">A fun Vanilla+ Rust Server with a growing community</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
