const meals = [

    /* ---------- BREAKFAST ---------- */

    {
        id: "breakfast-1",

        name: "Pancake & Sausage Breakfast",

        category: "Breakfast",

        ingredients: [
            {
                name: "pancake mix",
                amount: 1,
                unit: "box/bag"
            },
            {
                name: "sausage",
                amount: 1,
                unit: ""
            },
            {
                name: "milk",
                amount: 1,
                unit: "carton"
            },
            {
                name: "fruit",
                amount: 2,
                unit: "cans"
            },
            {
                name: "peanut butter",
                amount: 1,
                unit: "jar"
            },
            {
                name: "vegetable oil",
                amount: 1,
                unit: "bottle"
            }
        ]
    },


    {
        id: "breakfast-2",

        name: "Peanut Butter & Jelly Pancakes",

        category: "Breakfast",

        ingredients: [
            {
                name: "pancake mix",
                amount: 1,
                unit: "box/bag"
            },
            {
                name: "peanut butter",
                amount: 1,
                unit: "jar"
            },
            {
                name: "jelly",
                amount: 1,
                unit: "jar"
            },
            {
                name: "milk",
                amount: 1,
                unit: "box"
            },
            {
                name: "fruit",
                amount: 2,
                unit: "cans"
            }
        ]
    },


    {
        id: "breakfast-3",

        name: "Pancakes & Bacon/Sausage",

        category: "Breakfast",

        ingredients: [
            {
                name: "pancake mix",
                amount: 1,
                unit: ""
            },
            {
                name: "bacon/sausage",
                amount: 1,
                unit: ""
            },
            {
                name: "cans of fruit",
                amount: 1,
                unit: ""
            },
            {
                name: "shelf stable milk",
                amount: 1,
                unit: ""
            },
            {
                name: "syrup",
                amount: 1,
                unit: ""
            }
        ]
    },


    {
        id: "breakfast-4",

        name: "Egg & Bacon Breakfast",

        category: "Breakfast",

        ingredients: [
            {
                name: "milk",
                amount: 1,
                unit: ""
            },
            {
                name: "peanut butter",
                amount: 1,
                unit: ""
            },
            {
                name: "egg",
                amount: 4,
                unit: ""
            },
            {
                name: "bacon",
                amount: 1,
                unit: ""
            },
            {
                name: "corn muffin mix",
                amount: 1,
                unit: ""
            },
            {
                name: "fruit",
                amount: 2,
                unit: "cans / 4 fruit cups"
            }
        ]
    },


    /* ---------- LUNCH / DINNER ---------- */

    {
        id: "chicken-alfredo",

        name: "Chicken Alfredo",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "alfredo",
                amount: 1,
                unit: "packet"
            },
            {
                name: "spaghetti",
                amount: 1,
                unit: "box"
            },
            {
                name: "chicken",
                amount: 1,
                unit: "can or 3 packets"
            },
            {
                name: "frozen vegetables",
                amount: 1,
                unit: "bag"
            }
        ]
    },


    {
        id: "soup-meal",

        name: "Soup Meal",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "soup",
                amount: 2,
                unit: "pouches"
            },
            {
                name: "mashed potatoes",
                amount: 1,
                unit: "bag"
            },
            {
                name: "green beans",
                amount: 1,
                unit: "can"
            },
            {
                name: "corn muffin mix",
                amount: 1,
                unit: "box/bag"
            },
            {
                name: "frozen chicken",
                amount: 1,
                unit: ""
            }
        ]
    },


    {
        id: "taco-bowl",

        name: "Taco Bowl Meal",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "ground beef/turkey",
                amount: 1,
                unit: ""
            },
            {
                name: "black beans",
                amount: 1,
                unit: "can"
            },
            {
                name: "rice",
                amount: 1,
                unit: "bag"
            },
            {
                name: "cheese",
                amount: 1,
                unit: "pack"
            },
            {
                name: "tomatoes",
                amount: 2,
                unit: "cans"
            }
        ]
    },


    {
        id: "kid-friendly-nuggies",

        name: "Kid-Friendly Nuggies",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "chicken nuggets",
                amount: 1,
                unit: ""
            },
            {
                name: "mac n cheese",
                amount: 1,
                unit: ""
            },
            {
                name: "green beans",
                amount: 1,
                unit: ""
            }
        ]
    },


    {
        id: "stew",

        name: "Stew",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "mashed potatoes",
                amount: 1,
                unit: ""
            },
            {
                name: "veggies",
                amount: 1,
                unit: ""
            },
            {
                name: "beef/chicken stew",
                amount: 1,
                unit: ""
            }
        ]
    },


    {
        id: "chili",

        name: "Chili Meal",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "corn muffin mix",
                amount: 1,
                unit: ""
            },
            {
                name: "canned chili",
                amount: 2,
                unit: ""
            },
            {
                name: "canned carrots",
                amount: 2,
                unit: ""
            },
            {
                name: "chili powder",
                amount: 1,
                unit: ""
            }
        ]
    },


    {
        id: "broth-beans",

        name: "Broth and Beans",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "broth",
                amount: 1,
                unit: ""
            },
            {
                name: "butter beans",
                amount: 2,
                unit: ""
            },
            {
                name: "kidney beans",
                amount: 1,
                unit: "or 2"
            },
            {
                name: "black beans",
                amount: 1,
                unit: ""
            },
            {
                name: "rice",
                amount: 1,
                unit: ""
            },
            {
                name: "venison",
                amount: 1,
                unit: ""
            }
        ]
    },


    {
        id: "rice-a-roni",

        name: "Rice-a-Roni",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "rice a roni",
                amount: 1,
                unit: "box"
            },
            {
                name: "canned chicken",
                amount: 1,
                unit: "can or 2 pouches"
            },
            {
                name: "canned vegetables",
                amount: 1,
                unit: "can"
            },
            {
                name: "ramen",
                amount: 2,
                unit: "packs"
            }
        ]
    },


    {
        id: "meatball-meal",

        name: "Meatball Meal",

        category: "Lunch/Dinner",

        ingredients: [
            {
                name: "meatballs",
                amount: 1,
                unit: "pack"
            },
            {
                name: "spaghetti",
                amount: 1,
                unit: "box"
            },
            {
                name: "red saucey sauce",
                amount: 1,
                unit: "can"
            },
            {
                name: "mashed potatoes",
                amount: 1,
                unit: "pack"
            },
            {
                name: "can vegetables",
                amount: 2,
                unit: "cans"
            }
        ]
    }

];

