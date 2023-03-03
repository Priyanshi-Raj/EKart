import mongoose from 'mongoose';
export const connection =async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.lpwiemt.mongodb.net/?retryWrites=true&w=majority`;
   try{
   await mongoose.connect(URL,{
    useunifiedTopology:true,
    useNewURLParser: true
   })
   console.log("Database connected successfully");
   }
   catch(error){
    console.log("Error while connecting with database" , error.message);
   }
}
export default connection;