const $ = id =>
  document.getElementById(id);


const random = array =>
  array[
    Math.floor(
      Math.random() *
      array.length
    )
  ];


const shuffle = array =>
  [...array]
    .sort(
      () =>
      Math.random() - 0.5
    );


const TOTAL_ROUNDS = 12;


let round = 1;

let stars = 0;

let talkScore = 0;

let answered = false;

let spoken = false;

let currentScenario;


let signalA = "red";

let signalB = "green";

let switchMode = "straight";


let usedTypes = [];


const trains = [
  "SRT",
  "무궁화호"
];


const stations = [
  "서울역",
  "대전역",
  "부산역"
];



function otherTrain(train) {

  return train === "SRT"
    ? "무궁화호"
    : "SRT";

}



function iconFor(name) {

  if (name === "SRT") {
    return "🚄";
  }

  if (name === "무궁화호") {
    return "🚂";
  }

  return "🎛️";

}



/* =======================================
   신호
======================================= */

function setSignal(
  name,
  state
) {

  const signal =
    $(
      name === "A"
        ? "signalA"
        : "signalB"
    );


  const button =
    $(
      name === "A"
        ? "signalABtn"
        : "signalBBtn"
    );


  signal.className =
    `rail-signal signal-${name.toLowerCase()} ${state}`;


  button.className =
    `rail-button signal-control ${state}`;


  button.innerHTML = `
    <span>
      🚦
    </span>

    <span>
      신호 ${name}
    </span>

    <strong>
      ${
        state === "red"
          ? "🔴"
          : state === "yellow"
          ? "🟡"
          : "🟢"
      }
    </strong>
  `;


  if (name === "A") {

    signalA = state;

  }

  else {

    signalB = state;

  }

}



/* =======================================
   분기기
======================================= */

function updateSwitch() {

  $("switchText")
    .textContent =

    switchMode === "straight"
      ? "직진"
      : "옆선로";

}



/* =======================================
   초기 위치
======================================= */

function resetWorld() {

  $("srt")
    .style.left =
    "4vw";


  $("srt")
    .style.top =
    "20.4vh";


  $("mugunghwa")
    .style.left =
    "76vw";


  $("mugunghwa")
    .style.top =
    "40.4vh";


  setSignal(
    "A",
    random(
      [
        "red",
        "green"
      ]
    )
  );


  setSignal(
    "B",
    random(
      [
        "red",
        "green"
      ]
    )
  );


  switchMode =
    random(
      [
        "straight",
        "branch"
      ]
    );


  updateSwitch();

}



/* =======================================
   대화 표시
======================================= */

function renderDialogue(
  dialogue
) {

  const list =
    $("dialogueList");


  list.innerHTML = "";


  dialogue.forEach(
    ([name, text]) => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "dialogue-row";


      row.innerHTML = `
        <div class="dialogue-icon">
          ${iconFor(name)}
        </div>

        <div>
          <div class="dialogue-name">
            ${name}
          </div>

          <div class="dialogue-text">
            ${text}
          </div>
        </div>
      `;


      list.appendChild(
        row
      );

    }
  );

}



/* =======================================
   터널
======================================= */

function tunnelScenario() {

  const first =
    random(trains);


  const second =
    otherTrain(first);


  return {

    type:
      "🚇 터널",

    badge:
      "🚇 단선 터널 통과",


    dialogue: [

      [
        first,
        "관제사님! 제가 터널 앞에 먼저 도착했어요."
      ],

      [
        second,
        "저도 반대편에서 터널 앞에 도착했어요."
      ]

    ],


    question:
      "한 대만 들어갈 수 있는 터널이에요. 어떻게 하면 좋을까요?",


    correct:
      `${first}가 먼저 지나가고 ${second}는 기다려요.`,


    wrong: [

      "두 열차가 동시에 들어가요.",

      "둘 다 빨리 달려요.",

      "아무 말도 하지 않아요."

    ],


    speak:
      `${second} 기관사님, 잠시 기다려 주세요. ${first}가 먼저 갈게요.`,


    action: {

      type:
        "move",

      train:
        first

    }

  };

}



/* =======================================
   신호
======================================= */

