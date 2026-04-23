import authroutes from './authRoutes.js'
import taskroutes from './taskRoutes.js'
import teamroutes from './teamRoutes.js'




const setuproutes = (app)=>{
    app.use('/auth', authroutes);
    app.use('/task', taskroutes)
    app.use('/team',  teamroutes )

  

}


export default setuproutes