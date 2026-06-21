import supertest from 'supertest';

declare global {
  var testRequest: ReturnType<typeof supertest>;
}

export {};
