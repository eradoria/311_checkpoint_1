const express = require("express");
const router = express.Router();

const usersContoller = require("../controllers/users");

router.get("/users", usersContoller.list);

router.get("/users/:id", usersContoller.show);

router.post("/users", usersContoller.create);

router.put("/users/:id", usersContoller.update);

router.delete("/users/:id", usersContoller.remove);

module.exports = router;
