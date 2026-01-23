import User from "../model/user.model.js"


export const createUser = ( (req,res) => {
    // add try catch, Authorization

    const data = req.body 

    if(!data.email || !data.username  || !data.password ){
        return res.json ({
            seccess : false,
            message : "All fields are required"
        })
    }

    const user = User.create({
        email : data.email,
        username : data.username,
        password : data.password
    })

    res.json({
        success : true,
        message : "User created successffuly"
    })
    
})

//Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check empty fields
    if (!username || !password) {
      return res.json({
        success: false,
        message: "All fields are required"
      });
    }

    // Find user
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    // Check password
    if (user.password !== password) {
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
