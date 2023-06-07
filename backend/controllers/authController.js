import UserModel from "../models/userModels.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    try {
        console.log(req.body)
        const {fullname, email, password } = req.body;
        const oldUser = await UserModel.findOne({ email })
        if (oldUser) return res.status(500).send("user is already registerd")
        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(password, salt)
        const newUser = new UserModel({ fullname, email, password: hashedpass, })
        const user = await newUser.save();
        return res.status(200).json({ email })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        console.log(user)
        if (user) {
            const validity = await bcrypt.compare(password, user.password)
            if (!validity) return res.status(400).json("Wrong password")
            return res.status(200).json({user})
        } else {
            res.status(404).json("User does no exists")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}