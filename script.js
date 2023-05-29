var counters = document.querySelectorAll('.counter');
var additionButtons = document.querySelectorAll('.addition');
var subtractionButtons = document.querySelectorAll('.substration');
var totalPriceElement = document.getElementById('total');
var eachPrice=document.querySelectorAll('price')

var total = 0;

totalPriceElement= eachPrice*counters

for (var i = 0; i < counters.length; i++) {
  counters[i].innerText = '0';
}

function updateTotalPrice() {
  totalPriceElement.innerText = eachPrice*counters}

function increment(index) {
  return function() {
    var counter = parseInt(counters[index].innerText);
    var price = parseFloat(counters[index].nextElementSibling.innerText);

    counter++;
    counters[index].innerText = counter;
    total += price;
    updateTotalPrice();
  };
}

function decrement(index) {
  return function() {
    var counter = parseInt(counters[index].innerText);
    var price = parseFloat(counters[index].nextElementSibling.innerText);

    if (counter <= 0) {
      alert('Counter cannot be negative!');
    } else {
      counter--;
      counters[index].innerText = counter;
      total -= price;
      updateTotalPrice();
    }
  };
}

for (var i = 0; i < additionButtons.length; i++) {
  additionButtons[i].onclick = increment(i);
}

for (var i = 0; i < subtractionButtons.length; i++) {
  subtractionButtons[i].onclick = decrement(i);
}

function welcome(){
    alert('welcome to Ebeano supermarket')
}

setTimeout(welcome,4000)

