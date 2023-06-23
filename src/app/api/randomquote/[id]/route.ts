import { NextResponse } from 'next/server'

import getRandomQuote from '@/lib/getRandomQuote'

type Props = {
    params: {
        id: string,
    }
}

export async function GET(request: Request, { params: { id } }: Props) {

    const quote = await getRandomQuote(id)

    return NextResponse.json(quote)
}