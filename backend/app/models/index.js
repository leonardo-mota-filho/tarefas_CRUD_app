import dbConfig from '../config/db.config.js';
import mongoose from 'mongoose';
import Task from './task.model.js';
import User from './user.model.js';

mongoose.Promise = global.Promise;

const db={}
db.mongoose = mongoose;
//db.url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`
db.url = "mongodb://localhost:27017/taskmanagement"
db.tasks = Task(mongoose);
db.users = User(mongoose);

export default db;