import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"


// markup
const IndexPage = () => {

  return (
    <Layout>

      <article className="mx-auto prose lg:prose-lg dark:prose-invert">
        <h2>Community Rules</h2>
        <p>Our rules are designed to foster a fun environment to play Rust in. Our moderators have the final say in what constitutes rule breaking.</p>
        <h3>The Basics</h3>
        <ul>
          <li>No bigotry, racism, or hate speech on the server.</li>
          <li>A minimum age of 16 is required to participate in our community.</li>
        </ul>
        <h3>Gameplay</h3>
        <ul>
          <li>Trash talking is allowed, but keep in mind the above rules about bigotry.</li>
          <li>The max teamsize is 5. A warning then ban will be issued.</li>
        </ul>
        <h3>Discord</h3>
        Please view the rules for the Discord server in the #rules channel.
      </article>
    </Layout>
  )
}

export default IndexPage