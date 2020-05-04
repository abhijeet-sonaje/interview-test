import './app/loadEnv'; // Must be the first import
import { Server } from './app/';

const App = new Server();
App.startServer();