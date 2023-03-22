import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection = async () => {
  const URL =
    `mongodb://${USERNAME}:${PASSWORD}@ac-sdgre4m-shard-00-00.zhyuhtu.mongodb.net:27017,ac-sdgre4m-shard-00-01.zhyuhtu.mongodb.net:27017,ac-sdgre4m-shard-00-02.zhyuhtu.mongodb.net:27017/?ssl=true&replicaSet=atlas-10dsce-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("db connected successfully");
  } catch (error) {
    console.log("error while connecting db ",error.message);
  }
};



export default Connection;