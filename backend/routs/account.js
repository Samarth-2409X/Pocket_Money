const express = require('express');
const { authmiddelware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const {Transaction} = require("../db");

const router = express.Router();

router.get("/balance", authmiddelware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authmiddelware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.userId }).session(session);

        if(amount <= 0){
            await session.abortTransaction();
            return res.status(403).json({ msg: "Enter the correct amount" });
        }

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        await Account.updateOne(
            { userId: req.userId }, 
            { $inc: { balance: -amount } }, 
            { session }
        );

        await Account.updateOne(
            { userId: to }, 
            { $inc: { balance: amount } }, 
            { session }
        );

        await Transaction.create([{
            from: req.userId,
            to,
            amount
        }], { session });

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });

    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Transaction failed", error: error.message });
    } finally {
        session.endSession();
    }
});


router.get("/transactions", authmiddelware, async (req, res) => {
    try {
        const transactions = await Transaction.find({
            $or: [{ from: req.userId }, { to: req.userId }]
        })
        .populate("from", "firstname lastname")
        .populate("to", "firstname lastname")
        .sort({ createdAt: -1 }); 

        res.json(transactions);
    } catch (err) {
        res.status(500).json({ msg: "Failed to fetch transactions", error: err.message });
    }
});


module.exports = router;
