import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    isConnected = conn.connections[0].readyState === 1;

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    throw error; // ensures API route catches it
  }
}

export default connect()