let inventory =
    JSON.parse(
        localStorage.getItem("pantryInventory")
    ) || {};


let shoppingList =
    JSON.parse(
        localStorage.getItem("pantryShopping")
    ) || {};


let currentFilter = "all";

let currentSearch = "";

function normalize(text) {

    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();

}


function titleCase(text) {

    return text.replace(
        /\b\w/g,
        character => character.toUpperCase()
    );

}


function saveData() {

    localStorage.setItem(
        "pantryInventory",
        JSON.stringify(inventory)
    );

    localStorage.setItem(
        "pantryShopping",
        JSON.stringify(shoppingList)
    );

}


function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}

const aliases = {

    "cans of fruit": [
        "fruit"
    ],

    "shelf stable milk": [
        "milk"
    ],

    "frozen chicken": [
        "chicken"
    ],

    "canned chicken": [
        "chicken"
    ],

    "canned vegetables": [
        "vegetables",
        "veggies"
    ],

    "can vegetables": [
        "vegetables",
        "veggies"
    ],

    "ground beef/turkey": [
        "ground beef",
        "ground turkey"
    ],

    "bacon/sausage": [
        "bacon",
        "sausage"
    ],

    "red saucey sauce": [
        "red sauce",
        "tomato sauce"
    ]

};

function getInventoryQuantity(foodName) {

    const name =
        normalize(foodName);


    let quantity =
        Number(
            inventory[name] || 0
        );


    /*
        Check aliases.
    */

    Object.entries(aliases).forEach(
        ([key, possibleMatches]) => {

            if (
                normalize(key) === name
            ) {

                possibleMatches.forEach(
                    match => {

                        quantity += Number(
                            inventory[
                                normalize(match)
                            ] || 0
                        );

                    }
                );

            }

        }
    );


    return quantity;

}

