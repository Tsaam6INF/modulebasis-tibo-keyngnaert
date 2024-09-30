const { users, rights, userRights } = require('./data');

function login(username, password, callback) {

  const user = users.find(user => user.username === username);

  if (!user || user.wachtwoord !== password) {
    return callback(new Error("Fout bij het aanmelden"), null);
  }

  const userRight = userRights.find(ur => ur.userid === user.id);

  const right = rights.find(recht => recht.id === userRight.rightid);

  callback(null, `${username}: ${right.omschrijving}`);
}

module.exports = {
  login
};
