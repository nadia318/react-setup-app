import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <h1>Home page</h1>
      <Link href="/profile/profile"><a>user profile!</a></Link>

    </div>
  )
}
