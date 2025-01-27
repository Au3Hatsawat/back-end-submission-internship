import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './configs/config';
import { error } from 'console';
import router from './router';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();
app.use(cors({
    credentials: true
}));

const Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My Express API',
        version: '1.0.0',
        description: 'This is a simple CRUD API application',
      },
      servers: [
        {
          url: 'http://localhost:8080',
          description: 'Development server',
        },
      ],
    },
    apis: ['./src/router/*.ts'], // ระบุเส้นทางของไฟล์ที่มีการกำหนด API
  };
  
  
  const swaggerSpec = swaggerJSDoc(Options);
  console.log(JSON.stringify(swaggerSpec, null, 2));


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

const server = http.createServer(app);
const PORT = config.PORT;

server.listen(PORT , () => {
    console.log("Server running on http://localhost:8080/");
});

const MONGO_URL = config.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error' , (error: Error) => console.log(error));

app.use('/',router());