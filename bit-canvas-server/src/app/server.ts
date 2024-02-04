import mongoose from 'mongoose';
import { Server } from 'http';
import { mongoUri, port } from '../config/config';
import { app } from './app';

let server: Server;

const main = async () => {
  try {
    await mongoose.connect(mongoUri);
    server = app.listen(port, () => {
      console.log(`App is listening to the port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

// starting the server
main();

// handling uncaught exception
process.on('uncaughtException', () => {
  console.log('Uncaught exception has occurred, shutting down the server');
  process.exit(1);
});

// handling unhandled rejection
process.on('unhandledRejection', () => {
  console.log('We are facing unhandled rejection, shutting down the server');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