function signalScenario() {

  const train =
    random(trains);


  const signal =
    random(
      [
        "A",
        "B"
      ]
    );


  setSignal(
    signal,
    "red"
  );


  return {

    type:
      "🚦 신호",

    badge:
      `🚦 신호 ${signal} 확인`,


    dialogue: [

      [
        train,
        `관제사님, 신호 ${signal}가 빨간색이에요.`
      ]

    ],


    question:
      `${train}는 어떻게 해야 할까요?`,


    correct:
      "신호가 초록색이 될 때까지 기다려요.",


    wrong: [

      "빨간불인데 출발해요.",

      "신호를 보지 않아요.",

      "더 빨리 달려요."

    ],


    speak:
      `${train} 기관사님, 빨간 신호예요. 잠시 기다려 주세요.`,


    action: {

      type:
        "signal",

      signal

    }

  };

}



/* =======================================
   역
======================================= */

function stationScenario() {

  const train =
    random(trains);


  const station =
    random(stations);


  return {

    type:
      "🚉 역",

    badge:
      `🚉 ${station}`,


    dialogue: [

      [
        train,
        `${station}에서 아직 승객이 타고 있어요.`
      ]

    ],


    question:
      "열차는 언제 출발해야 할까요?",


    correct:
      "승객이 다 타고 문이 닫힌 뒤 출발해요.",


    wrong: [

      "문이 열린 채 출발해요.",

      "승객이 타는 중에 출발해요.",

      "바로 빠르게 출발해요."

    ],


    speak:
      `${train} 기관사님, 문이 닫히면 출발해 주세요.`,


    action: {

      type:
        "move",

      train

    }

  };

}



/* =======================================
   차례 지키기
======================================= */

function turnScenario() {

  const first =
    random(trains);


  const second =
    otherTrain(first);


  return {

    type:
      "💬 차례 지키기",

    badge:
      "📻 두 기관사가 동시에 말해요",


    dialogue: [

      [
        first,
        "관제사님! 제가 먼저 말할게요!"
      ],

      [
        second,
        "저도 질문이 있어요!"
      ]

    ],


    question:
      "두 기관사가 동시에 말하면 어떻게 할까요?",


    correct:
      `${first}의 말을 먼저 듣고 그 다음 ${second}의 말을 들어요.`,


    wrong: [

      "둘 다 계속 동시에 말해요.",

      "둘 다 말하지 못하게 해요.",

      "아무 말도 듣지 않아요."

    ],


    speak:
      `${first} 기관사님 먼저 말씀하세요. 그 다음 ${second} 기관사님 말씀을 들을게요.`,


    action: {

      type:
        "none"

    }

  };

}



/* =======================================
   다시 묻기
======================================= */

function askAgainScenario() {

  const train =
    random(trains);


  return {

    type:
      "👂 다시 묻기",

    badge:
      "📻 무전이 잘 안 들렸어요",


    dialogue: [

      [
        train,
        "관제사님, 방금 제가 말한 내용 들으셨나요?"
      ]

    ],


    question:
      "말을 잘 못 들었어요. 어떻게 하면 좋을까요?",


    correct:
      "다시 한번 말해 달라고 해요.",


    wrong: [

      "들은 척해요.",

      "아무 말이나 대답해요.",

      "다른 이야기를 해요."

    ],


    speak:
      `${train} 기관사님, 다시 한번 말해 주세요.`,


    action: {

      type:
        "none"

    }

  };

}



/* =======================================
   정보 알려주기
======================================= */

function informationScenario() {

  const first =
    random(trains);


  const second =
    otherTrain(first);


  const issue =
    random(
      [
        "터널 안에 다른 열차가 있어요",

        "앞 신호가 빨간색이에요",

        "앞 역에서 승객이 타고 있어요"
      ]
    );


  return {

    type:
      "📢 알려주기",

    badge:
      "📢 중요한 철도 정보",


    dialogue: [

      [
        first,
        `저는 "${issue}"라는 안내를 들었어요.`
      ],

      [
        second,
        "저는 그 내용을 아직 몰라요."
      ]

    ],


    question:
      `${second} 기관사에게 어떻게 해야 할까요?`,


    correct:
      "중요한 내용을 다시 알려줘요.",


    wrong: [

      "알고 있을 거라고 생각해요.",

      "아무 말도 하지 않아요.",

      "다른 이야기만 해요."

    ],


    speak:
      `${second} 기관사님, ${issue}`,


    action: {

      type:
        "none"

    }

  };

}



/* =======================================
   분기기
======================================= */

