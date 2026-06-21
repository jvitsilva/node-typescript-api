import { SetupServer } from '@src/server';
import { createServer } from 'node:http';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(createServer(server.getApp()));
});
