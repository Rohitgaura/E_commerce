import React from 'react'
import Layout from '../component/Layout.js'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <h1>About Page</h1>
    </Layout>
  )
}

Layout.defaultProps = {
  title : "Ecommerce - app shope now",
  description : "mern stack project",
  keywords : "e commerce, react, node, express, mongo",
  author : "Rohit Kumar"
}

export default About