function switchScenario() {

  const train =
    random(trains);


  const direction =
    random(
      [
        "직진",
        "옆선로"
      ]
    );


  return {

    type:
      "🔀 분기기",

    badge:
      "🔀 선로를 골라요",


    dialogue: [

      [
        train,
        `관제사님, 저는 ${direction} 방향으로 가야 해요.`
      ]

    ],


    question:
      `${train}가 가야 하는 방향은 어디일까요?`,


    correct:
      `분기기를 ${direction}으로 바꿔요.`,


    wrong: [

      direction === "직진"
        ? "분기기를 옆선로로 바꿔요."
        : "분기기를 직진으로 바꿔요.",

      "분기기를 확인하지 않아요.",

      "아무 선로나 가요."

    ],


    speak:
      `${train} 기관사님, 선로를 확인했어요. 출발하세요.`,


    action: {

      type:
        "switch",

      direction,

      train

    }

  };

}



/* =======================================
   종합 상황
======================================= */

function combinedScenario() {

  const train =
    random(trains);


  const signal =
    random(
      [
        "A",
        "B"
      ]
    );


  setSignal(
    signal,
    "red"
  );


  return {

    type:
      "🧩 종합 관제",

    badge:
      "🧩 신호 + 터널",


    dialogue: [

      [
        train,
        `신호 ${signal}가 빨간색이에요.`
      ],

      [
        "관제센터",
        "터널 안에도 다른 열차가 있어요."
      ]

    ],


    question:
      "지금 가장 먼저 해야 하는 일은 무엇일까요?",


    correct:
      "열차를 멈추고 안전해질 때까지 기다려요.",


    wrong: [

      "터널로 바로 들어가요.",

      "빨간 신호를 지나가요.",

      "속도를 더 높여요."

    ],


    speak:
      `${train} 기관사님, 지금은 멈춰 주세요.`,


    action: {

      type:
        "signal",

      signal

    }

  };

}



/* =======================================
   시나리오 목록
======================================= */

const scenarios = [

  tunnelScenario,

  signalScenario,

  stationScenario,

  turnScenario,

  askAgainScenario,

  informationScenario,

  switchScenario,

  combinedScenario

];



function getScenario() {

  if (
    usedTypes.length >=
    scenarios.length
  ) {

    usedTypes = [];

  }


  let number;


  do {

    number =
      Math.floor(
        Math.random() *
        scenarios.length
      );

  }

  while (
    usedTypes.includes(
      number
    )
  );


  usedTypes.push(
    number
  );


  return scenarios[number]();

}



/* =======================================
   라운드 렌더링
======================================= */

function renderScenario() {

  answered = false;

  spoken = false;


  resetWorld();


  currentScenario =
    getScenario();


  $("roundText")
    .textContent =
    round;


  $("mapBadge")
    .textContent =
    currentScenario.badge;


  $("missionType")
    .textContent =
    currentScenario.type;


  $("question")
    .textContent =
    currentScenario.question;


  $("feedback")
    .textContent =
    "기관사의 이야기를 잘 들어보세요.";


  $("speakPrompt")
    .textContent =
    "정답을 고른 뒤 직접 말해봐요.";


  $("speakDoneBtn")
    .disabled =
    true;


  $("speakDoneBtn")
    .textContent =
    "말했어요!";


  $("nextBtn")
    .disabled =
    true;


  renderDialogue(
    currentScenario.dialogue
  );


  const choices =
    shuffle(
      [
        currentScenario.correct,
        ...currentScenario.wrong
      ]
    );


  $("choices")
    .innerHTML =
    "";


  choices.forEach(
    text => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "choice";


      button.textContent =
        text;


      button.onclick =
        () =>
        selectAnswer(
          button,
          text
        );


      $("choices")
        .appendChild(
          button
        );

    }
  );

}



/* =======================================
   정답 선택
======================================= */

