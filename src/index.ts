import fs from 'fs';
import path from 'path';

const filesDir = path.join(__dirname, '../files');

load();

function load(): void {
    const files = fs.readdirSync(filesDir);

    console.log(files);
}
