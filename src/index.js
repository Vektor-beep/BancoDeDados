const express = require ('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/users', (request, response)=> {
 const body = request.body;

 console.log(body);

 return response.json({
 Evenvento: 'Semana Omnistack 11.0',
 Aluno: 'Victor Degaspari'
  });
});



app.listen(3333);
