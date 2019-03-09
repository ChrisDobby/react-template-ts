/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('index.html', 'utf8', (err, markup) => {
    if (err) {
        console.log(err);
        return;
    }

    const $ = cheerio.load(markup);
    $('head').prepend('<link rel="preload" href="styles.css" as="style">');
    $('head').prepend('<link rel="preload" href="/bundle.js" as="script">');
    $('head').prepend('<link rel="manifest" href="manifest.json">');
    $('head').prepend('<link rel="stylesheet" href="styles.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', (writeErr) => {
        if (writeErr) {
            console.log(writeErr);
            return;
        }

        console.log('index.html written to /dist');
    });

    fs.copyFile('manifest.json', 'dist/manifest.json', (copyErr) => {
        if (copyErr) {
            console.log(copyErr);
            return;
        }

        console.log('manifest.json written to /dist');
    });

    fs.copyFile('favicon.ico', 'dist/favicon.ico', (copyErr) => {
        if (copyErr) {
            console.log(copyErr);
            return;
        }

        console.log('favicon.ico written to /dist');
    });
});
