document.getElementById("Activation").addEventListener("click", randomizer1);
document.getElementById("Activation").addEventListener("click", randomizer2);
document.getElementById("Activation").addEventListener("click", randomizer3);

function randomizer1 () {
  var cityName = ["Villeville", "East Carolina", "North Virginia", "Narnia", "Jupiter ", "China", "Yerba Buena", "Moon", "Mars", "Hoboken", "Greendale", "Hyrule", "America"];
  document.getElementById("CityName").innerHTML = cityName[Math.floor(Math.random() * cityName.length)];
}

function randomizer2 () {
  var adjective = ["Stuffy", "Short", "Tall", "Fighting", "Angry", "Pleasant", "Orange", "Red", "Blue", "Sharp", "Absorbent", "Swole", "Exuberant", "American"];
  document.getElementById("Adjective").innerHTML = adjective[Math.floor(Math.random() * adjective.length)];
}

function randomizer3 () {
  var noun = ["Beavers", "Talons", "Human Beings", "Gophers", "Hedgehogs", "Buffaloes", "Wolf Pack", "Greeen Herd", "Stamepede", "Tiger-Cats", "Trojans", "Spartans", "Jayhawks", "Yellow Jackets", "Bees Knees", "Dummies", "Rabies", "Swansons", "Mangoes", "Money", "Americas"];
  document.getElementById("Noun").innerHTML = noun[Math.floor(Math.random() * noun.length)];
}s