const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const bmi = weight / ((height/100) ** 2);
  let bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = 'underweight';
  } else if (bmi < 25) {
    bmiCategory = 'normal weight';
  } else if (bmi < 30) {
    bmiCategory = 'overweight';
  } else {
    bmiCategory = 'obese';
  }

  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}, which is considered ${bmiCategory}.`;
});