function selectAnswer(
  button,
  text
) {

  if (answered) {
    return;
  }


  answered = true;


  const buttons =
    [
      ...document.querySelectorAll(
        ".choice"
      )
    ];


  if (
    text ===
    currentScenario.correct
  ) {

    button
      .classList
      .add(
        "correct"
      );


    stars += 2;


    $("feedback")
      .textContent =
      "✅ 좋아요! 안전한 선택이에요.";

  }

  else {

    button
      .classList
      .add(
        "wrong"
      );


    const correctButton =
      buttons.find(
        item =>
          item.textContent ===
          currentScenario.correct
      );


    if (correctButton) {

      correctButton
        .classList
        .add(
          "correct"
        );

    }


    stars += 1;


    $("feedback")
      .textContent =
      "💡 초록색 답을 다시 한번 볼까요?";

  }


  $("starText")
    .textContent =
    stars;


  $("speakPrompt")
    .textContent =
    currentScenario.speak;


  $("speakDoneBtn")
    .disabled =
    false;


  runAction(
    currentScenario.action
  );

}



/* =======================================
   화면 동작
======================================= */

function runAction(
  action
) {

  if (
    action.type ===
    "move"
  ) {

    if (
      action.train === "SRT"
    ) {

      $("srt")
        .style.left =
        "64vw";

    }

    else {

      $("mugunghwa")
        .style.left =
        "18vw";

    }

  }


  if (
    action.type ===
    "signal"
  ) {

    setTimeout(
      () => {

        setSignal(
          action.signal,
          "green"
        );

      },
      700
    );

  }


  if (
    action.type ===
    "switch"
  ) {

    switchMode =
      action.direction === "직진"
        ? "straight"
        : "branch";


    updateSwitch();


    if (
      action.train === "SRT"
    ) {

      $("srt")
        .style.left =
        "61vw";


      if (
        switchMode === "branch"
      ) {

        $("srt")
          .style.top =
          "30vh";

      }

    }

    else {

      $("mugunghwa")
        .style.left =
        "58vw";


      if (
        switchMode === "branch"
      ) {

        $("mugunghwa")
          .style.top =
          "32vh";

      }

    }

  }

}



/* =======================================
   말하기 완료
======================================= */

$("speakDoneBtn")
.onclick =
function() {

  if (spoken) {
    return;
  }


  spoken = true;


  talkScore += 2;


  $("talkText")
    .textContent =
    talkScore;


  $("speakDoneBtn")
    .textContent =
    "👍 잘했어요";


  $("speakDoneBtn")
    .disabled =
    true;


  $("nextBtn")
    .disabled =
    false;


  $("feedback")
    .textContent =
    "🌟 좋아요! 다음 운행으로 가요.";

};



/* =======================================
   다음 상황
======================================= */

$("nextBtn")
.onclick =
function() {

  if (
    round >= TOTAL_ROUNDS
  ) {

    finishGame();

    return;

  }


  round++;


  renderScenario();

};



/* =======================================
   직접 신호 조작
======================================= */

$("signalABtn")
.onclick =
function() {

  setSignal(
    "A",
    signalA === "red"
      ? "green"
      : "red"
  );

};



$("signalBBtn")
.onclick =
function() {

  setSignal(
    "B",
    signalB === "red"
      ? "green"
      : "red"
  );

};



/* =======================================
   직접 분기 조작
======================================= */

$("switchBtn")
.onclick =
function() {

  switchMode =
    switchMode === "straight"
      ? "branch"
      : "straight";


  updateSwitch();

};



/* =======================================
   SRT 직접 출발
======================================= */

$("departSrtBtn")
.onclick =
function() {

  $("srt")
    .style.left =

    $("srt").style.left === "64vw"
      ? "4vw"
      : "64vw";

};



/* =======================================
   무궁화 직접 출발
======================================= */

$("departMugBtn")
.onclick =
function() {

  $("mugunghwa")
    .style.left =

    $("mugunghwa").style.left === "18vw"
      ? "76vw"
      : "18vw";

};



/* =======================================
   게임 종료
======================================= */

function finishGame() {

  $("resultText")
    .innerHTML = `
      ⭐ 안전운행 점수
      <b>${stars}</b>
      <br><br>

      💬 관제 대화 점수
      <b>${talkScore}</b>
    `;


  $("finishModal")
    .classList
    .remove(
      "hidden"
    );

}



/* =======================================
   재시작
======================================= */

$("restartBtn")
.onclick =
function() {

  round = 1;

  stars = 0;

  talkScore = 0;

  usedTypes = [];


  $("starText")
    .textContent =
    0;


  $("talkText")
    .textContent =
    0;


  $("finishModal")
    .classList
    .add(
      "hidden"
    );


  renderScenario();

};



/* 게임 시작 */

renderScenario();
