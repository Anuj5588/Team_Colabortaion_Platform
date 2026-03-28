import app from './app.js'
import { port } from './app.js'

import User from './src/models/User.js'

console.log(User)

app.listen(port,()=>{
    console.log("server is the running on the port", port)
})