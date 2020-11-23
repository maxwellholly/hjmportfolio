const { Users } = require('../models/users');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

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

exports.contact = async (req, res) => {
  const { data } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "374bbeb2bebcdd",
      pass: "fa5940383fde17",
    },
  });
  try{
      await transporter.sendMail(data).then(res.json({successMessage: 'Message sent!'}));

  } catch (e) {
    res.status(400).json({ errorMessage: 'Something went wrong' });
  }
};
