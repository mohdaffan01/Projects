import User from "../model/user.model.js"
import bcrypt from "bcrypt"


export const createUser = async (req, res) => {
    try {
      const data = req.body;

      if (!data.email || !data.username || !data.password) {
        return res.json({
          seccess: false,
          message: "All fields are required"
        })
      }
      const usernameExist = await User.findOne({ username: data.username });
      if (usernameExist) {
        return res.json({
          success: false,
          message: "Username already exist!"
        })
      }
      const emailExist = await User.findOne({ email: data.email });
      if (emailExist) {
        return res.json({
          success: false,
          message: "email already exist!"
        })
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);

      const user = await User.create({
        email: data.email,
        username: data.username,
        password: hashedPassword
      })

      res.status(200).json({
        user: user,
        success: true,
        message: "User created successffuly"
      })

    } catch (error) {
      return res.status(500).json({
        success : false,
        message : "Server error!"
      })
    }
}

//---------------------------------Login---------------------------------
export const login = async (req, res) => {
  try {
    const data = req.body;

    // Check empty fields
    if (!data.username) {
      return res.json({
        success: false,
        message: "All fields are required"
      });
    }

    // Find user
    const user = await User.findOne({ username: data.username });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    //check the hashed password with data.passowrd
    const hashedPassword = await bcrypt.compare(data.password, user.password);

    // Check password
    if (!hashedPassword) {
      return res.json({
        success: false,
        message: "Invalid password"
      });
    }

    // Success
    return res.json({
      success: true,
      message: "Login successfully!"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
