import "bootstrap/dist/css/bootstrap.min.css";
import "./components/search-bar.js";

function main() {
    const recipes = async () => {
        try {
            const responses = await fetch(
                "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
            );
            const responsesJson = await responses.json();
            responsesJson.error ?
                console.log(responsesJson.message) :
                renderRecipes(responsesJson.meals);
        } catch (error) {
            console.log(error);
        }
    }

    const renderRecipes = (meals) => {
        const listMealElement = document.querySelector("#listMeal");
        listMealElement.innerHTML = "";
        meals.forEach((meal) => {
            listMealElement.innerHTML += `
                <div class="col-lg-12 col-md-12 col-sm-4 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <h6>${meal.strMeal}</h6>
                        <img class="card-img-top p-3" src="${meal.strMealThumb}"alt="${meal.strMeal}">
                        <p class="categories">Categories : ${meal.strCategory}</p>
                        <h6>Ingredients: </h6>
                            <ul>
                                <li>${meal.strIngredient1} (${meal.strMeasure1})</li>
                                <li>${meal.strIngredient2} (${meal.strMeasure2})</li>
                                <li>${meal.strIngredient3} (${meal.strMeasure3})</li>
                                <li>${meal.strIngredient4} (${meal.strMeasure4})</li>
                                <li>${meal.strIngredient5} (${meal.strMeasure5})</li>
                                <li>${meal.strIngredient6} (${meal.strMeasure6})</li>
                                <li>${meal.strIngredient7} (${meal.strMeasure7})</li>
                                <li>${meal.strIngredient8} (${meal.strMeasure8})</li>
                                <li>${meal.strIngredient9} (${meal.strMeasure9})</li>
                            </ul>
                        <h6>How To Cook : </h6>
                        <p class="instructions">${meal.strInstructions}</p>
                    </div>
                </div>
            `;
        });
    };

    const displayMeal = async (title = "") => {
        try {
            const responses = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`
            );
            const responsesJson = await responses.json();
            responsesJson.error ?
                console.log(responsesJson.message) :
                renderdisplayMeals(responsesJson.meals);
        } catch (error) {
            console.log(error);
        }
    }

    const renderdisplayMeals = (meals) => {
        const displayMeals = document.querySelector("#displayMeal");
        displayMeals.innerHTML = "";
        meals.forEach((meal) => {
            displayMeals.innerHTML += `
                <div class="col-lg-4 col-md-12 col-sm-12 my-2">
                    <div class="card p-3" style="min-height:370px">
                        <h6 class="text-center"> ${meal.strMeal}</h6>
                        <a href="${meal.strMealThumb}">
                            <img class="card-img-top p-2" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        </a>
                        <div class="card-body shadow-sm p-3 mb-5 bg-white rounded"">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" id="accordion" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne${meal.idMeal}" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Instructions
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne${meal.idMeal}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"> ${meal.strInstructions}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        recipes();
        displayMeal();
    });

    const input = document.getElementById("searchMenu");
    const btnSearch = document.getElementById("searchButtonElement");

    btnSearch.addEventListener("click", (e) => {
        displayMeal(input.value);
    });
}

export default main;