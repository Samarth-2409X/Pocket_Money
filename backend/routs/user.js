const express = require("express");
const router = express.Router();
const zod = require("zod");
const JWT = require("jsonwebtoken");
const {User, Account} = require("../db");
const {authmiddelware} = require("../middleware");
const dotenv = require("dotenv");
dotenv.config();

const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname:zod.string(),
    lastname: zod.string()
})

const signinBody = zod.object({
    username: zod.string().email(),
    password:zod.string()
})


router.post("/signup", async (req, res) => {
    const parsed = signupBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(411).json({
      msg: "Invalid input format"
    });
  }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){

        return res.status(411).json({
            msg:"user already exists"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

     console.log("JWT_SECREATE= ", process.env.JWT_SECREATE,);
    const token = JWT.sign(
        { userId: user._id },
        process.env.JWT_SECREATE,
        { expiresIn: "1h" }
    );


    res.json({
        msg:"user created successfully",
        token:token
    })

})

router.post("/signin", async (req, res) => {
    const parseResult = signinBody.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ msg: "Incorrect inputs" });
    }

    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(401).json({ msg: "Invalid credentials" });
    }

    console.log("JWT_SECREATE= ", process.env.JWT_SECREATE);
    const token = JWT.sign(
      { userId: user._id },         
      process.env.JWT_SECREATE,  
      { expiresIn: "1h" }         
    );

    res.json({ 
        token, 
        userId: user._id
     });
});

router.get("/me", authmiddelware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("firstname lastname username");
        if (!user) return res.status(404).json({ msg: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: "Failed to fetch user", error: error.message });
    }
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
});

router.put("/changepassword", authmiddelware, async (req, res) => {
    const parsed = updateBody.safeParse(req.body);
    if (!parsed.success) {
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    try {
        await User.updateOne(
            { _id: req.userId },
            { $set: parsed.data } 
        );

        res.json({
            message: "Updated successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


router.get("/bulk", async(req,res) =>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            { firstname: { $regex: filter, $options: "i" } },
            { lastname: { $regex: filter, $options: "i" } }
        ],
         _id: { $ne: req.userId }
    })

    res.json({
        user:users.map(user => ({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })
})

module.exports = router;