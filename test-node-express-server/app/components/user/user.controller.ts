import userModel from './user.schema';
import { db } from './../../db';
import { OK } from 'http-status-codes';

export default class UserController {

    public static async getAllUsers(req, res, next) {
        const users = await db.list(userModel);
        res.status(OK).send(users);
    }

    public static async postAUser(req, res, next) {
        const data = req.body || JSON.parse(req.body);
        const user = await db.create(userModel, data);
        res.status(OK).send(user);
    }
}