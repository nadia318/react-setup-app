import Link from 'next/link'
import Layout from '../../components/layout/layout'
import React from 'react'

export default function UserProfile () {
  return (
    <Layout>
      <h1>Your Name Here</h1>
      <Link href="/"><a>Home</a></Link>
    </Layout>
  )
}
