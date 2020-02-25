var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let price = document.querySelectorAll(".pu span");
let amount = document.querySelectorAll(".qty input");
let subtotal = document.querySelectorAll(".subtot span");
let total = document.querySelectorAll("h2 span")[0];
let table = document.getElementsByTagName("tbody");
let newRow = document.getElementsByClassName("new");
let deleteButton = document.getElementsByClassName("btn-delete");
let createButton = document.getElementById("create");
let calculateButton = document.getElementsByClassName("btn-success");

function updateSubtot($product) {
  let result = price[$product].innerHTML * amount[$product].value;
  return (subtotal[$product].innerHTML = result);
}

function calcAll() {
  let totalAmount = 0;
  for (let i = 0; i < subtotal.length; i++) {
    updateSubtot(i);
    totalAmount += parseInt(subtotal[i].innerHTML);
  }
  total.innerHTML = totalAmount;
  refresh();
}

let newName = document.querySelectorAll(".new input")[0];
let newPrice = document.querySelectorAll(".new input")[1];

function createNew() {
  let name = document.querySelectorAll(".new input")[0].value;
  let value = document.querySelectorAll(".new input")[1].value;
  let template = `<tr class="product"><td class="name"><span>${name}</span></td><td class="pu">$<span>${value}</span></td><td class="qty"><label><input type="number" value="0" min="0" /></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`;
  table[0].innerHTML += template;
  refresh();
  calcAll();
}

function deleteRow(index) {
  table[0].deleteRow(index);
  refresh();
}


//Todas mis funciones dependen del array de valores, así que necesito que sus índices estén actualizados
function refresh() {
  price = document.querySelectorAll(".pu span");
  amount = document.querySelectorAll(".qty input");
  subtotal = document.querySelectorAll(".subtot span");
  total = document.querySelectorAll("h2 span")[0];
  table = document.getElementsByTagName("tbody");
  newRow = document.getElementsByClassName("new");
  deleteButton = document.getElementsByClassName("btn-delete");
  createButton = document.getElementById("create");
  calculateButton = document.getElementsByClassName("btn-success");
  for (let i = 0; i < deleteButton.length; i++) {
    updateSubtot(i);
    deleteButton[i].onclick = () => deleteRow(i);
  }
}

$calc.onclick = calcAll;

createButton.onclick = () => createNew();

calculateButton.onclick = () => calcAll();
