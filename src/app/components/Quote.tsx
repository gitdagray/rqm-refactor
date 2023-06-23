'use client'

import { Poppins, Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
})

import { useState, useEffect } from 'react'

export default function Quote() {

    const [fade, setFade] = useState(false)
    const [quote, setQuote] = useState<Quote | undefined>(undefined)
    const [id, setId] = useState(10000)


    useEffect(() => {

        const getQuote = async () => {
            const res = await fetch(
                `/api/randomquote/${id}`, { cache: 'no-store' }
            )
            const json = await res.json()
            setQuote(json)
        }

        getQuote()
    }, [id])

    if (!quote) return <p>Loading...</p>

    return (
        <section className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${fade ? "opacity-0" : "opacity-100"}`}>

            <div className="flex flex-col justify-center items-center">
                <button
                    type="submit"
                    className="p-3 mb-4 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-slate-200 hover:cursor-pointer hover:bg-white mt-6"
                    onClick={() => {
                        setFade(true)
                        setTimeout(() => setId(quote.id), 1000)
                        setTimeout(() => setFade(false), 1200)
                    }}
                >
                    Refresh Quote
                </button>

                <p className={`text-2xl text-center mt-4 ${poppins.className}`}>Author: {quote.author}</p>
                <p className={`text-2xl text-center mt-4 ${poppins.className}`}>Category: {quote.category}</p>
            </div>

            <div className="grow mt-24">
                <p
                    className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}
                >{quote.quote}</p>
            </div>
        </section>
    )
}