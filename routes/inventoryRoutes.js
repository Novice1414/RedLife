const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarControllers,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getRecentInventoryController,
  getInventoryHospitalController,
} = require("../controller/inventoryController");

const router = express.Router();

//routes
//ADD Inventory ||POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//GET donar records
router.get("/get-donars", authMiddleware, getDonarControllers);

//GET hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET organisation records
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

//GET organisation records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);

module.exports = router;
