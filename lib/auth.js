const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('./dbConnect.js');

function generateToken(req, res, next) {
  jwt.sign({ username: req.body.username, mId: req.body.id }, process.env.TOKEN_SECRET, {algorithm: 'HS256', expiresIn: '1y', issuer: 'Doggie Date' }, (err, token) => {
    res.token = token;
    next();
  })
}
function validateToken(req, res, next) {

  jwt.verify(req.get('Authorization'), process.env.TOKEN_SECRET, (err, decoded) => {
    let badToken ={};
    if(decoded) {
      res.token = decoded;
      next();
    } else {
      res.badToken = {
        authError: {
          message: 'Error validating token'
        }
      }
      res.send(res.badToken)
    }
  })
}
function generatePassHash(req, res, next) {
  const saltRounds = 10;

  bcrypt.hash(req.body.password, saltRounds)
    .then((hash) => {
      res.passwordHash = hash;
      next();
    }).catch((err) => {
      err.errLog = `Error: auth -> generatePassHash`;
      next(err);
    })
}

function validatePassword(req, res, next) {
  if(res.checkUser && res.checkUser.username) {
    db.one({
      name: 'validate password',
      text: 'SELECT password FROM members WHERE member.username = $1',
      values: [req.body.username]
    }).then((password) => {
      bcrypt.compare(myPlaintextPassword, hash, function(err, validation) {
        if(validation === true) {
          next();
        } else {
          // send message to front end
        }
      })
    }).catch((err) => {
      err.errLog = `Error: auth -> validatePassword db connection`;
      next(err);
    })
  }
}

module.exports = {
  generateToken,
  validateToken,
  generatePassHash
}
