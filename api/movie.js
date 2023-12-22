import fetch from 'node-fetch'

const {APIKEY} = process.env

export default async function handelr(req,res) {
    const {title,page,id} = JSON.parse(req.body)
    const url = id
    ?`https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=frull`
    :`https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`

    const res = await fetch(url)
    const json = res.json()
    response.status(200).json(json)
}