async function getFood(){
    const response = await fetch("https://api.spoonacular.com/mealplanner/generate?apiKey=a47e2095463a46e59e67f36dcd168cbb&timeFrame=day"); // Parsing it to JSON format 
const data = await response.json();
console.log(data);
}

getFood()

let meals = ["spinach", "quinoa", "blueberries", "avocado", "kale"]

let foodFacts = ["Spinach is packed with iron and vitamins.", "Quinoa is a complete protein.", "Blueberries are rich in antioxidants.", "Avocado is a good source of healthy fats.", "Kale is high in fiber and vitamins."]

var randInt = Math.floor(Math.random() * meals.length)

var pTag = document.querySelector("p")
var boxOne = document.querySelector("#box")

boxOne.appendChild(pTag)

pTag.innerHTML =`${meals[randInt] + foodFacts[randInt]}`

console.log