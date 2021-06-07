import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../src/App';

const PORT = process.env.PORT || 8080;

const app = express();

const logger = console;

app.use(express.static(path.resolve('./build')));

app.get('/*', (req, res) => {
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf-8', (err, data) => {
    if (err) {
      logger.error('Error trying to read file: ', err.message);
      return res.status(500).send('Some error happened');
    }
    logger.log('Data: ', data);
    const context = {};
    const appContent = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    logger.log('appContent: ', appContent);

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${appContent}</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
