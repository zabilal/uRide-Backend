import { Router } from "express";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../../validations/user.validation.js";
import userController from "./user.controller.js";

const router = Router();

/**
 * User Object
 * @typedef {object} User
 * @property {string} firstName.required - The title required in the response
 * @property {string} lastName.required - The artist
 * @property {string} email.required - The artist
 * @property {string} role.required - The artist
 */

/**
 * User Request Object
 * @typedef {object} User
 * @property {string} firstName.required - The title required in the response
 * @property {string} lastName.required - The artist
 * @property {string} email.required - The artist
 * @property {string} password.required - The artist
 * @property {string} role.required - The artist
 */


/**
 * POST /api/v1/users
 * @summary This Creates a user 
 * @tags Users
 * @param {User Request Object} request.body.required - song info
 * @return {User} 200 - User response
 */
router.post(auth(""), validate(createUser), userController.createUser);

/**
 * GET /api/v1/users
 * @summary This retrieves all users 
 * @tags Users
 * @return {array<User>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("", validate(getUsers), userController.getUsers);



/**
 * GET /api/v1/users/:userId
 * @summary This fetches a single user using their id
 * @tags Users
 * @return {User} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get(auth("/:userId"), validate(getUser), userController.getUser);

/**
 * PATCH /api/v1/users/:userId
 * @summary This updates a user using the user id 
 * @tags Users
 * @param {User Request Object} request.body.required - song info
 * @return {User} 200 - User response
 */
router.patch(auth("/:userId"), validate(updateUser), userController.updateUser);

/**
 * DELETE /api/v1/users/:userId
 * @summary This deletes a single user using their id
 * @tags Users
 * @return {User} 204 - success response
 * @return {object} 400 - Bad request response
 */
router.delete(
  auth("/:userId"),
  validate(deleteUser),
  userController.deleteUser
);

export default router;
