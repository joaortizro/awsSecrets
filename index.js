import express from "express"

const port = 3000
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/test', (req, res) => {
    res.status(200)
    res.json({ hola: 'mundo' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})