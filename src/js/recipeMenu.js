import data from '../data/menu.json';
import recipeCardTemplate from '../templates/recipeCardTemplate.hbs'

document.querySelector('.js-menu').innerHTML = recipeCardTemplate(data);