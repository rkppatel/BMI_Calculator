function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    let bmi = weight / (height * height);
    let message;
  
    if (bmi < 18.5) {
      message = "Oops! You are Underweight.";
    } else if (bmi < 25) {
      message = "Awesome! You are Healthy.";
    } else if (bmi < 30) {
      message = "Eee! You are Overweight.";
    } else {
      message = "Seesh! You are Obese.";
    }
  
    document.getElementById("result").innerHTML = `BMI: ${bmi.toFixed(2)}`;
    document.getElementById("msg").innerHTML = `${(message)}`;
  }
  