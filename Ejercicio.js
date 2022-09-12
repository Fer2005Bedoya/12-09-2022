import {data} from './data.js';

const items =document.getElementById('items')
const templateCard =document.getElementById('template-card').content;
const fragment =document.createDocumentFragment()
let Like={};

document.addEventListener('DOMContentLoaded',()=>{
    loadData(data)
})

const loadData = data=>{
    console.log(data)
    data.forEach(personajes=>{
        const{id,name,imagenes}= personajes
        templateCard.querySelector('h5').textContent = name
        templateCard.querySelector('img').setAttribute('src',imagenes);
        templateCard.querySelector('.btn-dark').dataset.id = id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)
}
items.addEventListener('click', e => {

})

const addLike = e => {
    if (e.target.classList.contains('.btn-dark')) {
        setLike(e.target.parentElement)
    }
}

const setLike = objeto => {
    const boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0
    }
    if (Like.hasOwnProperty(boton.id)) {
        boton.cantidad = Like[boton.id].cantidad + 1;
        objeto.querySelector('#Like').textContent = boton.cantidad;
    }

    Like[boton.id] = {...boton};
    console.log(Like[boton.id]);
}