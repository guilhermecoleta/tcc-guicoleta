const restify = require('restify')
const port = process.env.PORT || 3000
const server = restify.createServer()

server.get('/', (req, res) => {
  res.send('Ae! Servidor criado veio com resposta para o path /.')
})

server.get('/abc', (req, res) => {
  res.send('1111')
})

server.listen(port,() => {
  console.log(`Server running at port `+port);
});