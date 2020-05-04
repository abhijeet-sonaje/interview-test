import randomModel from './random.schema';
import { db } from '../../db';
import { OK } from 'http-status-codes';
import csv from 'csv-parser';
import * as fs from 'fs';

export default class RandomController {

    public static async getAllData(req, res, next) {
        const results = [];
        fs.createReadStream(__dirname + 'data.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                res.status(OK).send(results);
            });

    }
}