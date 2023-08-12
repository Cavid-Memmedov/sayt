let icon=document.querySelector('.arrow');

icon.addEventListener('click', () =>{
    icon.classList.toggle('active');
});

// let listItems = document.querySelectorAll('.sidebar-list-item');
// listItems.forEach((list) => {
//     list.addEventListener('click', (e) =>{
//         listItems.forEach(item=> item.classList.remove('active'));
//         e.target.classList.add('active');
//     })
// })

let inputsdiv = document.querySelectorAll('.input div');
inputsdiv.forEach((div) => {
    let input = div.querySelector('input');
    let span = div.querySelector('#rangeValue');
    input.addEventListener('change', (e) =>{
        span.innerHTML = e.target.value;
    })
});

const sidebar = document.querySelector('.sidebar');
const sidebarTitle=document.querySelector('#span_sidebar');
const toggle = document.getElementById("toggle");
const header = document.querySelector("header")
const main = document.querySelector(".main");
const infostudent = document.querySelector(".about_student")
const prize= document.querySelector(".prize_student");
const examcard = document.querySelector(".exam");
const spanheader= document.querySelector("#span_header")
const mail= document.querySelector(".mail");
const exam= document.querySelector("#exam");

const list=document.getElementById("list-item");
const listItems =list.children[1];

toggle.onclick = function(){
sidebarTitle.classList.toggle('active');
toggle.classList.toggle("active");
sidebar.classList.toggle("active");
header.classList.toggle("active");
main.classList.toggle("active");
infostudent.classList.toggle("active");
prize.classList.toggle("active");
spanheader.classList.toggle("active");
mail.classList.toggle("active");
exam.classList.toggle("active");

examcard.classList.toggle("active");



    listItems.classList.toggle("active");

}
