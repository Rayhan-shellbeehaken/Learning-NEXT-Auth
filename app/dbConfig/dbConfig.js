import mongoose, { mongo } from "mongoose";


export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;

        connection.on('connection', () => {
            console.log("Database connected succesfully...");
        })

        connection.on('error', (err) => {
            console.log("Facing error to connect db. "+err);
            process.exit();
        })

    }catch(error){
        console.log("Something went wrong in connecting to db...");
        console.log(error);
    }
}