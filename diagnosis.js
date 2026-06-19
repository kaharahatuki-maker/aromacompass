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
    });
  });
}

//==========
//Q2.使用時間
//==========

//==========
//Q3.目的
//==========

//==========
//Q4.香りの系統
//==========

//==========
//Q5.重さ
//==========

//==========
//Q6.甘さ
//==========

//==========
//診断結果
//==========
