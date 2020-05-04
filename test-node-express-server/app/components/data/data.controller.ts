import { OK } from 'http-status-codes';
import csv from 'csv-parser';
import * as fs from 'fs';

const csvFile = [];
fs.createReadStream(__dirname + 'data.csv')
    .pipe(csv())
    .on('data', (data) => csvFile.push(data));

export default class DataController {

    public static async getAllData(req, res, next) {
        res.status(OK).send(csvFile);
    }
}