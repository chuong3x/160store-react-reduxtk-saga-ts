import bcrypt from 'bcrypt'
import { UserModel } from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

//DEFINE
const saltRounds = 10;
const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;

const generatePassword = () => {
  let password;
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password;
}

const generateTokens =  (user, expiredTime)=>{
  const payload = { firstName: user.firstName, lastName: user.lastName, email: user.email }
  //create Tokens
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expiredTime,
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
  //Return token
  return {accessToken, refreshToken}
}

// HANDLE CREATE, UPDATE USER
export const createUser = async (req, res) => {
  const data = req.body;
  if(data.method === 'email'){
    const { email, password } = data.registerData;
    try {
      const emailIsExiting = await UserModel.findOne({email: email});
      if(!emailIsExiting){
        bcrypt.hash(password, saltRounds, async function(err, hash) {
          if(!err){
            const payload = {...data.registerData}
            const tokens = generateTokens(payload, '10m');
            const tokenList = [tokens.refreshToken];
            const user = new UserModel({...payload, password: hash, token: tokenList});
            await user.save()
            res.cookie("refreshToken", tokens.refreshToken, {
              httpOnly: true,
              secure:false,
              path: "/",
              sameSite: "strict",
            });
            res.status(200).json({message: 'Đăng ký thành công!', token: tokens.accessToken})
          }
        });
      }else{
        res.status(401).json({message: 'Email đã được sử dụng. Nếu bạn quên mật khẩu, vui lòng tìm lại mật khẩu'})
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
    
  }else if(data.method === 'phone'){
    const {phone} = data.registerData;
    try{
      const phoneIsExiting = await UserModel.findOne({phone: phone});
      if(!phoneIsExiting){
        const autoGeneratePass = generatePassword();
        bcrypt.hash(autoGeneratePass, saltRounds, async function(err, hash) {
          if(!err){
            const payload = {...data.registerData}
            const tokens = generateTokens(payload, '10m');
            const tokenList = [tokens.refreshToken];
            const user = new UserModel({...data.registerData, password: hash, token: tokenList});
            await user.save()
            res.cookie("refreshToken", tokens.refreshToken, {
              httpOnly: true,
              secure:false,
              path: "/",
              sameSite: "strict",
            });
            res.status(200).json({message: 'Đăng ký thành công!', token: tokens.accessToken})
          }
        });
        
      }else{
        res.status(401).json({message: 'Số điện thoại này đã được sử dụng. Nếu bạn quên mật khẩu, vui lòng tìm lại mật khẩu'})
      }
    }catch(err){
      res.status(500).json({ error: err });
    }
  }
};

export const updateUser = async (req, res) => {
  const data = req.body;
  console.log(data)
  if(data.method === 'email'){
    const { email, password } = data.registerData;
    try {
      const emailIsExiting = await UserModel.findOne({email: email});
      if(!emailIsExiting){
        bcrypt.hash(password, saltRounds, async function(err, hash) {
          if(!err){
            const user = new UserModel({...data.registerData, password: hash});
            await user.save()
            res.status(200).json({message: 'Đăng ký thành công!', user: {firstName: user.firstName, lastName: user.lastName}})
          }
        });
        
      }else{
        res.status(200).json({message: 'Email đã được dùng để đăng ký. Nếu bạn quên mật khẩu, vui lòng tìm lại mật khẩu'})
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
    
  }else if(data.method === 'phone'){
    const {phone} = data.registerData;
    try{
      const phoneIsExiting = await UserModel.findOne({phone: phone});
      if(!phoneIsExiting){
        const autoGeneratePass = generatePassword();
        bcrypt.hash(autoGeneratePass, saltRounds, async function(err, hash) {
          if(!err){
            const user = new UserModel({...data.registerData, password: hash});
            await user.save()
            res.status(200).json({message: 'Đăng ký thành công!', user: {phone: user.phone}})
          }
        });
        
      }else{
        res.status(200).json({message: 'Số điện thoại này đã được dùng để đăng ký. Nếu bạn quên mật khẩu, vui lòng tìm lại mật khẩu'})
      }
    }catch(err){
      res.status(500).json({ error: err });
    }
  }
};


//HANDLE LOGIN, LOGOUT
export const login = async (req, res) => {
  const {username, password} = req.body;
  try {
    if(username.includes('@')){
      const user = await UserModel.findOne({email: username});
      if(!user) res.status(401).json({message: 'Tài khoảng không tồn tại!'});
      bcrypt.compare(password, user.password, async function(err, result) {
        if(!err){
          if(result === true){
            const tokens = generateTokens(user, '10m');
            //Save User token
            const {token} = user;
            const newTokenList = [ ...token, tokens.refreshToken]
            await UserModel.updateOne({email: user.email},{token: newTokenList})
            //Response
            res.cookie("refreshToken", tokens.refreshToken, {
              httpOnly: true,
              secure:false,
              path: "/",
              sameSite: "strict",
            });
            res.status(200).json({message: 'Đăng nhập thành công!', token: tokens.accessToken})
          }else{
            res.status(401).json({message: "Sai mật khẩu, vui lòng thử lại! Nếu bạn quên mật khẩu, vào quên mật khẩu để thực hiện tìm lại"})
          }
        }
    });
    }else{
      const user = await UserModel.findOne({phone: user.username});
      if(!user) res.status(401).json({message: 'Tài khoảng không tồn tại!'});
      bcrypt.compare(password, user.password, async function(err, result) {
        if(!err){
          if(result === true){
            const payload = { firstName: user.firstName, lastName: user.lastName, email: user.email }
            const tokens = generateTokens(payload, '10m');
            //Save User token
            const {token} = user;
            const newTokenList = [ ...token, tokens.refreshToken]
            await UserModel.updateOne({email: user.email},{token: newTokenList})
            //Response
            res.cookie("refreshToken", tokens.refreshToken, {
              httpOnly: true,
              secure:false,
              path: "/",
              sameSite: "strict",
            });
            res.status(200).json({message: 'Đăng nhập thành công!', token: tokens.accessToken})
          }else{
            res.status(401).json({message: "Sai mật khẩu, vui lòng thử lại! Nếu bạn quên mật khẩu, vào quên mật khẩu để thực hiện tìm lại"})
          }
        }
    });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


