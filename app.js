const colors = require('colors');

const {argv} = require('./Config/yargs');
const {create, getList,update,deleteItem} = require('./Core/to_do');


let comando = argv._[0];

switch (comando) {
    case 'create':
        let task = create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list_to_do = getList();

        for (let task of list_to_do) {
            console.log('======================'.green);
            console.log('Listado:', task.description);
            console.log('Estado:', task.completed);
            console.log('======================'.green);

        }

        break;
    case 'update':
        let result=update(argv.description,argv.completed);
        break;
    case 'delete':
            let delete_file = deleteItem(argv.description);
            console.log(delete_file);
        break
    default:
        console.log('Command not found');
}



