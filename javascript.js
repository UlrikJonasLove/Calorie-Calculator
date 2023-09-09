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
    let exercise = document.getElementById("exercise").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let reps = parseInt(document.getElementById("reps").value);
    let liftedWeight = parseFloat(document.getElementById("liftedWeight").value);

    let bmr = calculateBMR(weight, height, age, gender);

    let exerciseCalories;
    switch (exercise) {
        case "squat":
            exerciseCalories = 0.05 * reps * liftedWeight;
            break;
        case "deadlift":
            exerciseCalories = 0.06 * reps * liftedWeight;
            break;
        case "benchpress":
            exerciseCalories = 0.04 * reps * liftedWeight;
            break;
        case "militarypress":
            exerciseCalories = 0.04 * reps * liftedWeight;
            break;
        case "backrows":
            exerciseCalories = 0.05 * reps * liftedWeight;
            break;
        case "bicepcurls":
            exerciseCalories = 0.03 * reps * liftedWeight;
            break;
        case "tricepkickback":
            exerciseCalories = 0.03 * reps * liftedWeight;
            break;
        case "overheadtricepsextensions":
            exerciseCalories = 0.03 * reps * liftedWeight;
            break;
        default:
            exerciseCalories = 0.05 * reps * liftedWeight;
            break;
    }

    // En grov uppskattning av EPOC
    let epoc = 0.1 * bmr;

    let totalCaloriesBurned = exerciseCalories + epoc;

    document.getElementById("result").innerText = totalCaloriesBurned.toFixed(2) + " kalorier";

    saveToLocalStorage();
}

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);