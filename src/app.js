const express = require('express');

const app = express();

const port = 3100;

//Ruta de las vistas Configuracion
app.set('views','src/views');

//Motor de Plantillas Configuracion PUG
app.set('view engine','pug');

// Middleware para la ruta de los archivos estaticos
app.use(express.static('src/public'));

//

app.get('/', (req, res)=>{
    res.render('index',
    {title: "Practicando PUGJS", 
    header1:'Hola Mundo soy PUG', 
    cities:['Medellin','Bello','Puerto Berrio'],
    employees:[
        {imgae:'P2.png', ident:'71',name:'Jane Doe',salary:4500000},
        {imgae:'P5.png',ident:'55',name:'Pepe Gil',salary:1500000},
        {imgae:'P9.png',ident:'89',name:'Peter Parker',salary:7500000},
        {imgae:'P8.png',ident:'94',name:'Soon ye ji',salary:11500000}
    ]
});
})

app.listen(port, () =>{
    console.log('Server in localhost:${port}')
})