import data from '../data/menu.json';
import recipeCardTemplate from '../templates/recipeCardTemplate.hbs'

document.querySelector('.js-menu').innerHTML = data.reduce((acc, card) => acc += recipeCardTemplate(card), '');