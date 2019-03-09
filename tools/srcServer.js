/* eslint-disable import/no-extraneous-dependencies */

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const cfg = config;
const compiler = webpack(cfg);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: cfg.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*bundle.js', (req, res, next) => {
    res.redirect(`/${path.basename(req.path)}`);
});

app.get('/robots.txt', (req, res) => {
    res.send('');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`, 'chrome');
    }
});

/* eslint-enable import/no-extraneous-dependencies */
