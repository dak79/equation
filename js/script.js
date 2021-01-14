function seconEquat() {
  // variables take the value of input fields.

  let a = document.querySelector('#aVal').value;
  let b = document.querySelector('#bVal').value;
  let c = document.querySelector('#cVal').value;

  //solving equation starting from delta
  //printing result on HTML
  let delta = Math.pow(b, 2) - (4 * a * c);
  document.querySelector('#deltaValue').innerHTML = delta;

  if (delta > 0) {
    let resOne = (-b + Math.sqrt(delta)) / (2 * a);
    let resTwo = (-b - Math.sqrt(delta)) / (2 * a);
    document.querySelector('#resultOne').innerHTML = resOne;
    document.querySelector('#resultTwo').innerHTML = resTwo;

  } else if (delta === 0) {
    let resThree = -b / (2 * a);
    document.querySelector('#resultOne').innerHTML = resThree;
    document.querySelector('#resultTwo').innerHTML = resThree;

  } else if (delta < 0) {
    let resFour = 'Not a real result';
    document.querySelector('#resultOne').innerHTML = resFour;
    document.querySelector('#resultTwo').innerHTML = resFour;
  }
};

function clearAll() {
  document.querySelector('#aVal').value = '';
  document.querySelector('#bVal').value = '';
  document.querySelector('#cVal').value = '';
  document.querySelector('#deltaValue').innerHTML = '';
  document.querySelector('#resultOne').innerHTML = '';
  document.querySelector('#resultTwo').innerHTML = '';
}
