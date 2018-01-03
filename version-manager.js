var express = require('express');
var fs = require('fs');
var app = express();

app.use(function (req, res, next) {
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.get('/', function (req, res) {

  res.send(JSON.stringify(
    {
      "pedido": "10003067",
      "itens": [
        {
          "item": "MREX505B",
          "quantidade": "1.0",
          "preco-item": "325.00000",
          "preco-item-com-desconto": "0.00000",
          "descricao": "Celular Motorola Motogo Slim Tri Chip EX505",
          "imagem": "https://prdresources1-a.akamaihd.net/wcsstore/FastShopCAS/images/catalog/MREX505_PRD_447_1.jpg"
        },
        {
          "item": "MREX505B",
          "quantidade": "1.0",
          "preco-item": "325.00000",
          "preco-item-com-desconto": "0.00000",
          "descricao": "Celular Motorola Motogo Slim Tri Chip EX505",
          "imagem": "https://prdresources1-a.akamaihd.net/wcsstore/FastShopCAS/images/catalog/MREX505_PRD_447_1.jpg"
        },
      ],
      "subtotal": "325.00000",
      "frete": "13.64000",
      "cupom-descontos": "0.00000",
      "total": "338.64000"
    }
  ));
});

app.get('/layout-a', function (req, res) {

  fs.readFile(__dirname + '/public/css/style-a.css', function (err, data) {
    if (err) return send404(res);
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(data, 'utf-8');
    res.end();
  });

});

app.get('/cache-version', function (req, res) {
  res.send(JSON.stringify(
    {
      "menu-departamento": "1.2",
      "banner-principal": "1.0",
      "banner-grid": "1.0"
    }
  ));
});

app.listen(8989);