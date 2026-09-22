let meals = [];

const mealGrid = document.getElementById("mealGrid");
const mealCount = document.getElementById("mealCount");

const allMealsButton = document.getElementById("allMealsButton");
const breakfastButton = document.getElementById("breakfastButton");
const dinnerButton = document.getElementById("dinnerButton");


async function loadMeals() {
    try {
        const response = await fetch("meals.json");

        if (!response.ok) {
            throw new Error("Could not load meals.json");
        }

        meals = await response.json();

        mealCount.textContent = meals.length;

        displayMeals(meals);

    } catch (error) {
        console.error(error);

        mealGrid.innerHTML = `
            <p>
                Could not load the meal database.
                Make sure you are running the project through a local server.
            </p>
        `;
    }
}


function displayMeals(mealsToDisplay) {

    mealGrid.innerHTML = "";

    if (mealsToDisplay.length === 0) {
        mealGrid.innerHTML = "<p>No meals found.</p>";
        return;
    }

    mealsToDisplay.forEach(meal => {

        const card = document.createElement("div");

        card.className = "meal-card";

        const ingredientList = meal.ingredients
            .map(ingredient => {

                let amount = ingredient.amount;

                if (ingredient.unit) {
                    amount += ` ${ingredient.unit}`;
                }

                return `
                    <li>
                        ${ingredient.name}
                        — ${amount}
                    </li>
                `;
            })
            .join("");

        card.innerHTML = `
            <h3>${meal.name}</h3>

            <div class="category">
                ${meal.category}
            </div>

            <ul class="ingredients">
                ${ingredientList}
            </ul>
        `;

        mealGrid.appendChild(card);
    });
}


function setActiveButton(button) {

    document
        .querySelectorAll(".controls button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}


allMealsButton.addEventListener("click", () => {

    setActiveButton(allMealsButton);

    displayMeals(meals);
});


breakfastButton.addEventListener("click", () => {

    setActiveButton(breakfastButton);

    const breakfastMeals = meals.filter(
        meal => meal.category === "Breakfast"
    );

    displayMeals(breakfastMeals);
});


dinnerButton.addEventListener("click", () => {

    setActiveButton(dinnerButton);

    const dinnerMeals = meals.filter(
        meal => meal.category === "Lunch/Dinner"
    );

    displayMeals(dinnerMeals);
});


loadMeals();