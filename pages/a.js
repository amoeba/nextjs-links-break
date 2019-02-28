import React from 'react'
import Link from 'next/link'

export default () => <div>
  <ul>
    <li>
      <Link href='/' as='/'>
        <a>/</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/a'>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href='/b' as='/b'>
        <a>b</a>
      </Link>
    </li>
  </ul>
  a
</div>
