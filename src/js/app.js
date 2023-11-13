import * as wmFunctions from "./modules/functions.js"

wmFunctions.isWebp();
wmFunctions.burgerMenu();
wmFunctions.accordionMobile(true);
wmFunctions.banner();
wmFunctions.best();
wmFunctions.aboutSlider();
// wmFunctions.cert();
wmFunctions.better();
wmFunctions.osetra();
wmFunctions.city();
wmFunctions.article();
wmFunctions.recipes();
wmFunctions.reviews();
wmFunctions.delivery();
wmFunctions.readMore(767);


const faq = document.querySelector('.faq')
wmFunctions.tabs(faq);

const sale = document.querySelector('.special')
wmFunctions.tabs(sale);

const recipes = document.querySelector('.recipes-page')
wmFunctions.tabs(recipes);

const faqPage = document.querySelector('.faq-page')
wmFunctions.tabs(faqPage);

wmFunctions.accordion(false);