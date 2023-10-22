import * as wmFunctions from "./modules/functions.js"

wmFunctions.isWebp();
wmFunctions.burgerMenu();
wmFunctions.accordionMobile(true);
wmFunctions.banner();
wmFunctions.best();
wmFunctions.reviews();


const faq = document.querySelector('.faq')
wmFunctions.tabs(faq);

wmFunctions.accordion(false);