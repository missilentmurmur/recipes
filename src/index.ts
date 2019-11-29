import {Recipe, Ingredient, Unit, Category, AllRecipes} from "./recipe";

const allRecipes = new AllRecipes();
const container = document.getElementsByClassName('container');
const randomRecipePlace = document.getElementById('randomRecipePlace');
const newRecipePlace = document.getElementById('newRecipePlace');
const recipeListPlace = document.getElementById('recipeListPlace');
const submitFormButton = document.getElementById('submit');
const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const categorySelect = document.getElementById('category') as HTMLSelectElement;

const deleteContent = (div) => {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
};

const showRecipe = () => {

};


const showList = () => {
    //let len = recipeList.length;
    allRecipes.load();
    let item = allRecipes.recipes;
    console.log(item[0]);
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
            options += '<option value="'  + item + '">' + item + '</option>';
        }
    }
    return options;
};

const categoryOptionsInHTML = formatCategoryOptions();


const handleSubmit = (event) => { //lehetne olyat is, hogy parameternek megadni, h melyik fieldekbol kerem a valuet, es akkor kiszedi?
    const name = nameInput.value;
    const category = categorySelect.value;
    const servings = document.getElementById('servesInput') as HTMLInputElement;
    const instructionsInput = document.getElementById('instructionsInput') as HTMLTextAreaElement;
    console.log(name);
    console.log(category);
    console.log(servings.value);
    console.log(instructionsInput.value);
    const newRecipe = new Recipe(name,category,servings.value,instructionsInput.value);
    allRecipes.add(newRecipe);
};


document.addEventListener("DOMContentLoaded", () => {
    const textbox = document.getElementById('textbox');
    textbox.innerText = 'Kérek egy receptet!';

    const menu = document.getElementById('menu');
    //randomButton =
    menu.append();

    const randomRecipeButton = document.getElementById('randomRecipe');
    const newRecipeButton = document.getElementById('newRecipe');
    const allRecipesButton = document.getElementById('listRecipes');


    nameInput.addEventListener('onchange', () => {handleTextChanged(event)});

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
    //const zabkasa = new Recipe('zabkasa','breakfast', 2,'some instructions');
    //const tejbegriz = new Recipe('tejbegriz', 'breakfast', 2, 'some instructions');
    

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
