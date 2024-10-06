"use client"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Image src="https://res.cloudinary.com/dcrvrdw9a/image/upload/v1728203366/Screenshot_2024-10-06_at_09.24.49-removebg-preview_znvi29.png" alt="NectarFi Logo" width={160} height={60} />
      <Link href="">Docs</Link>
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
        <WalletMultiButton />
      </button>
    </header>
  )
}

export default Header