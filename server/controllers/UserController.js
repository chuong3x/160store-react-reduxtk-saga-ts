import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { UserModel } from '../models/UserModel.js';

import { generatePassword, generateTokens } from '../utils/auth.js';
dotenv.config();
//DEFINE
const saltRounds = Number(process.env.SALT);

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
            const user = new UserModel({...payload, password: hash, refreshTokens: tokenList});
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
      const isUserExit = await UserModel.findOne({phone: phone});
      if(!isUserExit){
        const autoGeneratePass = generatePassword();
        bcrypt.hash(autoGeneratePass, saltRounds, async function(err, hash) {
          if(!err){
            const payload = {firstName: phone, lastName: 'User', email: '', phone }
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
            const tokens = generateTokens(user, '20s');
            //Save User token
            const {refreshTokens} = user;
            const newTokenList = [ ...refreshTokens, tokens.refreshToken]
            await UserModel.updateOne({email: user.email},{refreshTokens: newTokenList})
            //Response
            res.cookie("refreshToken", tokens.refreshToken, {
              httpOnly: true,
              secure:false,
              path: "/",
              sameSite: "strict",
              expires: new Date( Date.now() + (365 * 24 * 60 * 60 * 1000)),
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
            const tokens = generateTokens(payload, '1m');
            //Save User token
            const { refreshTokens } = user;
            const newTokenList = [ ...refreshTokens, tokens.refreshToken]
            await UserModel.updateOne({email: user.email},{refreshTokens: newTokenList})
            //Response
            res.cookie("refreshToken", tokens.refreshToken, {
              httpOnly: true,
              secure:false,
              path: "/",
              sameSite: "strict",
              expires: new Date( Date.now() + (365 * 24 * 60 * 60 * 1000))
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

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userData = req.body;
  try {
    const user = await UserModel.findOne({email: userData.email});
    if(user){
      const { refreshTokens } = user;
      const newTokenList = refreshTokens.filter((token) => token !== refreshToken)
      await UserModel.updateOne({email: user.email},{refreshTokens: newTokenList})
      res.clearCookie('refreshToken');
      res.status(200).json({message: "Đăng xuất thành công"})
    }else{
      res.status(404).json({message: 'Không tìm thấy người dùng'})
    }
  } catch (error) {
    res.status(500).json({error: error})
  }

}

//HANDLE REFRESH TOKEN
export const refreshToken = async (req, res) => {
  const payload = req.user;
  const tokens = generateTokens(payload, '20s')
  try {
    const user = await UserModel.findOne({email: payload.email});
    const { refreshTokens } = user;
    const removedOldToken = refreshTokens.filter((token) => token !== refreshToken)
    const newTokenList = [...removedOldToken, tokens.refreshToken]
    console.log(newTokenList);

    await UserModel.updateOne({email: user.email}, {refreshTokens: newTokenList})

    //Response
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure:false,
      path: "/",
      sameSite: "strict",
      expires: new Date( Date.now() + (365 * 24 * 60 * 60 * 1000)),
    });
    res.status(200).json({message: 'Làm mới token thành công!', token: tokens.accessToken})
    
  } catch (error) {
    res.status(500).json({message: "Internal sever error", error})
  }
  
};