function hasIngredient(foodName) {

    const name =
        normalize(foodName);


    if (
        getInventoryQuantity(name) > 0
    ) {

        return true;

    }


    const possibleAliases =
        aliases[name] || [];


    return possibleAliases.some(
        alias =>
            Number(
                inventory[
                    normalize(alias)
                ] || 0
            ) > 0
    );

}

function getMealStatus(meal) {

    let available = 0;

    const missing = [];


    meal.ingredients.forEach(
        ingredient => {

            if (
                hasIngredient(
                    ingredient.name
                )
            ) {

                available++;

            } else {

                missing.push(
                    ingredient
                );

            }

        }
    );


    const percentage =
        Math.round(
            available /
            meal.ingredients.length *
            100
        );


    let status;


    if (percentage === 100) {

        status = "ready";

    }

    else if (percentage >= 70) {

        status = "almost";

    }

    else if (percentage > 0) {

        status = "partial";

    }

    else {

        status = "missing";

    }


    return {
        percentage,
        status,
        missing
    };

}

function renderStats() {

    const foodTypes =
        Object.keys(inventory)
            .filter(
                name =>
                    Number(inventory[name]) > 0
            );


    const totalUnits =
        foodTypes.reduce(
            (total, name) => {

                return total +
                    Number(
                        inventory[name]
                    );

            },
            0
        );


    const statuses =
        meals.map(
            meal =>
                getMealStatus(meal)
        );


    const ready =
        statuses.filter(
            status =>
                status.status === "ready"
        ).length;


    const almost =
        statuses.filter(
            status =>
                status.status === "almost"
        ).length;


    document.getElementById(
        "foodCount"
    ).textContent =
        foodTypes.length;


    document.getElementById(
        "totalUnits"
    ).textContent =
        totalUnits;


    document.getElementById(
        "readyCount"
    ).textContent =
        ready;


    document.getElementById(
        "almostCount"
    ).textContent =
        almost;

}

function renderInventory() {

    const container =
        document.getElementById(
            "inventoryList"
        );


    const entries =
        Object.entries(inventory);


    if (entries.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No inventory yet.
                Add food above.
            </div>
        `;

        return;

    }


    container.innerHTML =
        entries.map(
            ([name, quantity]) => `

                <div class="inventory-row">

                    <strong>
                        ${titleCase(name)}
                    </strong>


                    <input
                        class="inventory-quantity"
                        data-name="${name}"
                        type="number"
                        min="0"
                        value="${quantity}"
                    >


                    <input
                        class="inventory-unit"
                        placeholder="unit"
                    >


                    <button
                        class="danger remove-food"
                        data-name="${name}"
                    >
                        Remove
                    </button>

                </div>

            `
        ).join("");


    document
        .querySelectorAll(
            ".inventory-quantity"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    inventory[
                        input.dataset.name
                    ] =
                        Math.max(
                            0,
                            Number(
                                input.value
                            )
                        );


                    saveData();

                    renderAll();

                }
            );

        });


    document
        .querySelectorAll(
            ".remove-food"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    delete inventory[
                        button.dataset.name
                    ];


                    saveData();

                    renderAll();

                }
            );

        });

}

function renderMeals() {

    const container =
        document.getElementById(
            "mealGrid"
        );


    const search =
        normalize(currentSearch);


    const filteredMeals =
        meals.filter(meal => {

            const categoryMatches =
                currentFilter === "all" ||
                meal.category ===
                    currentFilter;


            const searchText =
                normalize(
                    meal.name +
                    " " +
                    meal.ingredients
                        .map(
                            ingredient =>
                                ingredient.name
                        )
                        .join(" ")
                );


            const searchMatches =
                !search ||
                searchText.includes(
                    search
                );


            return (
                categoryMatches &&
                searchMatches
            );

        });


    if (filteredMeals.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No meals found.
            </div>
        `;

        return;

    }


    container.innerHTML =
        filteredMeals.map(
            meal => {

                const status =
                    getMealStatus(meal);


                const statusText =
                    status.status === "ready"
                        ? "READY"
                        : status.status === "almost"
                            ? "ALMOST READY"
                            : status.status === "partial"
                                ? "PARTIALLY AVAILABLE"
                                : "NOT AVAILABLE";


                return `

                    <article class="meal-card">

                        <span
                            class="
                                badge
                                ${status.status}
                            "
                        >
                            ${statusText}
                        </span>


                        <h3>
                            ${meal.name}
                        </h3>


                        <div class="category">

                            ${meal.category}

                            ·

                            ${status.percentage}%
                            available

                        </div>


                        <div class="progress">

                            <i
                                style="
                                    width:
                                    ${status.percentage}%
                                "
                            ></i>

                        </div>


                        <ul class="ingredients">

                            ${
                                meal.ingredients
                                    .map(
                                        ingredient => `

                                            <li>

                                                ${
                                                    hasIngredient(
                                                        ingredient.name
                                                    )
                                                        ? "✓"
                                                        : "○"
                                                }

                                                ${ingredient.name}

                                                —
                                                ${ingredient.amount}

                                                ${
                                                    ingredient.unit
                                                        ? " " +
                                                          ingredient.unit
                                                        : ""
                                                }

                                            </li>

                                        `
                                    )
                                    .join("")
                            }

                        </ul>


                        ${
                            status.missing.length
                                ? `

                                    <ul class="missing-list">

                                        ${
                                            status.missing
                                                .map(
                                                    ingredient => `

                                                        <li>
                                                            Missing:
                                                            ${ingredient.name}
                                                        </li>

                                                    `
                                                )
                                                .join("")
                                        }

                                    </ul>

                                `
                                : ""
                        }


                        <button
                            class="secondary add-shopping"
                            data-id="${meal.id}"
                        >
                            Add Missing Items
                        </button>

                    </article>

                `;

            }
        ).join("");


    document
        .querySelectorAll(
            ".add-shopping"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addMealToShopping(
                        button.dataset.id
                    );

                }
            );

        });

}

