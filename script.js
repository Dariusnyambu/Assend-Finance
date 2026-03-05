function calculateLoan(){

let amount = document.getElementById("amount").value;
let months = document.getElementById("months").value;

let monthlyInterest = amount * 0.30;

let totalInterest = monthlyInterest * months;

let totalRepayment = Number(amount) + totalInterest;

document.getElementById("monthlyInterest").innerText = monthlyInterest;
document.getElementById("totalInterest").innerText = totalInterest;
document.getElementById("totalRepayment").innerText = totalRepayment;

}


// WHATSAPP FORM

document.getElementById("loanForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let id=document.getElementById("idNumber").value;
let phone=document.getElementById("phone").value;
let amount=document.getElementById("loanAmount").value;
let purpose=document.getElementById("purpose").value;

let message=
`Loan Application

Name: ${name}
ID: ${id}
Phone: ${phone}

Loan Amount: ${amount}
Purpose: ${purpose}`;

let url=`https://wa.me/254708039015?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

});