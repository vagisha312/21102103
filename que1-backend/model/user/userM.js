import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accesscode: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
export default User;