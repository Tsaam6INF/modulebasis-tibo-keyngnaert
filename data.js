const users = [
  {
    id: 1,
    username: "kleintjes.karel",
    wachtwoord: "karel",
  },
  {
    id: 2,
    username: "dotjes.els",
    wachtwoord: "els",
  },
];

const rights = [
  {
    id: 1,
    omschrijving: "lezen",
  },
  {
    id: 2,
    omschrijving: "lezen-schrijven",
  },
];

const userRights = [
  {
    userid: 1,
    rightid: 2,
  },
  {
    userid: 2,
    rightid: 1,
  },
];

module.exports = {
  users,
  rights,
  userRights,
};
