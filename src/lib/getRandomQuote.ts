
import getAllQuotes from './getAllQuotes'

export default async function getRandomQuote(id: string): Promise<Quote> {

    const prevQuoteId = parseInt(id)

    const results: Quote[] = await getAllQuotes()

    const ids: number[] = results.map(q => q.id)

    let randomId = prevQuoteId

    while (randomId === prevQuoteId) {
        const randomIndex = Math.floor(Math.random() * ids.length)
        randomId = ids[randomIndex]
    }

    const newQuote = results.find(q => q.id === randomId) as Quote

    return newQuote

}