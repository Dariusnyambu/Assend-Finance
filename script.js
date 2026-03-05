// LOAN CALCULATOR

function calculateLoan(){

let amount=document.getElementById("amount").value;
let months=document.getElementById("months").value;

let monthlyInterest=amount*0.30;
let totalInterest=monthlyInterest*months;
let totalRepayment=Number(amount)+totalInterest;

document.getElementById("monthlyInterest").innerText=monthlyInterest;
document.getElementById("totalInterest").innerText=totalInterest;
document.getElementById("totalRepayment").innerText=totalRepayment;

}


// HERO SLIDER

let slides=document.querySelectorAll(".slide");
let index=0;

function showSlides(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

index++;

if(index>slides.length){
index=1;
}

slides[index-1].classList.add("active");

setTimeout(showSlides,5000);

}

showSlides();


// MOBILE MENU

const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");

menuToggle.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});


// FORM WHATSAPP

document.getElementById("loanForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let id=document.getElementById("idNumber").value;
let phone=document.getElementById("phone").value;
let amount=document.getElementById("loanAmount").value;
let purpose=document.getElementById("purpose").value;
let returnDate=document.getElementById("returnDate").value;
let guarantorName=document.getElementById("guarantorName").value;
let guarantorContact=document.getElementById("guarantorContact").value;

let message=
`Loan Application

Name: ${name}
ID: ${id}
Phone: ${phone}

Loan Amount: ${amount}
Purpose: ${purpose}

Return Date: ${returnDate}

Guarantor Name: ${guarantorName}
Guarantor Contact: ${guarantorContact}`;

let url=`https://wa.me/254729983747?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

});