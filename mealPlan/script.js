async function getFood(){
    const response = await fetch("https://api.spoonacular.com/mealplanner/generate?apiKey=a47e2095463a46e59e67f36dcd168cbb&timeFrame=day"); // Parsing it to JSON format 
const data = await response.json();
console.log(data);
}

getFood()

let foodFacts = [""]