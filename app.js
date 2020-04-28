const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//argumentos tecleados en consola y q no tienen valor: posición 0 de la matriz "_"
console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(error => console.log(`no se un número  la base inroducida${base}`));
        break;
    default:
        console.log('comando no reconocido');



}


//console.log(argv);
//process es un objeto que se genera cuando ejecutamos node
//argv es una variable de entorno (array de String) que se ejecuta con node

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log('limite', argv.limite)


// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(error => console.log(`no se un número  la base inroducida${base}`));