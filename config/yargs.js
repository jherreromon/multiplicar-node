const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    //sustituimos todo este código x la const opts
    //{
    /* base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }) */
    .command('crear', 'genera un archivo con la tabla de multiplicar', opts)
    /*    {
           base: {
               demand: true,
               alias: 'b'
           },
           limite: {
               alias: 'l',
               default: 10
           }
       }) */

.help()
    .argv;

module.exports = {
    argv
}