import jwt from 'jsonwebtoken';

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

const verifyAccessToken = ( req, res, next) => {
    const token = req.headers.token;
    if(!token) res.status(401).json("You are not authenticated");
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) res.status(403).json("Token is not valid!");
        req.user = user;
        next();
    })
}

const verifyRefreshToken = ( req, res, next) => {
    console.log(req)
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) res.status(401).json("You are not authenticated");
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err){
            res.clearCookie('refreshToken');
            res.status(403).json("Token is not valid!");
        };
        req.user = user;
        next();
    })
}

export { generatePassword, generateTokens, verifyAccessToken, verifyRefreshToken }


// const verifyTokenAndUserAuthorization = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.id === req.params.id|| req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You're not allowed to do that!");
//     }
//   });
// };

// const verifyTokenAndAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You're not allowed to do that!");
//     }
//   });
// };