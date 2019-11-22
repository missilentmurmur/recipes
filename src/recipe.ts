export const generateHash = () => {
    let result = '';
    for (let i = 0; i < 16; i += 1) {
        const char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'][
            Math.floor(Math.random() * 16)
            ];
        result += char;
    }
    return result;
};

export class Recipe {
    name: string;
    hash: string;
    ingredients: Ingredient[];
    category: Category;
    serves: number;
    instructions: string;

    constructor(name,category,serves,instructions) {
        this.hash = generateHash();
        this.name = name;
        this.category = category;
        this.serves = serves;
        this.instructions = instructions;
    };

    showShort() {
        return (this.name + ', ' + this.category);
    };

    showLong() {

    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

}

export class Ingredient {
    amount: number;
    unit: Unit;
    name: string;

    constructor(name,amount,unit) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
    };
}

export enum Unit {
    dkg = "dkg",
    dl = "dl",
    l = "l",
    g = "g",
    kg = "kg",
}

export enum Category {
    breakfast = 'breakfast',
    side = 'side',
    main = 'main',
    soup = 'soup',
    salad = 'salad',
    dessert = 'dessert',

}

export class IngredientBase {
    constructor(readonly name: string) {}
}

export class AllRecipes {
    recipes: Recipe[];

    constructor() {
        if (!localStorage.getItem('allRecipes')) {
            this.recipes = [];
        } else {this.load()}
    }

    add(recipe: Recipe) {
        this.recipes.push(recipe);
        this.save();
    }

    load() {
        this.recipes = JSON.parse(localStorage.getItem("allRecipes"));
    }

    save() {
        var recipesString = JSON.stringify(this.recipes);
        localStorage.setItem('allRecipes', recipesString);
    }
}
/*
const makaroni = new Recipe('sajtos makaroni');

const receptek = new AllRecipes();
receptek.add(makaroni);
receptek.save();*/





