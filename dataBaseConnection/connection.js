import mongoose from "mongoose";

// const connection = mongoose.connect('mongodb+srv://shyam7732:s1u2m3a4n5@quizdata.bci0u3q.mongodb.net/?retryWrites=true&w=majority')

const connection = mongoose.connect('mongodb+srv://shyam7732:s1u2m3a4n5@quizdata.bci0u3q.mongodb.net/?authMechanism=SCRAM-SHA-1')


export default connection