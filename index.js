const express = require('express');

const app = express()

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  maxAge: '1d',
  redirect: false,
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use('/', express.static('public', options))

app.listen(3123, () => {
  console.log("Listening on port 3123")
});