function addMealToShopping(mealId) {

    const meal =
        meals.find(
            meal =>
                meal.id === mealId
        );


    if (!meal) return;


    meal.ingredients.forEach(
        ingredient => {

            if (
                !hasIngredient(
                    ingredient.name
                )
            ) {

                const name =
                    normalize(
                        ingredient.name
                    );


                shoppingList[name] =
                    (
                        shoppingList[name] ||
                        0
                    ) +
                    ingredient.amount;

            }

        }
    );


    saveData();

    renderShopping();


    showToast(
        `${meal.name} added to shopping list`
    );

}

function renderMatches() {

    const container =
        document.getElementById(
            "matchGrid"
        );


    const matches =
        meals
            .map(meal => ({
                meal,
                status:
                    getMealStatus(meal)
            }))
            .sort(
                (a, b) =>
                    b.status.percentage -
                    a.status.percentage
            );


    container.innerHTML =
        matches.map(
            match => `

                <article class="match-card">

                    <span
                        class="
                            badge
                            ${match.status.status}
                        "
                    >
                        ${match.status.percentage}%
                        AVAILABLE
                    </span>


                    <h3>
                        ${match.meal.name}
                    </h3>


                    ${
                        match.status.status ===
                        "ready"

                            ? `
                                <p>
                                    Everything needed
                                    is available.
                                </p>
                            `

                            : `
                                <p>
                                    ${
                                        match.status.missing.length
                                    }

                                    ingredient(s)
                                    missing.
                                </p>
                            `
                    }


                    ${
                        match.status.missing.length
                            ? `

                                <ul class="missing-list">

                                    ${
                                        match.status.missing
                                            .map(
                                                ingredient => `

                                                    <li>
                                                        ${ingredient.name}
                                                        —
                                                        ${ingredient.amount}
                                                        ${ingredient.unit}
                                                    </li>

                                                `
                                            )
                                            .join("")
                                    }

                                </ul>

                            `
                            : ""
                    }


                    <button
                        class="secondary add-shopping"
                        data-id="${match.meal.id}"
                    >
                        Add Missing Items
                    </button>

                </article>

            `
        ).join("");


    document
        .querySelectorAll(
            ".add-shopping"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addMealToShopping(
                        button.dataset.id
                    );

                }
            );

        });

}

