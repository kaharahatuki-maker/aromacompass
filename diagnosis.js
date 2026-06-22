//==========
//Q1.使用時間
//==========

const timeButtons = document.querySelectorAll("[data-time]");
if(timeButtons.length > 0) {
  timeButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "time",
        button.dataset.time
      );
      location.href = "aroma-diagnosis-q2.html"
    });
  });
}

//==========
//Q2.目的
//==========

const purposeButtons = document.querySelectorAll("[data-purpose]");
if(purposeButtons.length > 0) {
  purposeButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "purpose",
        button.dataset.purpose
      );
      location.href = "aroma-diagnosis-q3.html"
    });
  });
}

//==========
//Q3.香りの系統
//==========

const lineageButtons = document.querySelectorAll("[data-lineage]");
if(lineageButtons.length > 0) {
  lineageButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "lineage",
        button.dataset.lineage
      );
      location.href = "aroma-diagnosis-q4.html"
    });
  });
}

//==========
//Q4.重さ
//==========

const weightButtons = document.querySelectorAll("[data-weight]");
if(weightButtons.length > 0) {
  weightButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "weight",
        button.dataset.weight
      );
      location.href = "aroma-diagnosis-q5.html"
    });
  });
}

//==========
//Q5.甘さ
//==========

const sweetnessButtons = document.querySelectorAll("[data-sweetness]");
if(sweetnessButtons.length > 0) {
  sweetnessButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "sweetness",
        button.dataset.sweetness
      );
      location.href = "aroma-diagnosis-q6.html"
    });
  });
}

//==========
//Q6.配慮事項
//==========

const cautionButtons = document.querySelectorAll("[data-caution]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem(
        "caution",
        button.dataset.caution
      );
      location.href = "diagnosis-result.html"
    });
  });
}

//==========
//診断結果
//==========

const API_URL = "https://script.google.com/macros/s/AKfycbxH4SzCvnLHeG15g0zy148MRLU0BMdQxd_wGCjIETgisLtEIymvbxV8hJzXrDO8Awf8/exec"
const caution = localStorage.getItem("caution");
const time = localStorage.getItem("time");
const purpose = localStorage.getItem("purpose");
const lineage = localStorage.getItem("lineage");
const weight = localStorage.getItem("weight");
const sweetness = localStorage.getItem("sweetness");

async function loadResult(){
  const response = await fetch(API_URL);
  const aromas = await response.json();

  const filteredAromas = aromas.filter(aroma => {
    if(caution && aroma.caution.includes(caution)){
      return false;
    }

    if(time && !aroma.time.includes(time)){
      return false;
    }
    
    if(purpose && !aroma.purpose.includes(purpose)){
      return false;
    }

    if(lineage && !aroma.lineage.includes(lineage)){
      return false;
    }

    if(weight && !aroma.weight.includes(weight)){
      return false;
    }

    if(sweetness && !aroma.sweetness.includes(sweetness)){
      return false;
    }

    return true;
});

  console.log(filteredAromas);
}

const diagnosisResult = document.querySelector("#diagnosisResult")

if(diagnosisResult){
  const loading = document.querySelector("#loading");
if(loading){
  loading.style.display = "none";
  }

  diagnosisResult.innerHTML = `
   <p>${caution}</p>
   <p>${time}</p>
   <p>${purpose}</p>
   <p>${lineage}</p>
   <p>${weight}</p>
   <p>${sweetness}</p>
   `;

  loadResult();
}


