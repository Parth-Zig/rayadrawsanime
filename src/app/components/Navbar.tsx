import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className=" container flex justify-between items-center p-4 py-8 m-auto w-full">
                <div><Link href={'/'}>Logo</Link></div>
                <div className="flex justify-around items-center gap-12">
                    <a href="#">Insatgram@Id </a>
                    <a href="#">Telegram@Id </a>
                    <a href="#">Email@Id </a>
                </div>
            </div>
        </>
    )
}
