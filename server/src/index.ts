import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World!'
    })
})

app.listen(8000, () => console.log('Server is running!!!'))
