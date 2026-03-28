import jwt from 'jsonwebtoken'

export async function  jwtMiddleWare(req,res, next){
   const token = req.headers.authorization

     if (!token) {
    return res.status(401).json({ message: "No token" });
  }
try{
 const  decode = jwt.verify(token,"hello")
 req.user= decode;
 next();


}catch(error){
   return res.status(401).json({ message: "Invalid token" });
}
  
}