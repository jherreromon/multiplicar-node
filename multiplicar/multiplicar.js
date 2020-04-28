//required-> fs, libreria de tratamiento de ficheros
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`)

    }
}

let crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(base);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;

        }

        //en el tercer parámetro se recibe un callback
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            //dado que esto esta encapsulado en una promesa,
            //este callback, devuelve el reject o el resolve  
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);


        })

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}