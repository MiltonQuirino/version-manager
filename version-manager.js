var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send(JSON.stringify(  
          {
            "pedido":"10003067",
            "itens":[
            {
            "item":"MREX505B",
            "quantidade":"1.0",
            "preco-item":"325.00000",
            "preco-item-com-desconto":"0.00000",
            "descricao":"Celular Motorola Motogo Slim Tri Chip EX505",
            "imagem":"https://prdresources1-a.akamaihd.net/wcsstore/FastShopCAS/images/catalog/MREX505_PRD_447_1.jpg"
            },
            {
            "item":"MREX505B",
            "quantidade":"1.0",
            "preco-item":"325.00000",
            "preco-item-com-desconto":"0.00000",
            "descricao":"Celular Motorola Motogo Slim Tri Chip EX505",
            "imagem":"https://prdresources1-a.akamaihd.net/wcsstore/FastShopCAS/images/catalog/MREX505_PRD_447_1.jpg"
            },
            ],
            "subtotal":"325.00000",
            "frete":"13.64000",
            "cupom-descontos":"0.00000",
            "total":"338.64000"
            }
        ));
});

app.listen(3000);