function renderShopping() {

    const container =
        document.getElementById(
            "shoppingList"
        );


    const items =
        Object.entries(
            shoppingList
        );


    if (items.length === 0) {

        container.innerHTML = `

            <div class="empty">

                Your shopping list is empty.

                <br><br>

                Add a meal's missing ingredients
                from the Meal Database.

            </div>

        `;

        return;

    }


    container.innerHTML =
        items.map(
            ([name, quantity]) => {

                const checked =
                    quantity === 0;


                return `

                    <label
                        class="
                            shopping-item
                            ${
                                checked
                                    ? "checked"
                                    : ""
                            }
                        "
                    >

                        <input
                            type="checkbox"
                            data-shopping="${name}"
                            ${
                                checked
                                    ? "checked"
                                    : ""
                            }
                        >


                        <strong>
                            ${titleCase(name)}
                        </strong>


                        <span>
                            × ${quantity}
                        </span>

                    </label>

                `;

            }
        ).join("");


    document
        .querySelectorAll(
            "[data-shopping]"
        )
        .forEach(checkbox => {

            checkbox.addEventListener(
                "change",
                () => {

                    const name =
                        checkbox.dataset.shopping;


                    if (
                        checkbox.checked
                    ) {

                        shoppingList[name] = 0;

                    }

                    else {

                        shoppingList[name] =
                            1;

                    }


                    saveData();

                    renderShopping();

                }
            );

        });

}

function generateFiveMealBox() {

    const candidates =
        meals
            .map(meal => ({
                meal,

                status:
                    getMealStatus(meal)
            }))
            .sort(
                (a, b) =>
                    b.status.percentage -
                    a.status.percentage
            );


    const selected = [];

    for (
        const candidate of candidates
    ) {

        if (
            selected.length >= 5
        ) {

            break;

        }


        if (
            candidate.status.percentage >= 40
        ) {

            selected.push(
                candidate
            );

        }

    }

    for (
        const candidate of candidates
    ) {

        if (
            selected.length >= 5
        ) {

            break;

        }


        if (
            !selected.some(
                item =>
                    item.meal.id ===
                    candidate.meal.id
            )
        ) {

            selected.push(
                candidate
            );

        }

    }


    const result =
        document.getElementById(
            "boxResult"
        );


    result.classList.remove(
        "hidden"
    );


    result.innerHTML = `

        <h3>
            Recommended 5-Meal Box
        </h3>


        <p>
            These meals currently have
            the highest ingredient availability
            in your pantry.
        </p>


        <div class="box-meals">

            ${
                selected.map(
                    candidate => `

                        <div class="box-meal">

                            <strong>
                                ${candidate.meal.name}
                            </strong>

                            <br>

                            ${
                                candidate.status.percentage
                            }%
                            available

                        </div>

                    `
                ).join("")
            }

        </div>


        <button
            id="addBoxShopping"
            class="primary"
        >
            Add All Missing Ingredients
        </button>

    `;


    document
        .getElementById(
            "addBoxShopping"
        )
        .addEventListener(
            "click",
            () => {

                selected.forEach(
                    candidate => {

                        candidate.meal.ingredients
                            .forEach(
                                ingredient => {

                                    if (
                                        !hasIngredient(
                                            ingredient.name
                                        )
                                    ) {

                                        const name =
                                            normalize(
                                                ingredient.name
                                            );


                                        shoppingList[name] =
                                            (
                                                shoppingList[name] ||
                                                0
                                            ) +
                                            ingredient.amount;

                                    }

                                }
                            );

                    }
                );


                saveData();

                renderShopping();


                showToast(
                    "Meal box shopping list created"
                );

            }
        );

}

document
    .getElementById("foodForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                normalize(
                    document
                        .getElementById(
                            "foodName"
                        )
                        .value
                );


            const quantity =
                Number(
                    document
                        .getElementById(
                            "foodQty"
                        )
                        .value
                );


            if (
                !name ||
                quantity <= 0
            ) {

                return;

            }


            inventory[name] =
                (
                    inventory[name] ||
                    0
                ) +
                quantity;


            saveData();


            event.target.reset();


            renderAll();


            showToast(
                "Food added"
            );

        }
    );

