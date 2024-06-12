import mongoose from "mongoose";


let isConnected = false;

const connectToDB = async () => {

    if (isConnected) {
        console.log("using existing connection");
        return;
    }


    try {
        const uri =
            "mongodb+srv://dkyang211202:159357@cluster0.b9k81ve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(uri);
        console.log("You successfully connected to MongoDB!");


        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}

export default connectToDB;
