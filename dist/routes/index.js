"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const indexControllers_1 = require("../controllers/indexControllers");
router.get('/users', indexControllers_1.getUsers);
router.get('/users/:id', indexControllers_1.getUserById);
router.post('/users', indexControllers_1.createUser);
router.put('/users/:id', indexControllers_1.updateUser);
router.delete('/users/:id', indexControllers_1.deleteUser);
exports.default = router;
