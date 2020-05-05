import { OK, BAD_REQUEST } from 'http-status-codes';
import csv from 'csv-parser';
import * as fs from 'fs';

const csvFile = [];
const dateArray = [];
let maxDate, minDate;
fs.createReadStream(__dirname + '/data.csv')
    .pipe(csv())
    .on('data', (data) => {
        csvFile.push(data);
        const dateArr = data.date.split("-");
        const dateTime: any = new Date(2020, dateArr[1] - 1, dateArr[0]);
        dateArray.push(dateTime / 1000);
    })
    .on('end', () => {
        maxDate = Math.max.apply(null, dateArray);
        minDate = Math.min.apply(null, dateArray);
    });



export default class DataController {

    public static async getAllData(req, res, next) {
        res.status(OK).send(csvFile);
        // res.status(OK).send({ maxDate, minDate });
    }

    public static async postAData(req, res, next) {
        const today = Date.now() / 1000;
        const data = req.body || JSON.parse(req.body);
        if (data && !data.ndays) {
            data.ndays = 7;
        }
        let d = new Date();
        let ndaysBeforeDate: any = d.setDate(d.getDate() - data.ndays);
        ndaysBeforeDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const ndaysBeforeDateInEpoch = ndaysBeforeDate / 1000;

        if (ndaysBeforeDateInEpoch < maxDate) {
            const result = csvFile.filter((item) => {
                const dateArr = item.date.split("-");
                const dateTime: any = new Date(2020, dateArr[1] - 1, dateArr[0]);
                if (ndaysBeforeDateInEpoch < (dateTime / 1000)) {
                    return true;
                } else {
                    return false;
                }
            });
            res.status(OK).send(result);
        } else {
            res.status(BAD_REQUEST).send("Max Date is : " + formatDate(new Date(maxDate * 1000)) + ", No data in Last " + data.ndays + " Days.")
        }
    }
}

function formatDate(date) {            // function for reusability
    var d = date.getUTCDate().toString(),           // getUTCDate() returns 1 - 31
        m = (date.getUTCMonth() + 1).toString(),    // getUTCMonth() returns 0 - 11
        y = date.getUTCFullYear().toString(),       // getUTCFullYear() returns a 4-digit year
        formatted = '';
    if (d.length === 1) {                           // pad to two digits if needed
        d = '0' + d;
    }
    if (m.length === 1) {                           // pad to two digits if needed
        m = '0' + m;
    }
    formatted = d + '-' + m + '-' + y;              // concatenate for output
    return formatted;
}