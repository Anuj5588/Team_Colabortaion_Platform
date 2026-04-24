import jwt from 'jsonwebtoken'

export async function  jwtMiddleWare(req,res, next){
  console.log("req",req)
   const token = req.headers.token
   console.log("headers",req.headers)

     if (!token) {
    return res.status(401).json({ message: "No token" });
  }
try{
 const  decode = jwt.verify(token,"hello")
 console.log("decode")
 req.user= decode;
 next();


}catch(error){
   return res.status(401).json({ message: "Invalid token" });
}
  
}