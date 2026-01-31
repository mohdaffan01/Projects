import User from "../model/user.model.js"
import bcrypt from "bcrypt"


export const createUser = async (req, res) => {
    try {
        const data = req.body;
        if (!data.name || !data.email || !data.username || !data.password || !data.confirmPassword || stock == 0) {
            return res.status(400).json({
                seccess: false,
                message: "All fields are required"
            })
        }
        const usernameExist = await User.findOne({ username: data.username });
        if (usernameExist) {
            return res.status(409).json({
                success: false,
                message: "Username already exist!"
            })
        }
        const emailExist = await User.findOne({ email: data.email });
        if (emailExist) {
            return res.status(409).json({
                success: false,
                message: "Email already exists!"
            });
        }


        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await User.create({
            name: data.name,
            email: data.email,
            username: data.username,
            password: hashedPassword,
            confirmPassword: data.confirmPassword
        })

        res.status(201).json({
            user: user,
            success: true,
            message: "User created successffuly"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error!"
        })
    }
}

//------------------get user--------------------------
export const getUser = async(req , res) => {
    try{
        const users = await User.find().select("name email username");
        return res.status(200).json({
            success : true,
            data : users
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Something went wrong" 
        })
    }
}

//---------------------------------Login---------------------------------
export const login = async (req, res) => {
    try {
        const data = req.body;

        //  Check empty fields
        if (!data.username || !data.password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        

        // Find user
        const user = await User.findOne({ username: data.username });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(
            data.password,
            user.password
        );

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        //  Success
        return res.status(200).json({
            success: true,
            message: "Login successfully!",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
