const express = require('express');
const cluster = require('cluster');
const fs = require('fs');
const compression = require('compression');
const os = require("os");

const port = 8794;

function loadServer() {
    const app = express();
    let filesPath;

    filesPath = require('path').join(__dirname, '/dist/ng-smn-ui-doc');

    app.use(compression());
    app.use(express.static(filesPath));

    app.set('views', filesPath);

    app.get('/*', (req, res) => {
        fs.readFile(`${filesPath}/index.html`, 'utf8', (err, text) => {
            res.send(text);
        });
    });

    app.listen(port, () => {
        console.log(`[${new Date()}]: Web server listening on port ${port}`);
    });
}

if (cluster.isMaster) {
    let cpuCount = process.env.CPU_COUNT || os.cpus().length;

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`[${new Date()}]: Worker ${worker.id} died`);
        cluster.fork();
    });
} else {
    loadServer();
}
