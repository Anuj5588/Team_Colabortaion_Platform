import express from 'express'
import { configdb } from './src/config/config.db.js';
import setuproutes from './src/routes/index.js'
 const app = express();

app.use(express.json())
 setuproutes(app)
configdb();

export const port =5000

 setuproutes(app)


export default app





