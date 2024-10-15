const { login } = require('./admin');

function cb(error, result) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
}

login("kleintjes.karel", "test", cb); 
login("kleintjes.karel", "karel", cb); 
login("dotjes.els", "els", cb);
