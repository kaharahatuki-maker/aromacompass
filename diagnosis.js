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

const cautionButtons = document.querySelectorAll("[data-time]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
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

const cautionButtons = document.querySelectorAll("[data-purpose]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
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

const cautionButtons = document.querySelectorAll("[data-lineage]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
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

const cautionButtons = document.querySelectorAll("[data-weight]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
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

const cautionButtons = document.querySelectorAll("[data-sweetness]");
if(cautionButtons.length > 0) {
  cautionButtons.forEach(button => {
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
//診断結果
//==========
