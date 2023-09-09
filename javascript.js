const coeff_per_rep = 1.43;

const exerciseCoefficients = {
    "squat": 1.8,
    "deadlift": 1.7,
    "benchpress": 1.4,
    "militarypress": 1.3,
    "backrows": 1.4,
    "bicepcurls": 1.0,
    "tricepkickback": 1.0,
    "overheadtricepsextensions": 1.1
};

function saveToLocalStorage() {
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    localStorage.setItem("gender", gender);
    localStorage.setItem("age", age);
    localStorage.setItem("height", height);
    localStorage.setItem("weight", weight);
}

function loadFromLocalStorage() {
    let savedGender = localStorage.getItem("gender");
    let savedAge = localStorage.getItem("age");
    let savedHeight = localStorage.getItem("height");
    let savedWeight = localStorage.getItem("weight");

    if (savedGender) {
        document.getElementById("gender").value = savedGender;
    }
    if (savedAge) {
        document.getElementById("age").value = savedAge;
    }
    if (savedHeight) {
        document.getElementById("height").value = savedHeight;
    }
    if (savedWeight) {
        document.getElementById("weight").value = savedWeight;
    }
}

function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

function calculateCalories() {
    let gender = document.getElementById("gender").value;
    let age = parseFloat(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let exercise = document.getElementById("exercise").value;
    let reps = parseInt(document.getElementById("reps").value);
    let sets = parseInt(document.getElementById("sets").value);

    let bmr = calculateBMR(weight, height, age, gender);
    let adjustmentFactor = 0.001 * bmr;
    // Uppdaterad beräkning baserad på antal reps
    let exerciseCalories = (exerciseCoefficients[exercise] * reps * sets) + adjustmentFactor;

    // En grov uppskattning av EPOC
    // let epoc = 0.1 * bmr;

    // let totalCaloriesBurned = exerciseCalories + epoc;

    document.getElementById("result").innerText = exerciseCalories.toFixed(2) + " kalorier";

    saveToLocalStorage();
}


document.addEventListener("DOMContentLoaded", loadFromLocalStorage);