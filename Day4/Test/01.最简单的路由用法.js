const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to visit')
});
app.post('/', ((req, res) => {
  res.send('Post respond')
}))
app.listen(80,()=>{
  console.log('server running at http://localhost:80')
})