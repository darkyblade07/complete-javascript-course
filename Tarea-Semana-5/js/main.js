"use strict";

import { Persona } from './persona.js';

window.addEventListener('load', init, false);

function init() {
    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var notaIn = document.getElementById('notaIn');
    var emailIn = document.getElementById('emailIn');
    var registrarBtn = document.getElementById('registrarBtn');
    var estudiantesSlt = document.getElementById('estudiantesSlt');
    var buscarBtn = document.getElementById('buscarBtn');
    var eliminarBtn = document.getElementById('eliminarBtn');
    var estudianteInfo = document.getElementById('estudianteInfo');
    var estudiantesTbl = document.getElementById('estudiantesTbl');

    registrarBtn.onclick = onRegistrarBtn;
    buscarBtn.onclick = onBuscarBtn;
    eliminarBtn.onclick = onEliminarBtn;
    var estudiantes = [];

    if ( JSON.parse(window.localStorage.getItem('estudiantes')) == null || JSON.parse(window.localStorage.getItem('estudiantes')) == [] || JSON.parse(window.localStorage.getItem('estudiantes')) == '' ){
        var esteban = new Persona('Esteban', 'Padilla', 90, 'ep@mail.com');
        var juan = new Persona('Juan', 'Rojas', 95, 'jr@mail.com');
        var maria = new Persona('Maria', 'Smith', 100, 'ms@mail.com');
        estudiantes.push(esteban);
        estudiantes.push(juan);
        estudiantes.push(maria);

        window.localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
        
    } else {
        cargarDesdeLocalStorage();
    }

    //llenarEstudiantesSlt();
    llenarEstudiantesTbl();

    function onRegistrarBtn() {
        var nombre = nombreIn.value;
        var apellido = apellidoIn.value;
        var nota = notaIn.value;
        var email = emailIn.value;
        var isOK = true;

        if (nombre === '') {
            nombreIn.classList.add('error');
            isOK = false;
        } else {
            nombreIn.classList.remove('error');
        }

        if (apellido === '') {
            apellidoIn.classList.add('error');
            isOK = false;
        } else {
            apellidoIn.classList.remove('error');
        }

        if (nota === '') {
            notaIn.classList.add('error');
            isOK = false;
        } else {
            notaIn.classList.remove('error');
        }

        if (email === '' || !isEmailValid(email)) {
            emailIn.classList.add('error');
            isOK = false;
        } else {
            emailIn.classList.remove('error');
        }

        if (isOK) {
            var persona = new Persona(nombre, apellido, Number(nota), email);
            estudiantes.push(persona);
            window.localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

            limpiar();
            llenarEstudiantesSlt();
            llenarEstudiantesTbl();
        }
    }



    /**
     * The function takes an event as an argument, then it takes the email from the event target's
     * previous sibling, then it loops through the array of students, then it checks if the email is
     * equal to the student's email, then it displays the student's information, then it returns
     * @param event - The event object is a JavaScript object that contains useful information about
     * the event that just happened.
     * @returns the information of the student that matches the email that was entered.
     */
    function onBuscarBtn(event) {
        var email = event.target.previousSibling.innerText;
        for (var i = 0; i < estudiantes.length; i++) {
            var persona = estudiantes[i];
            if (email === persona.email) {
                estudianteInfo.innerHTML = `<b>Información:</b> <br><b>Nombre: </b>${persona.nombre} ${persona.apellido}<br><b>Nota:</b> ${persona.nota}<br><b>Email:</b> ${persona.email}<br> <b>${persona.aprobar()}</b>`;
                return;
            }
        }
    }



    function limpiar() {
        nombreIn.value = '';
        apellidoIn.value = '';
        notaIn.value = '';
        emailIn.value = '';
    }

    function llenarEstudiantesTbl() {
        estudiantesTbl.innerHTML = '';
        estudiantes.forEach(persona => {
            //Creamos el row
            var tr = document.createElement('tr');
            estudiantesTbl.appendChild(tr);
            //Creamos la primera celda, le asignamos el contenido y la agregamos al row
            var td = document.createElement('td');
            td.innerHTML = persona.nombre;
            tr.appendChild(td);
            //Lo mismo con la celda de apellido
            var td = document.createElement('td');
            td.innerHTML = persona.apellido;
            tr.appendChild(td);
            //Lo mismo con la celda de nota
            var td = document.createElement('td');
            td.innerHTML = persona.nota;
            tr.appendChild(td);
            //Lo mismo con la celda de correo
            var td = document.createElement('td');
            td.innerHTML = persona.email;
            tr.appendChild(td);
            //Creamos la celda de buscar
            var td = document.createElement('td');
            tr.appendChild(td);
            //Le asignamos una clase para darle estilo
            td.classList.add('btnBuscar');
            //Le agregamos el contenido
            td.innerText = 'Buscar';
            //Le asignamos el onClick para que invoque a la funcion onBuscarBtn2
            td.onclick = onBuscarBtn;
            //Creamos la ultima celda que sera el boton de eliminar y lo agregamos a row
            var td = document.createElement('td');
            tr.appendChild(td);
            //Le asignamos una clase para darle estilo
            td.classList.add('btnEliminar');
            //Le agregamos el contenido
            td.innerText = 'Eliminar';
            //Le asignamos el onClick para que invoque a la funcion onEliminarTd           
            td.onclick = onEliminarTd;
        });
        
        //TODO:
        //1. Llenar la table con los datos en estudiantes.
        //2. Agregar el td de eliminar un evento onclick = onEliminarTd
        //3. Agregar dinamicamente al objecto td de eliminar el email de la persona td.email = persona.email;
    }
        
    function onEliminarTd(event) {
        //Creamos una variable 'correo' que guarde la ruta completa del correo de la persona a traves del evento
        var correo = event.target.previousSibling.previousSibling.innerText;
        for(let i=0; i < estudiantes.length; i++){
            if(correo == estudiantes[i].email){
                estudiantes.splice(i,1);
            }
        }
        window.localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
        cargarDesdeLocalStorage();
        //llenarEstudiantesSlt();
        llenarEstudiantesTbl();
        //TODO: Recuerden ver el metodo onEliminarBtn y lo que este hace.
    }
   
    function cargarDesdeLocalStorage() {
        var dataSerializada = window.localStorage.getItem('estudiantes');
        var data = JSON.parse(dataSerializada);
        estudiantes = [];
        data.forEach(function (personaData) {
            var persona = new Persona();
            persona.constructorFromData(personaData);
            estudiantes.push(persona);
        });
    }

    function isEmailValid(email) {
        for (let i = 0; i < estudiantes.length; i++) {
            var persona = estudiantes[i];
            if (persona.email === email) {
                return false;
            }
        }
        return true;
    }
    
}