document
    .getElementById("csvFile")
    .addEventListener(
        "change",
        event => {

            const file =
                event.target.files[0];


            if (!file) return;


            const reader =
                new FileReader();


            reader.onload =
                () => {

                    const lines =
                        reader.result
                            .split(/\r?\n/)
                            .filter(
                                line =>
                                    line.trim()
                            );


                    /*
                        Skip header.
                    */

                    lines
                        .slice(1)
                        .forEach(
                            line => {

                                const parts =
                                    line.split(",");


                                const food =
                                    parts[0];


                                const quantity =
                                    Number(
                                        parts[1]
                                    );


                                if (
                                    food &&
                                    !isNaN(
                                        quantity
                                    )
                                ) {

                                    const name =
                                        normalize(
                                            food
                                        );


                                    inventory[name] =
                                        (
                                            inventory[name] ||
                                            0
                                        ) +
                                        quantity;

                                }

                            }
                        );


                    saveData();

                    renderAll();


                    showToast(
                        "CSV imported"
                    );

                };


            reader.readAsText(
                file
            );

        }
    );

document
    .getElementById("demoBtn")
    .addEventListener(
        "click",
        () => {

            const demoFood = {

                "chicken": 5,

                "spaghetti": 3,

                "alfredo": 2,

                "frozen vegetables": 2,

                "black beans": 4,

                "rice": 4,

                "cheese": 2,

                "tomatoes": 4,

                "green beans": 2,

                "corn muffin mix": 2,

                "canned chili": 2,

                "canned carrots": 2,

                "chili powder": 1,

                "peanut butter": 2,

                "pancake mix": 2,

                "milk": 2,

                "fruit": 4

            };


            Object.assign(
                inventory,
                demoFood
            );


            saveData();

            renderAll();


            showToast(
                "Demo inventory loaded"
            );

        }
    );

document
    .getElementById(
        "clearInventory"
    )
    .addEventListener(
        "click",
        () => {

            if (
                confirm(
                    "Clear all pantry inventory?"
                )
            ) {

                inventory = {};


                saveData();

                renderAll();

            }

        }
    );

document
    .getElementById(
        "clearShopping"
    )
    .addEventListener(
        "click",
        () => {

            shoppingList = {};


            saveData();

            renderShopping();

        }
    );

document
    .getElementById(
        "printList"
    )
    .addEventListener(
        "click",
        () => {

            window.print();

        }
    );

document
    .getElementById(
        "generateBox"
    )
    .addEventListener(
        "click",
        generateFiveMealBox
    );

document
    .getElementById(
        "mealSearch"
    )
    .addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value;


            renderMeals();

        }
    );

document
    .querySelectorAll(
        ".filter"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".filter"
                        )
                        .forEach(
                            button =>
                                button.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    currentFilter =
                        button.dataset.filter;


                    renderMeals();

                }
            );

        }
    );


document
    .querySelectorAll(
        ".tab"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".tab"
                        )
                        .forEach(
                            button =>
                                button.classList.remove(
                                    "active"
                                )
                        );


                    document
                        .querySelectorAll(
                            ".tab-panel"
                        )
                        .forEach(
                            panel =>
                                panel.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    document
                        .getElementById(
                            button.dataset.tab
                        )
                        .classList.add(
                            "active"
                        );

                }
            );

        }
    );

document
    .getElementById(
        "exportBtn"
    )
    .addEventListener(
        "click",
        () => {

            const data = {

                inventory,

                shoppingList

            };


            const blob =
                new Blob(
                    [
                        JSON.stringify(
                            data,
                            null,
                            2
                        )
                    ],
                    {
                        type:
                            "application/json"
                    }
                );


            const url =
                URL.createObjectURL(
                    blob
                );


            const link =
                document.createElement(
                    "a"
                );


            link.href = url;

            link.download =
                "food-for-thought-data.json";


            link.click();


            URL.revokeObjectURL(
                url
            );

        }
    );

document
    .getElementById(
        "importData"
    )
    .addEventListener(
        "change",
        event => {

            const file =
                event.target.files[0];


            if (!file) return;


            const reader =
                new FileReader();


            reader.onload =
                () => {

                    try {

                        const data =
                            JSON.parse(
                                reader.result
                            );


                        inventory =
                            data.inventory ||
                            {};


                        shoppingList =
                            data.shoppingList ||
                            {};


                        saveData();

                        renderAll();


                        showToast(
                            "Data imported"
                        );

                    }

                    catch {

                        showToast(
                            "Invalid data file"
                        );

                    }

                };


            reader.readAsText(
                file
            );

        }
    );

function renderAll() {

    renderStats();

    renderInventory();

    renderMeals();

    renderMatches();

    renderShopping();

}


renderAll();