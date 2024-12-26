import express from 'express';
import url from 'url';
import path from 'path';

const app = express();
const port = process.env.port || 3333;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, '../..', 'public');

app.use(express.static(publicDir));

app.listen(port, console.log(`Server listening on port ${port}`));
