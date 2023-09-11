import mongoose from 'mongoose';

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        mongoose.connection.on("connected",()=>{
          console.log("Mongodb connected successfully")
        })
        mongoose.connection.on("error",(err)=>{
          console.log("Mongodb has error", err);
          process.exit();
        })
      } catch (error) {
        throw new Error("connection failer", error)
      }
}
export default connect;