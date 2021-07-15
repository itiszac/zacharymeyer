import request from 'supertest';
import {app} from '../../../app';

describe('Test the ArticleController', () => {
  describe('Index Page', () => {
    it('should have status code 200', (done) => {
      request(app)
        .get('/')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
  describe('Articles Page', () => {
    it('should have status code 200', (done) => {
      request(app)
        .get('/articles')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
    it('should have status code 200', (done) => {
      request(app)
        .get('/articles/new')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
});
