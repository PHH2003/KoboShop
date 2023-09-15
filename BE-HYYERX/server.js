import  express  from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB  from "./config/connectDB.js"
import router from "./routers/routers.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

connectDB()
app.use('/api/v1', router)
const PORT = process.env.PORT || 8001

app.get('/', (req, res) => {
    return res.send('start server success!')
})

app.listen(PORT,() => {
    console.log(`app listen in port ${PORT}`);
})