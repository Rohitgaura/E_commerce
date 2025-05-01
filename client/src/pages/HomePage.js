import React from 'react'
import Layout from '../component/Layout.js'
import {useAuth} from "../context/auth.js"

const HomePage = () => {

  const [auth, setAuth] = useAuth()
  return (
    <Layout title={"best offers - shop now"}>

  <h1>HomePage</h1>
  <pre>{JSON.stringify(auth, null , 4)}</pre>


    </Layout>
  )
}

export default HomePage;
