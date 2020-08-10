const fs = require('fs');
let list=[];


const saveDB= () =>{
    let data =JSON.stringify(list);

    fs.writeFile(`db/data.json`,data, (err) => {
        if (err) throw new Error('No se pudo gravar la data', err);
    });
}

loadDB = () =>{
    try{

        list=require('../db/data.json');

    }catch (err){

        list=[];
    }

}

const create = (description) =>{

    loadDB();

    let obj_to_do={
        description,
        completed:false
    }

    list.push(obj_to_do);
    saveDB();
    return list;

}

getList = () => {

    let list=require('../db/data.json');
    return list

}

const update= (description,completed=true) =>{
    loadDB();

    let index=list.findIndex(key => key.description === description);

    if(index >= 0 ){
        list[index].completed= completed;
        saveDB();
        return true;
    }else{
        return false;
    }
}

const deleteItem=(description) =>{

    loadDB();

    let new_list = list.filter(task =>{
        return task.description !== description;
    });

    if(list.length === new_list.length){
      return false;
    }else{
        list = new_list;
        saveDB();
        return true;
    }

}


module.exports={
    create,
    getList,
    update,
    deleteItem
}
