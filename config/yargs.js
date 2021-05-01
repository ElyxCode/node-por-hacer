
const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Describe la tarea por hacer'
};

const completado = {
        default: true,
        alias: 'c',
        desc: 'Descripcion de la tarea por hacer'
};

// const listaCompletado = {
//     default: null,
//     alias: 'c',
//     desc: 'Lista las tareas por hacer'
// }

const argv = require('yargs')
        .command('crear', 'Crear un elemento por hacer', { descripcion })
        .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado})
        .command('borrar', 'Borra una tarea por hacer', { descripcion })
        .command('listar', 'Lista las tareas por hacer', { completado })
        .help()
        .argv;

module.exports = {
    argv
};

// const argv = require('yargs')
//                 .command('crear', 'Crear un elemento por hacer', {
//                     descripcion: {
//                         demand: true,
//                         alias: 'd',
//                         desc: 'Descripcion de la tarea por hacer'
//                     }
//                 })
//                 .command('actualizar', 'Actualiza el estado completado de una tarea', {
//                     descripcion: {
//                         demand: true,
//                         alias: 'd',
//                         desc: 'Descripcion de la tarea por hacer'
//                     },
//                     completado: {
//                         default: true,
//                         alias: 'c',
//                         desc: 'Marca como completado o pendiente la tarea' 
//                     }
//                 })
//                 .help()
//                 .argv;

// module.exports = {
//     argv
// };

