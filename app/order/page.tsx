import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1>Orders</h1>
      <Link href='/order/1'>Order 1</Link>
    </>
  )
}

export default page
