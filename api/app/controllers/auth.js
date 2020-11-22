const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.authUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const authedUser = await Users.findOne({
      where: { username: username },
    });
    if (authedUser) {
      bcrypt.compare(password, authedUser.password, async function (
        err,
        result
      ) {
        if (result === true) {
          const token = jwt.sign(
            {
              id: authedUser.id,
              name: authedUser.name,
              type: authedUser.type,
            },
            process.env.SECRET,
          );
          res.status(200).json({ token, authenticated: true });
        } else {
          let errorMessage = "Incorrect login credentials";
          res.json({ errorMessage });
        }
      });
    } else {
      let errorMessage = "Incorrect login credentials";
      res.json({ errorMessage });
    }
  } catch (e) {
    res.status(401).json({ e });
  }
};
