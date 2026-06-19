//==========
//Q1.配慮事項
//==========

const cautionButtons = document.querySelectorAll("[data-caution]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "caution",
        button.dataset.caution
      );
      location.href = "aroma-diagnosis-q2.html"
    });
  });
}

//==========
//Q2.使用時間
//==========

const timeButtons = document.querySelectorAll("[data-time]");
if(timeButtons.length > 0) {
  timeButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "time",
        button.dataset.time
      );
      location.href = "aroma-diagnosis-q3.html"
    });
  });
}

//==========
//Q3.目的
//==========

const purposeButtons = document.querySelectorAll("[data-purpose]");
if(purposeButtons.length > 0) {
  purposeButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "purpose",
        button.dataset.purpose
      );
      location.href = "aroma-diagnosis-q4.html"
    });
  });
}

//==========
//Q4.香りの系統
//==========

const lineageButtons = document.querySelectorAll("[data-lineage]");
if(lineageButtons.length > 0) {
  lineageButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "lineage",
        button.dataset.lineage
      );
      location.href = "aroma-diagnosis-q5.html"
    });
  });
}

//==========
//Q5.重さ
//==========

const weightButtons = document.querySelectorAll("[data-weight]");
if(weightButtons.length > 0) {
  weightButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "weight",
        button.dataset.weight
      );
      location.href = "aroma-diagnosis-q6.html"
    });
  });
}

//==========
//Q6.甘さ
//==========

const sweetnessButtons = document.querySelectorAll("[data-sweetness]");
if(sweetnessButtons.length > 0) {
  sweetnessButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "sweetness",
        button.dataset.sweetness
      );
      location.href = "diagnosis-result.html"
    });
  });
}

//==========
//診断結果
//==========

const diagnosisResult = document.querySelector("#diagnosisResult")

if(diagnosisResult){

  const caution = localStorage.getItem("caution");
  const time = localStorage.getItem("time");
  const purpose = localStorage.getItem("purpose");
  const lineage = localStorage.getItem("lineage");
  const weight = localStorage.getItem("weight");
  const sweetness = localStorage.getItem("sweetness");

  const loading = document.querySelector("#loading")

  loading.style.display = "none";

  diagnosisResult.innerHTML = `
   <p>${caution}</p>
   <p>${time}</p>
   <p>${purpose}</p>
   <p>${lineage}</p>
   <p>${weight}</p>
   <p>${sweetness}</p>
   `;
}

const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRvf1YZDscRpBB66mxwn40Tqc2rXrtY1iWZu1gOJAifx3ADgGgLfSBzk6yeEdVJfhDMij29Raow4ze_L93TOFhu1LmJ4rAwIPbjMsqWm69ZP6pkDup1I5SsIFbwJu4lm-tiVYci3kZyw2a0HJKmx3WNv42fHI0zwYBUT3-L4kiEgR0E17aKTyjneZA2tYrJcYw3qV8iTgqYhEm60T14UjaAGAJiy_DafzheiHKE-xSKFlOu5eg&lib=MU5vdp4znvY0XJ8J53xZdcCkAf2tFMscx"
async function loadResult(){

  const response = await fetch(API_URL);
  const aromas = await response.json();

  console.log(aromas);
}

loadResult();
