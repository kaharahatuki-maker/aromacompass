document.querySelector("#morning").addEventListener("click", function () {
  location.href = "aroma-diagnosis-q2.html";
});

//■今日のピックアップ結果表示
//本日のピックアップデータ取得用URL
const picIp_API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQEbFU-pIKCbmVlADM0YotnkooiZ4dUOehPJGcI2OKFA2mdembQgHHU4Lkz4U-m2B3nRWZgHm5L2B_J_CX9nHgEHt-UUPAC2jA1EfEkV86aI9VLUtnDAS4B9-otLXsNlD0fXAGlykL4EDSTvTDjoU6gFhAFKG0-AOcUNnBH3kzK7lTCf8dNdUGUjt_FnSum6qqk5OVEHqVnH7bh-iiNpKYAgzzR97QB9fL3SqhqQ_0ucskTthizggi6Ni7atQ6Qg1btxbp7OCoV_V5vuKX6q9PfkbtBiA&lib=MnHJmmCJIrb3izUs2fkndKSkAf2tFMscx"

//【質問ページ】
const questionbuttons = document.querySelectorAll("{[data-question]");
if(questionbuttons.length > 0){
  questionbuttons.forEach("click",function(){
    const questionId = this.dataset.question;

    //選択した番号を保存
    localStorage.setItem("questionId",questionId);

    //結果ページへ移動
    location.href = "pick-up-result.html";
  });
 });
}

//【結果ページ】
const pickUpResult = document.querySelector(#pickUpResult);
if(pickUpResult){
  async function loadResult(){
    const questionId = localStorage.getItem("questionId");
    const response = await fetch(picIp_API_URL);
    const data = await resoinse.json();

    //questionIdが一致するデータだけ取得
    const results = data.filter(item =>
      item.question_id == questionId
                               );
    //ランダムで1つ選ぶ
    const randomResult = 
      results[Math.floor(Math.random() * results.length)];

    pickUpResult.innerHTML=`
    <h2>${randomResult.aroma_name}</h2>
    <p>${randomResult.description}</p>
    <p>${randomResult.message}</p>
    `}
  }
loadResult();
}
