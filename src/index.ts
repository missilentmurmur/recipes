import {Recipe, Ingredient, Unit, Category, AllRecipes} from "./recipe";

const allRecipes = new AllRecipes();
const container = document.getElementsByClassName('container');
const randomRecipePlace = document.getElementById('randomRecipePlace');
const newRecipePlace = document.getElementById('newRecipePlace');
const recipeListPlace = document.getElementById('recipeListPlace');
const submitFormButton = document.getElementById('submit');


const deleteContent = (div) => {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
};

const showList = () => {
    //let len = recipeList.length;
    let item = allRecipes.load();

    //for (let i=0, i<len, i++) {
};

const handleTextChanged = (event) => {
    const target = event.target;
    console.log('newText', target.value);
};

const formatCategoryOptions = () => {
    var options = '';
    for (let item in Category) {
        if (isNaN(Number(item))) {
            options += '<option>' + item + '</option>';
        }
    }
    return options;
};

const categoryOptionsInHTML = formatCategoryOptions();


const handleSubmit = (event) => {
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    nameInput.addEventListener('onchange', () => {handleTextChanged(event)});
    const text = nameInput.value;
    //let text1 = nameInput.value;
    console.log(nameInput, text);
};


const showRecipe = () => {
    //container.innerText = 'ez itt egy recept leirasa';
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

    /*const valamiinput = document.getElementById('nameInput');
    valamiinput.addEventListener("input", function (event) {
        const target = event.target;
        console.log('newText', target.value);
    });*/

    randomRecipeButton.addEventListener('click', function (event) {
        deleteContent(randomRecipePlace);
        randomRecipePlace.classList.remove('hidden');
        newRecipePlace.classList.add('hidden');
        recipeListPlace.classList.add('hidden');
        showRecipe();
    });

    newRecipeButton.addEventListener('click',() => {
        //deleteContent(newRecipePlace);
        newRecipePlace.classList.remove('hidden');
        randomRecipePlace.classList.add('hidden');
        recipeListPlace.classList.add('hidden');
        let select = document.getElementById('category');
        select.innerHTML = categoryOptionsInHTML;
    });

    allRecipesButton.addEventListener('click', () => {
        //deleteContent(recipeListPlace);
        recipeListPlace.classList.remove('hidden');
        randomRecipePlace.classList.add('hidden');
        newRecipePlace.classList.add('hidden');
        showList();
    });

    submitFormButton.addEventListener('click', () => {
        handleSubmit(event);
    });

    //nehany recept teszteleshez:
    const zabkasa = new Recipe('zabkasa','breakfast', 2,'some instructions');
    const tejbegriz = new Recipe('tejbegriz', 'breakfast', 2, 'some instructions');
    

    /*
        let bundaskenyer;
        bundaskenyer = new Recipe('bundaskenyer');

        let liszt;
        liszt = new Ingredient('liszt',5,Unit.dkg);

        bundaskenyer.ingredients = liszt;
        bundaskenyer.category = Category.breakfast;
        console.log(bundaskenyer.showLong());

        console.log(liszt);*/
});
