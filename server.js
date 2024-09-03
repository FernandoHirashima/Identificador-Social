const http = require('http');

// Criando o servidor
const server = http.createServer((req, res) => {
  // Definindo cabeçalhos de resposta
  res.writeHead(200, { 'Content-Type': 'text/json' });

  // Enviando uma resposta HTML
  res.end( JSON.stringify (dadosPessoais)
    
  );
});

const dadosPessoais = {
    "nome": "Fernando Hitoshi Hirashima",
    "idade": 22,
    "descrição": "Sou uma pessoa extrovertida, gosto de esportes e comer.",
    "gênero": "Masculino",
    "país": "Japão"
  }
  
  // Fazendo o servidor ouvir na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000/>');
  });