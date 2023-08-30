const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "",
        subject: "Usuario de Vendedor Creado Exitosamente",
        html: `<h2>Tu usuario como vendedor en el Back Office de Politur esta listo para comenzar a vender!</h2> <h2>No olvides tus credenciales!</h2> <h3><b>${user.email} || ${user.password}</b></h3>`,
      });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res
        .status(400)
        .json({ error: "Missing data", message: "Not email provided" });
    }
    if (!password) {
      res
        .status(400)
        .json({ error: "Missing data", message: "Not password provided" });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = await AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else if (result.correctEmail == false) {
      res.status(400).json({ message: "incorrect email" });
    } else {
      res.status(400).json({ message: "incorrect password" });
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    const result = await AuthServices.updateSeller(id, newData);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteSeller = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await AuthServices.delete(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  update,
  deleteSeller,
};
