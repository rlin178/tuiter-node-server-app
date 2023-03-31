// const express = require('express') // imports express
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);