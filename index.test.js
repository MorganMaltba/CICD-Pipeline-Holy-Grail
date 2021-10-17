const supertest = require('supertest');
const {app, client} = require('./index.js');
const request = supertest(app);

const section = 'header';
const value = 1;

it('Updates value', async () => {
    await request.get(`/update/${section}/${value}`);
    const data = await request.get('/data');
    expect(data.body.header).toBe(1);
});

it('Gets Data', async () => {
    const data = await request.get('/data');
    expect(data).toBe(null);
});

var server = app.listen(3000, () => {
    console.log(`Running Test on Port 3000...`);
});

afterAll(done => {
    server.close();
    client.quit();
    done();
});