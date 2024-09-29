const { registerUser, checkUserExists, getUserByEmail } = require('../models/userModels')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


//register user
const registerUserController = async (req, res) => {
  const { username, email, password } = req.body
  
  try {
    //cek apakah email sudah terdaftar
    const userExists = await checkUserExists(email)
    if(userExists){
      return res.status(400).json({ error: 'Email sudah terdaftar' })
    }
    
    //simpan pengguna baru ke database
    await registerUser(username, email, password)
    
    res.status(200).json({ message: 'Berhasil Registrasi!' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error'  })
  }
}

//login user
const loginUserController = async (req, res) => {
  const { email, password } = req.body
  
  try {
    const user = await getUserByEmail(email)
    
    if(!user){
      return res.status(400).json({ error: 'Email atau Password salah'  })
    }
    
    //verifikasi Password
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) {
      return res.status(400).json({ error: 'Email atau password salah' })
    }
    
    //buat token jwt
    const token = jwt.sign({  
      id: user.id, 
      email: user.email  
    }, process.env.JWT_SECRET, { expiresIn: '1h' })
    
    res.json({ token  })
  } catch (e) {
    console.error(e)
    res.status(500).json({  error: 'Internal Server Error'  })
  }
  
}


module.exports = { registerUserController, loginUserController }