import dbConfig from '../config/db.config.js';
import mongoose from 'mongoose';
import Task from './task.model.js'

mongoose.Promise = global.Promise;

const db={}
db.mongoose = mongoose;
db.url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`
db.tasks = Task(mongoose);

export default db;