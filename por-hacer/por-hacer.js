const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error ('No se pudo grabar', err);
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (err) {
        listadoPorHacer = [];
    };

};

const crear = (descripcion) => {
    
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDb();

    return porHacer;
};

const getListado = (completado) => {
    cargarDB();

    if(completado === true){
        return listadoPorHacer;
    } else {
        let nuevoListado = listadoPorHacer.filter(tarea => {
            return tarea.completado === completado;
        });
        
        return nuevoListado;
    }   
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if(listadoPorHacer.length != nuevoListado.length){
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true
    } else {
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};




