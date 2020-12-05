import data from '../data/menu.json';
import recipeCardTemplate from '../templates/recipeCardTemplate.hbs'

const menu = document.querySelector('.js-menu');
const cardMenu = data.map(card => recipeCardTemplate(card)).join('');
menu.innerHTML = cardMenu;