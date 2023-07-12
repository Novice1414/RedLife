const userModel = require("../models/userModel");
module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);
    //admin checking
    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth failed",
      });
    } else {
      next(); //further execution of the middleware
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Auth failed, ADMIN API Error",
      error,
    });
  }
};
