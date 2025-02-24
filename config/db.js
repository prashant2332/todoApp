const mongoose=require('mongoose')

const connectdb= async()=>{
    const conn=await mongoose.connect(process.env.MONGO_URI);

    console.log(`mongodb connected: ${conn.connection.host}`.cyan.bold)
};

module.exports=connectdb;