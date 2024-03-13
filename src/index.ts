import express, { Request, Response } from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const testUser = {
    id: 1,
    username: 'test',
    password: 'test',
};

app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (username === testUser.username || password === testUser.password) {
        return res.send('ok');
    }
    
    if (username !== testUser.username || password !== testUser.password) {
        return res.send('fail');
    }

    return res.status(400).send('Invalid username or password');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
