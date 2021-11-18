const request = require('supertest');
const app = require('../app');

test('GET /tea should return correct object', async () => {
    const res = await request(app)
        .get('/tea')
        .query({ teaName: 'English' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Black tea',
    });
})