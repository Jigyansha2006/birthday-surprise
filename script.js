let stage = 0;
let yesClicks = 0;
let noClicks = 0;

let content = document.getElementById("content");

window.onload = function() {
  showIntro();
};


function showIntro() {
  content.innerHTML = `<div class="text slide">HIIIIIIIIIIIIIIIIIIIIIIII AYUUUUUUUUUUUSSSSHHHHHHH</div>`;
  setTimeout(showQuestion, 10000);
}

function showQuestion() {
  stage = 1;
  content.innerHTML = `
    <div class="text">which one do you like ?</div>
    <div class="choice-container">
      <img src="website101.jpg" onclick="choose()">
      <img src="website102.jpg" onclick="choose()">
    </div>
    <div class="small-text">choose one quicckkkkk</div>
  `;
}

function choose() {
  stage = 2;

  content.innerHTML = `
    <div id="susPage" style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      text-align:center;
      gap:20px;
    ">
      <div class="text">UMMMMMMMM THAT'S SUS</div>

      <img src="website103.jpg" class="center-img">

      <div class="small-text">CLICK ON THAT MEWWW REAL QUIIIICCCKKKK</div>
    </div>
  `;

  document.getElementById("susPage").addEventListener("click", function() {
    showFinalQuestion();
  });
}


function showFinalQuestion() {
  content.innerHTML = `
    <div class="text">so do you want to go out with me ?</div>
    <button onclick="yesOption(event)">yes</button>
    <button onclick="noOption(event)">no</button>
  `;
}function yesOption(event) {
  event.stopPropagation();
  yesClicks++;

  if(yesClicks === 1) {
    content.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:15px;
    ">
      <div class="text">so do you want to go out with me ?</div>

      <div>
        <button onclick="yesOption(event)">yes</button>
        <button onclick="noOption(event)">no</button>
      </div>

      <img src="website106.jpg" class="center-img">

      <div class="small-text">ummmm i didnt expect this one tho</div>
    </div>
    `;
  }
  else if(yesClicks === 2) {
     content.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:15px;
    ">
      <img src="website104.jpg" class="center-img">
      <div class="small-text">omziiiiii i knew it alreadyyyy</div>
    </div>
  `;
  setTimeout(showEmptyClickPage, 2000); }
}

function noOption(event) {
  event.stopPropagation();
  noClicks++;

  if(noClicks === 1) {
    content.innerHTML = `
      <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:15px;
    ">
      <div class="text">so do you want to go out with me ?</div>

      <div>
        <button onclick="yesOption(event)">yes</button>
        <button onclick="noOption(event)">no</button>
      </div>

      <img src="website107.jpg" class="center-img">

      <div class="small-text">yo why did yu say no ngaa whyyyyyy (CLICK ON YES MF)</div>
    </div>
    `;
  }
  else if(noClicks === 2) {
   content.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:15px;
    ">
      <img src="website108.jpg" class="center-img">
      <div class="small-text">so yu really hate me atp, THEEKAY VRO 🥺 ITS FINE 👉🏻💔  </div>
    </div>
  `;
  setTimeout(showEmptyClickPage, 2000);
  }
}

function showEmptyClickPage() {
  content.innerHTML = `
    <div id="finalQuestionPage" style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:20px;
    ">
      <div class="text">Last time… will you go out with me?</div>
      <button onclick="finalYesClick()">YES </button>                                                      <div class="small-text">CLICK ON YES NIggER (YU DONT HAVE ANY OTHER OPTION)</div>
    </div>
  `;
}
  function finalYesClick() {
  content.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
    ">
      <img src="website105.jpg" class="center-img">
    </div>
  `;

  
  setTimeout(() => {
    content.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        gap:20px;
      ">
        <img src="website109.jpg" class="center-img">
        <div class="text">JOKIIINNGGG KRRII THII YRRR👉🏻🤣 </div>
      </div>
    `;                                                                                         setTimeout(() => {
      content.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          gap:20px;
        ">
          <div class="text">HHHAAAPPYY BIIRRTHHDAAAYY AYUSHHHCUNTTT HIZRAAAA 🎀 </div>
        </div>
      `;
    }, 2000); 
  }, 1000); 
}
  
