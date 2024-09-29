const db  = require("../utils/dbConnection")
const bcrypt = require('bcryptjs')


//fungsi untuk membuat pengguna baru
const registerUser = async (username, email, password) => {
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10)
  
  //query untuk insert data pengguna
  const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`
  const [result] = await db.query(query, [username, email, hashedPassword])
  
  return result
}

//fungsi untuk mengecek apakah pengguna sudah ada 
const checkUserExists = async (email) => {
  const query = `SELECT * FROM users WHERE email = ?`
  const [rows] = await db.query(query, [email])
  
  return rows.length > 0 // return true jika user sudah ada
}

//mengambil email user saat login
const getUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = ?`
  const [rows] = await db.query(query, [email])
  
  return rows[0] //return user object jika ada
}



module.exports = {registerUser, checkUserExists, getUserByEmail}