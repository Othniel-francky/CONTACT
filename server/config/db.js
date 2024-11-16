import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config({path: "./config/.env"})

const Connection = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("MongoDB connecter")
    } catch (err) {
        console.log("Error: " + err.message)
    }
}

Connection()