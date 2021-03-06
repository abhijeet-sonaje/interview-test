import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import Ddos from 'ddos';
import { BAD_REQUEST } from 'http-status-codes';
import http from 'http';

import BaseRouter from './components/';

export class Server {
    app;

    constructor() {
        this.app = express();
        this.initializeApp();
    }

    initializeApp() {
        this.initConfig();
        this.commonMiddlewares();
        this.initRoutes();
    }

    initConfig() {
        const port = Number(process.env.PORT || 3000);;
        this.app.set('port', port);
    }

    commonMiddlewares() {
        // Show routes called in console during development
        if (process.env.NODE_ENV === 'development') {
            this.app.use(morgan('dev'));
        }

        // Security
        if (process.env.NODE_ENV === 'production') {
            this.app.use(helmet());
            const ddosParams: any = {
                burst: 20,
                limit: 200,
                maxexpiry: 10,
                silentStart: true
            };
            const ddos = new Ddos(ddosParams);

            this.app.use(ddos.express);
        }

        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        // Print API errors
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err.message, err);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        });

    }

    initRoutes() {
        // Add APIs
        this.app.use('/api', BaseRouter);
    }

    getExpressInstance() {
        return this.app;
    }

    startServer() {
        const port = this.app.get('port');
        const server = http.createServer(this.app);
        server.listen(port, () => {
            console.log(`Server is running on port : ${port}`); // eslint-disable-line no-console
        });
        this.isServerUp();
        this.setDefaultRoute();
    }

    isServerUp() {
        this.app.get('/health', (req, res) => {
            res.send('Server is up');
        });
    }

    setDefaultRoute() {
        this.app.use('*', function (req, res) {
            res.redirect(`/${process.env.DEFAULT_ROUTE}`);
        });
    }
}