import authroutes from './authRoutes.js'
import taskroutes from './taskRoutes.js'



const setuproutes = (app)=>{
    app.use('/auth', authroutes);
    app.use('/task', taskroutes)

  

}


export default setuproutes