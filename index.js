
const resetBtn = document.getElementById('reset-btn');
const container = document.querySelector('.container');

const billInput = document.getElementById('bill-input');
const customNum = document.getElementById('custom-num');
const numPeople = document.getElementById('numPeople');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');

let totalBill = 0;
let numPeopleValue = 1;

container.addEventListener('click', function (e) {
  e.preventDefault();
});

function calculateBill(tipPercentage) {
  totalBill = parseFloat(billInput.value);
  numPeopleValue = parseInt(numPeople.value);

  if (isNaN(totalBill) || isNaN(numPeopleValue) || totalBill <= 0 || numPeopleValue <= 0) {
    displayAmounts('$0.00', '$0.00');
    return;
  }

  let tipAmountResult = ((totalBill * tipPercentage) / numPeopleValue).toFixed(2);
  let totalPerPerson = (totalBill / numPeopleValue) + parseFloat(tipAmountResult);

  if (isNaN(tipAmountResult) || isNaN(totalPerPerson)) {
    displayAmounts('$0.00', '$0.00');
  } else {
    displayAmounts(`$${tipAmountResult}`, `$${totalPerPerson.toFixed(2)}`);
  }
}

function displayAmounts(tipAmountValue, totalValue) {
  tipAmount.textContent = tipAmountValue;
  total.textContent = totalValue;
}

resetBtn.addEventListener('click', function () {
  billInput.value = '';
  customNum.value = '';
  numPeople.value = '1';
  displayAmounts('$0.00', '$0.00');
});