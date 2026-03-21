const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGO_URL);


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname : String
});

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

const transactionSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

const Account = mongoose.model("Account", accountSchema);

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account,
    Transaction
};

