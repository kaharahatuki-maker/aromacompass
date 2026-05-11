document.getElementById("morning").addEventListener("click", function () {
  location.href = "aroma-diagnosis-q2.html";
});

const resultArea = document.getElementById("pick-up-result");
const buttons = document.querySelectorAll("button")
const API_URL = "https://script.google.com/macros/s/AKfycby2iNLCwQxlcjG2j98dx6M2p4u31c7MXPsSAsMFgVn1hXrcIDuNrefNl3v6gOTauWYJ/exec";

buttons.forEach(button) => {
  button.addEventListener("click",async () => {
    const questionId = Number(button.dataset.question);

    try{

      const response = await fetch(APL_URL);
      const data = await response.json();

      const filtered = data.filter(
        (item) => item.question_id === questionId
      );

      const randomItem =
        filtered[math.floor(math.random() * filtered.length)];

      localStorage.setItem(
        "aromaResult"
        JSON.stringify(rondomItem)
      );

      location.href = "pich-up-result.html";
    }catch(error){
      console.error(error);
      alert("データ取得に失敗しました");
    }
  });
});
