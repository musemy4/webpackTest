import {sum, minus} from './math';
import './app.css';
import img from './yay.PNG';


window.addEventListener('DOMContentLoaded', ()=> {
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1> 1 + 2 = ${sum(1, 2)}</h1>
        <h1> 1 - 2 = ${minus(1, 2)}</h1>
        <img src="${img}" alt="imgYay" />
    `
})

