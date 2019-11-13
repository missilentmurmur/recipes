import {Recipe, Ingredient, Unit, Category, AllRecipes} from "./recipe";

const recipeList = new AllRecipes();
const container = document.getElementById('container');

const deleteContent = (div) => {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
};

const showList = () => {
    //let len = recipeList.length;

    container.append('itt lesz a lista');
    //for (let i=0, i<len, i++) {
};

const showForm = () => {
    let recipeNameField = document.createElement('input');
    let recipeCategoryField = document.createElement('input');
    container.append(recipeNameField);
    container.append(recipeCategoryField);
};

const showRecipe = () => {
    container.innerText = 'ez itt egy recept leirasa';
};


document.addEventListener("DOMContentLoaded", () => {
    const textbox = document.getElementById('textbox');
    textbox.innerText = 'Kerek egy receptet!';

    const menu = document.getElementById('menu');
    //randomButton =
    menu.append();

    const randomRecipeButton = document.getElementById('randomRecipe');
    const newRecipeButton = document.getElementById('newRecipe');
    const allRecipesButton = document.getElementById('listRecipes');
    const container = document.getElementById('container');
    randomRecipeButton.addEventListener('click', function (event) {
        deleteContent(container);
        showRecipe();
    });

    newRecipeButton.addEventListener('click',() => {
        deleteContent(container);
        showForm();
    });

    allRecipesButton.addEventListener('click', () => {
        deleteContent(container);
        showList();
    });



    let bundaskenyer;
    bundaskenyer = new Recipe('bundaskenyer');

    let liszt;
    liszt = new Ingredient('liszt',5,Unit.dkg);

    bundaskenyer.ingredients = liszt;
    bundaskenyer.category = Category.breakfast;
    console.log(bundaskenyer.showLong());

    console.log(liszt);
});
