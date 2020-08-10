const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completed = {
    default: true,
    completed: 'c',
    alias: 'Marca como completado o pendiente la terea'
}

const argv = require('yargs')
    .command('create', 'Comando para crear tareas', {
        description
    })
    .command('update', 'Comando para actualizar los datos', {
        description,
        completed

    })
    .command('delete', 'Elimino elemento del array', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}

