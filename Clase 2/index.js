const axios = require('axios')
const { get } = require('http')

async function getData() {
    const r = await axios.get('https://no-api-key.com/api/v2/animals/dog')
    console.log(r.data.image)
}

getData()