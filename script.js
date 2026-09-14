document.addEventListener(
  "DOMContentLoaded",
  function () {

    /* ================================================= */
    /* DOM */
    /* ================================================= */

    const startGameBtn =
      document.getElementById("startGameBtn");

    const startOverlay =
      document.getElementById("startOverlay");

    const playerTrain =
      document.getElementById("playerTrain");

    const obstacle =
      document.getElementById("obstacle");

    const obstacleEmoji =
      document.getElementById("obstacleEmoji");

    const upBtn =
      document.getElementById("upBtn");

    const downBtn =
      document.getElementById("downBtn");

    const stopBtn =
      document.getElementById("stopBtn");

    const hitEffect =
      document.getElementById("hitEffect");

    const successEffect =
      document.getElementById("successEffect");

    const lifeText =
      document.getElementById("lifeText");

    const scoreText =
      document.getElementById("scoreText");

    const stickerText =
      document.getElementById("stickerText");

    const routeProgress =
      document.getElementById("routeProgress");

    const routeTrain =
      document.getElementById("routeTrain");

    const startStationLabel =
      document.getElementById("startStationLabel");

    const destinationLabel =
      document.getElementById("destinationLabel");

    const tripBadge =
      document.getElementById("tripBadge");

    const distanceBadge =
      document.getElementById("distanceBadge");

    const trainStatusText =
      document.getElementById("trainStatusText");

    const nextObstacleIcon =
      document.getElementById("nextObstacleIcon");

    const nextObstacleText =
      document.getElementById("nextObstacleText");

    const talkMissionText =
      document.getElementById("talkMissionText");


    /* 화용언어 */

    const talkModal =
      document.getElementById("talkModal");

    const talkType =
      document.getElementById("talkType");

    const talkCharacter =
      document.getElementById("talkCharacter");

    const talkIcon =
      document.getElementById("talkIcon");

    const talkTitle =
      document.getElementById("talkTitle");

    const talkQuestion =
      document.getElementById("talkQuestion");

    const talkChoices =
      document.getElementById("talkChoices");

    const talkFeedback =
      document.getElementById("talkFeedback");

    const speakArea =
      document.getElementById("speakArea");

    const speakText =
      document.getElementById("speakText");

    const speakDoneBtn =
      document.getElementById("speakDoneBtn");

    const talkSoundBtn =
      document.getElementById("talkSoundBtn");


    /* 역 */

    const stationModal =
      document.getElementById("stationModal");

    const suseoMissionBtn =
      document.getElementById("suseoMissionBtn");

    const returnModal =
      document.getElementById("returnModal");

    const returnStartBtn =
      document.getElementById("returnStartBtn");


    /* 결과 */

    const resultModal =
      document.getElementById("resultModal");

    const resultAvoid =
      document.getElementById("resultAvoid");

    const resultTalk =
      document.getElementById("resultTalk");

    const resultSticker =
      document.getElementById("resultSticker");

    const stickerReward =
      document.getElementById("stickerReward");

    const restartBtn =
      document.getElementById("restartBtn");


    /* ================================================= */
    /* 등장인물 */
    /* ================================================= */

    const characters = {

      ajun: "👦 아준이",

      ise: "👧 이서",

      kkakkungi: "🧸 까꿍이",

      uncle: "🧔 삼촌",

      aunt: "👩‍🦰 이모",

      dad: "👨 아빠",

      mom: "👩 엄마",

      jinjuGrandma: "👵 진주할머니",

      jinjuGrandpa: "👴 진주할아버지",

      masanGrandpa: "👴 마산할아버지",

      masanGrandma: "👵 마산할머니",

      sihwan: "👦 시환이",

      yena: "👧 예나",

      driver: "👨‍✈️ SRT 기관사",

      stationStaff: "🧑‍💼 역무원"

    };


    /* ================================================= */
    /* 장애물 */
    /* ================================================= */

    const obstacles = [

      {
        icon: "🪨",
        type: "avoid",
        label: "돌"
      },

      {
        icon: "🌳",
        type: "avoid",
        label: "나뭇가지"
      },

      {
        icon: "🚧",
        type: "avoid",
        label: "공사 구간"
      },

      {
        icon: "💧",
        type: "avoid",
        label: "물이 고인 선로"
      },

      {
        icon: "🚆",
        type: "avoid",
        label: "앞 열차"
      },

      {
        icon: "📦",
        type: "avoid",
        label: "선로의 상자"
      },

      {
        icon: "🛒",
        type: "avoid",
        label: "선로의 카트"
      },

      {
        icon: "🔴",
        type: "stop",
        label: "빨간 신호"
      }

    ];


    /* ================================================= */
    /* 화용언어 문제 풀 */
    /* ================================================= */

    const talkPool = [

      /* ----------------------------------------- */
      /* 아준 */
      /* ----------------------------------------- */

      {
        type: "상황 파악",
        character: characters.ajun,
        icon: "🚄",
        title: "아준이가 너무 신났어요",

        question:
          "아준이가 SRT를 보고 너무 신나서 기관사에게 계속 질문하고 있어요. 기관사가 다른 일을 하고 있다면 어떻게 하는 게 좋을까요?",

        choices: [
          "계속 질문한다",
          "기관사가 일을 마칠 때까지 기다린다",
          "더 큰 소리로 부른다",
          "기관사 옆으로 간다"
        ],

        answer: 1,

        feedback:
          "맞아요! 상대방이 지금 이야기할 수 있는 상황인지 살펴보는 것도 중요해요.",

        speech:
          "기관사 아저씨, 일 끝나면 질문해도 돼요?"
      },


      /* ----------------------------------------- */
      /* 이서 */
      /* ----------------------------------------- */

      {
        type: "감정 이해",
        character: characters.ise,
        icon: "😢",
        title: "이서가 창가에 앉고 싶어요",

        question:
          "이서가 창가에 앉고 싶었는데 다른 사람이 먼저 앉았어요. 이서는 어떤 기분일 수 있을까요?",

        choices: [
          "속상할 수 있다",
          "무조건 화가 난다",
          "아무 느낌이 없다",
          "기차가 싫어진다"
        ],

        answer: 0,

        feedback:
          "맞아요! 원하는 자리에 앉지 못하면 조금 속상할 수 있어요.",

        speech:
          "이서야, 속상했지? 다음에는 창가 자리에 앉아보자."
      },


      {
        type: "질문하기",
        character: characters.ise,
        icon: "🎒",
        title: "이서의 가방",

        question:
          "이서가 “내 가방이 안 보여.”라고 말했어요. 무엇을 먼저 물어보면 좋을까요?",

        choices: [
          "왜 잃어버렸어?",
          "어디에서 마지막으로 봤어?",
          "새로 사면 돼",
          "난 몰라"
        ],

        answer: 1,

        feedback:
          "좋아요! 문제 해결에 필요한 정보를 물어봤어요.",

        speech:
          "이서야, 가방을 어디에서 마지막으로 봤어?"
      },


      /* ----------------------------------------- */
      /* 까꿍이 */
      /* ----------------------------------------- */

      {
        type: "도움 요청",
        character: characters.kkakkungi,
        icon: "🧸",
        title: "까꿍이가 없어졌어요!",

        question:
          "이서가 가장 좋아하는 까꿍이가 좌석에 없어요. 어떻게 하면 좋을까요?",

        choices: [
          "그냥 집에 간다",
          "마지막으로 가지고 있었던 곳부터 찾아본다",
          "이서에게 울지 말라고 한다",
          "새 인형을 산다"
        ],

        answer: 1,

        feedback:
          "맞아요! 잃어버린 물건은 마지막으로 봤던 곳부터 차근차근 찾으면 좋아요.",

        speech:
          "이서야, 까꿍이를 마지막으로 어디에서 봤어?"
      },


      /* ----------------------------------------- */
      /* 엄마 */
      /* ----------------------------------------- */

      {
        type: "질문에 대답",
        character: characters.mom,
        icon: "🎫",
        title: "엄마가 좌석을 물어봐요",

        question:
          "엄마가 “우리 좌석이 어디야?”라고 물었어요. 어떻게 대답하면 좋을까요?",

        choices: [
          "SRT는 빨라",
          "8호차 3A, 3B야",
          "왜 물어봐?",
          "기차는 보라색이야"
        ],

        answer: 1,

        feedback:
          "좋아요! 질문에 필요한 정보를 짧고 정확하게 대답했어요.",

        speech:
          "우리 자리는 8호차 3A와 3B야."
      },


      {
        type: "상황 설명",
        character: characters.mom,
        icon: "🔴",
        title: "왜 기차가 멈췄어요?",

        question:
          "엄마가 “왜 기차가 멈췄어?”라고 물었어요. 앞 신호가 빨간색이라면 어떻게 설명할까요?",

        choices: [
          "몰라",
          "앞 신호가 빨간색이라 안전하게 기다리고 있어",
          "기차가 쉬고 싶대",
          "그냥 기다려"
        ],

        answer: 1,

        feedback:
          "맞아요! 이유를 상대방이 이해하기 쉽게 설명했어요.",

        speech:
          "앞 신호가 빨간색이라 안전하게 기다리고 있어."
      },


      /* ----------------------------------------- */
      /* 아빠 */
      /* ----------------------------------------- */

      {
        type: "대화 이어가기",
        character: characters.dad,
        icon: "🏙️",
        title: "아빠의 서울 이야기",

        question:
          "아빠가 “나는 예전에 서울에서 일한 적이 있어.”라고 말했어요. 어떻게 이어서 말하면 좋을까요?",

        choices: [
          "SRT 최고 속도는...",
          "서울 어디에서 일했어?",
          "그래",
          "나는 기차가 좋아"
        ],

        answer: 1,

        feedback:
          "좋아요! 상대가 이야기한 내용과 연결된 질문을 했어요.",

        speech:
          "아빠, 서울 어디에서 일했어?"
      },


      /* ----------------------------------------- */
      /* 삼촌 */
      /* ----------------------------------------- */

      {
        type: "정중하게 부탁",
        character: characters.uncle,
        icon: "📱",
        title: "삼촌 휴대폰 소리가 커요",

        question:
          "삼촌이 SRT에서 휴대폰 영상을 크게 틀었어요. 주변 사람들이 쳐다봐요.",

        choices: [
          "삼촌 시끄러워!",
          "삼촌, 다른 사람들도 있으니까 소리를 조금 줄여줄래?",
          "휴대폰을 뺏는다",
          "나도 크게 소리낸다"
        ],

        answer: 1,

        feedback:
          "맞아요! 상대방을 공격하지 않고 이유와 함께 부탁했어요.",

        speech:
          "삼촌, 다른 사람들도 있으니까 소리를 조금 줄여줄래?"
      },


      /* ----------------------------------------- */
      /* 이모 */
      /* ----------------------------------------- */

      {
        type: "길 안내",
        character: characters.aunt,
        icon: "🚻",
        title: "이모가 화장실을 찾아요",

        question:
          "이모가 “화장실이 어디야?”라고 물었어요. 어떻게 알려주면 좋을까요?",

        choices: [
          "저쪽",
          "앞으로 가서 오른쪽에 있어",
          "몰라",
          "직접 찾아봐"
        ],

        answer: 1,

        feedback:
          "좋아요! 위치와 방향을 구체적으로 알려줬어요.",

        speech:
          "앞으로 조금 가서 오른쪽에 있어."
      },


      /* ----------------------------------------- */
      /* 진주할머니 */
      /* ----------------------------------------- */

      {
        type: "도움 주기",
        character: characters.jinjuGrandma,
        icon: "🧳",
        title: "진주할머니의 무거운 가방",

        question:
          "진주할머니가 무거운 가방을 들고 힘들어 보여요. 어떻게 하면 좋을까요?",

        choices: [
          "빨리 오라고 한다",
          "할머니, 제가 가방 들어드릴까요?",
          "가방이 왜 무거운지 묻는다",
          "그냥 지나간다"
        ],

        answer: 1,

        feedback:
          "좋아요! 도움이 필요한지 먼저 물어봤어요.",

        speech:
          "할머니, 제가 가방 들어드릴까요?"
      },


      {
        type: "상대 의도 확인",
        character: characters.jinjuGrandma,
        icon: "🗺️",
        title: "진주할머니가 길을 찾아요",

        question:
          "진주할머니가 수서역에서 두리번거리고 있어요. 어떻게 말하면 좋을까요?",

        choices: [
          "저쪽으로 가세요",
          "할머니, 어디로 가세요? 같이 찾아볼게요",
          "역무원에게 물어보세요",
          "몰라요"
        ],

        answer: 1,

        feedback:
          "맞아요! 먼저 어디로 가고 싶은지 물어보는 것이 좋아요.",

        speech:
          "할머니, 어디로 가세요? 같이 찾아볼게요."
      },


      /* ----------------------------------------- */
      /* 진주할아버지 */
      /* ----------------------------------------- */

      {
        type: "다시 설명하기",
        character: characters.jinjuGrandpa,
        icon: "👂",
        title: "진주할아버지가 못 들었어요",

        question:
          "진주할아버지가 “아준아, 잘 못 들었어.”라고 말씀하셨어요. 어떻게 할까요?",

        choices: [
          "아까 말했잖아요",
          "천천히 다시 말해드린다",
          "그냥 넘어간다",
          "더 빠르게 말한다"
        ],

        answer: 1,

        feedback:
          "좋아요! 상대가 못 들었을 때 다시 설명해 주는 것이 좋아요.",

        speech:
          "할아버지, 제가 천천히 다시 말씀드릴게요."
      },


      /* ----------------------------------------- */
      /* 마산할아버지 */
      /* ----------------------------------------- */

      {
        type: "상황 판단",
        character: characters.masanGrandpa,
        icon: "💺",
        title: "마산할아버지 자리",

        question:
          "마산할아버지 자리에 다른 사람이 앉아 있어요. 어떻게 해결하면 좋을까요?",

        choices: [
          "비키라고 크게 말한다",
          "두 사람의 승차권 좌석 번호를 확인한다",
          "먼저 앉은 사람이 주인이다",
          "할아버지가 서서 간다"
        ],

        answer: 1,

        feedback:
          "맞아요! 의견이 다를 때는 먼저 사실을 확인하는 것이 좋아요.",

        speech:
          "두 분 승차권의 좌석 번호를 같이 확인해 볼게요."
      },


      /* ----------------------------------------- */
      /* 마산할머니 */
      /* ----------------------------------------- */

      {
        type: "배려하기",
        character: characters.masanGrandma,
        icon: "😴",
        title: "마산할머니가 주무세요",

        question:
          "마산할머니가 좌석에서 잠들었어요. 아준이가 기차 이야기를 하고 싶다면 어떻게 하면 좋을까요?",

        choices: [
          "할머니를 깨운다",
          "할머니가 일어날 때까지 기다린다",
          "귀 옆에서 말한다",
          "큰 소리로 기차 이야기를 한다"
        ],

        answer: 1,

        feedback:
          "맞아요! 상대방이 쉬고 있다면 기다려주는 것도 배려예요.",

        speech:
          "할머니가 일어나시면 이야기해야겠다."
      },


      /* ----------------------------------------- */
      /* 시환이 */
      /* ----------------------------------------- */

      {
        type: "친구와 대화",
        character: characters.sihwan,
        icon: "🚄",
        title: "시환이는 KTX가 더 좋아요",

        question:
          "아준이는 SRT가 좋고 시환이는 KTX가 더 좋다고 해요. 어떻게 이야기하면 좋을까요?",

        choices: [
          "SRT가 무조건 최고야",
          "시환이는 KTX가 왜 좋아?",
          "KTX는 별로야",
          "더 이상 이야기하지 않는다"
        ],

        answer: 1,

        feedback:
          "좋아요! 좋아하는 것이 달라도 상대방 생각을 물어볼 수 있어요.",

        speech:
          "시환이는 KTX가 왜 좋아?"
      },


      {
        type: "차례 기다리기",
        character: characters.sihwan,
        icon: "🗣️",
        title: "시환이가 이야기 중이에요",

        question:
          "시환이가 학교 이야기를 하고 있는데 아준이에게 기차 이야기가 떠올랐어요.",

        choices: [
          "바로 기차 이야기를 한다",
          "시환이가 말을 끝낼 때까지 기다린다",
          "시환이 말을 끊는다",
          "더 크게 말한다"
        ],

        answer: 1,

        feedback:
          "맞아요! 상대가 말을 끝낼 때까지 기다리는 것이 중요해요.",

        speech:
          "시환아, 이야기 끝나면 나도 하나 말해도 돼?"
      },


      /* ----------------------------------------- */
      /* 예나 */
      /* ----------------------------------------- */

      {
        type: "감정 이해",
        character: characters.yena,
        icon: "😟",
        title: "예나가 걱정하고 있어요",

        question:
          "SRT가 잠깐 멈추자 예나가 창밖을 보며 걱정스러운 표정을 지어요. 어떻게 말하면 좋을까요?",

        choices: [
          "왜 무서워해?",
          "예나야, 걱정돼? 신호 때문에 잠깐 기다리는 거야",
          "아무 말도 하지 않는다",
          "기차는 원래 위험해"
        ],

        answer: 1,

        feedback:
          "좋아요! 상대방의 마음을 살피고 상황을 설명해 줬어요.",

        speech:
          "예나야, 걱정돼? 신호 때문에 잠깐 기다리는 거야."
      },


      {
        type: "같이 해결하기",
        character: characters.yena,
        icon: "🥤",
        title: "예나가 물을 쏟았어요",

        question:
          "예나가 실수로 통로에 물을 쏟았어요. 어떻게 하면 좋을까요?",

        choices: [
          "예나를 혼낸다",
          "미끄러울 수 있으니 사람들에게 알려주고 같이 닦는다",
          "그냥 둔다",
          "다른 자리로 간다"
        ],

        answer: 1,

        feedback:
          "맞아요! 잘못을 따지기보다 먼저 안전하게 해결하는 것이 중요해요.",

        speech:
          "여기 바닥이 미끄러워요. 조심하세요. 같이 닦자."
      },


      /* ----------------------------------------- */
      /* 기관사 */
      /* ----------------------------------------- */

      {
        type: "관제 지시",
        character: characters.driver,
        icon: "📡",
        title: "기관사의 보고",

        question:
          "기관사가 “앞 선로에 공사 구간이 있습니다.”라고 보고했어요.",

        choices: [
          "빨리 지나가세요",
          "속도를 줄이고 다른 선로를 확인해 주세요",
          "알아서 하세요",
          "그냥 기다리세요"
        ],

        answer: 1,

        feedback:
          "맞아요! 상황에 맞는 구체적인 행동을 알려줬어요.",

        speech:
          "속도를 줄이고 다른 선로를 확인해 주세요."
      },


      {
        type: "다시 말하기",
        character: characters.driver,
        icon: "📡",
        title: "무전이 끊겼어요",

        question:
          "기관사가 “관제사님, 마지막 말을 잘 못 들었습니다.”라고 했어요.",

        choices: [
          "아까 말했잖아요",
          "네, 다시 말씀드릴게요",
          "알아서 하세요",
          "아무 말도 하지 않는다"
        ],

        answer: 1,

        feedback:
          "맞아요! 잘 못 들었을 때 다시 설명해 주면 돼요.",

        speech:
          "네, 다시 말씀드릴게요. SRT는 2번 선로로 이동해 주세요."
      },


      /* ----------------------------------------- */
      /* 역무원 */
      /* ----------------------------------------- */

      {
        type: "도움 요청",
        character: characters.stationStaff,
        icon: "🎒",
        title: "분실물을 찾고 싶어요",

        question:
          "아준이가 물건을 잃어버렸어요. 역무원에게 어떻게 말하면 좋을까요?",

        choices: [
          "내 물건 어디 있어요?",
          "죄송하지만 분실물 찾는 것을 도와주실 수 있나요?",
          "빨리 찾아주세요!",
          "물건이 없어졌어요!"
        ],

        answer: 1,

        feedback:
          "좋아요! 상황을 설명하고 정중하게 도움을 요청했어요.",

        speech:
          "죄송하지만 분실물 찾는 것을 도와주실 수 있나요?"
      },


      /* ----------------------------------------- */
      /* 가족 다같이 */
      /* ----------------------------------------- */

      {
        type: "대화 주제",
        character:
          "👦 아준이 · 👧 이서 · 👨 아빠 · 👩 엄마",

        icon: "🍱",

        title: "기차에서 간식을 먹어요",

        question:
          "엄마가 “우리 간식 뭐부터 먹을까?”라고 물었어요. 가장 자연스러운 대답은 무엇일까요?",

        choices: [
          "SRT는 시속 300km...",
          "나는 김밥부터 먹고 싶어. 이서는?",
          "몰라",
          "기차 얘기하자"
        ],

        answer: 1,

        feedback:
          "좋아요! 지금 대화하는 주제에 맞게 대답하고 다른 사람 생각도 물어봤어요.",

        speech:
          "나는 김밥부터 먹고 싶어. 이서는?"
      },


      {
        type: "양보하기",
        character:
          "👦 아준이 · 👧 이서",

        icon: "🪟",

        title: "둘 다 창가에 앉고 싶어요",

        question:
          "아준이와 이서가 둘 다 창가에 앉고 싶어요. 어떻게 해결하면 좋을까요?",

        choices: [
          "먼저 앉는 사람이 계속 앉는다",
          "갈 때와 올 때 번갈아 앉는다",
          "싸워서 결정한다",
          "엄마가 정해준다"
        ],

        answer: 1,

        feedback:
          "맞아요! 두 사람 모두 원하는 것이 있을 때 서로 만족할 방법을 찾을 수 있어요.",

        speech:
          "갈 때는 이서가 앉고, 올 때는 내가 앉을까?"
      },


      {
        type: "칭찬하기",
        character:
          "👦 아준이 · 👧 예나",

        icon: "👏",

        title: "예나가 어려운 퍼즐을 풀었어요",

        question:
          "예나가 기차 퍼즐을 오래 생각해서 완성했어요. 어떻게 말해주면 좋을까요?",

        choices: [
          "그것도 오래 걸렸네",
          "예나야, 끝까지 생각해서 완성했네! 잘했어",
          "나는 더 빨리 할 수 있어",
          "별로 안 어려운데?"
        ],

        answer: 1,

        feedback:
          "좋아요! 결과뿐 아니라 노력한 과정도 칭찬했어요.",

        speech:
          "예나야, 끝까지 생각해서 완성했네! 잘했어."
      },


      {
        type: "사과하기",
        character:
          "👦 아준이 · 👦 시환이",

        icon: "🙇",

        title: "시환이 발을 밟았어요",

        question:
          "아준이가 기차를 보다가 실수로 시환이 발을 밟았어요.",

        choices: [
          "네가 뒤에 있었잖아",
          "시환아 미안해. 괜찮아?",
          "안 아프잖아",
          "아무 말도 하지 않는다"
        ],

        answer: 1,

        feedback:
          "맞아요! 실수했을 때 사과하고 상대가 괜찮은지 확인하면 좋아요.",

        speech:
          "시환아 미안해. 괜찮아?"
      }

    ];


    /* ================================================= */
    /* 셔플 */
    /* ================================================= */

    function shuffleArray(
      array
    ) {

      const copy =
        [...array];


      for (
        let i =
          copy.length - 1;

        i > 0;

        i--
      ) {

        const j =
          Math.floor(
            Math.random() *
            (i + 1)
          );


        [
          copy[i],
          copy[j]
        ] =
        [
          copy[j],
          copy[i]
        ];

      }


      return copy;

    }


    /*
      구간별로 각각 셔플한 문제 큐를 사용.
      한 번 나온 문제는 큐가 다 소진될 때까지
      다시 나오지 않는다.
    */

    let outboundQueue =
      shuffleArray(
        talkPool
      );


    let suseoQueue =
      shuffleArray(
        talkPool
      );


    let returnQueue =
      shuffleArray(
        talkPool
      );


    let usedMissionTitles =
      new Set();


    function getRandomMission(
      source
    ) {

      let queue;


      if (
        source ===
        "outbound"
      ) {

        queue =
          outboundQueue;

      }

      else if (
        source ===
        "suseo"
      ) {

        queue =
          suseoQueue;

      }

      else {

        queue =
          returnQueue;

      }


      /*
        해당 큐가 다 떨어지면
        다시 셔플
      */

      if (
        queue.length === 0
      ) {

        const newQueue =
          shuffleArray(
            talkPool
          );


        if (
          source ===
          "outbound"
        ) {

          outboundQueue =
            newQueue;

          queue =
            outboundQueue;

        }

        else if (
          source ===
          "suseo"
        ) {

          suseoQueue =
            newQueue;

          queue =
            suseoQueue;

        }

        else {

          returnQueue =
            newQueue;

          queue =
            returnQueue;

        }

      }


      /*
        같은 판에서 이미 나왔던 문제라면
        가능하면 다음 문제 선택
      */

      let safety =
        0;


      while (
        queue.length > 1 &&
        usedMissionTitles.has(
          queue[0].title
        ) &&
        safety <
        20
      ) {

        queue.push(
          queue.shift()
        );

        safety++;

      }


      const mission =
        queue.shift();


      usedMissionTitles.add(
        mission.title
      );


      return mission;

    }


    /* ================================================= */
    /* 상태 */
    /* ================================================= */

    let running =
      false;

    let paused =
      true;

    let direction =
      "outbound";

    let playerLane =
      1;

    let lives =
      3;

    let score =
      0;

    let stickers =
      0;

    let progress =
      0;

    let distance =
      0;

    let obstacleActive =
      false;

    let obstacleX =
      0;

    let obstacleLane =
      1;

    let currentObstacle =
      null;

    let stopped =
      false;

    let avoidedCount =
      0;

    let talkSolved =
      0;

    let currentTalkMission =
      null;

    let currentTalkSource =
      "";

    let suseoMissionCount =
      0;

    let requiredSuseoMissions =
      4;

    let outboundTalkCount =
      0;

    let returnTalkCount =
      0;

    let lastFrame =
      performance.now();

    let timeSinceObstacle =
      0;

    let talkOpening =
      false;


    /* ================================================= */
    /* 시작 */
    /* ================================================= */

    function startGame() {

      startOverlay.classList.add(
        "hidden"
      );


      running =
        true;


      paused =
        false;


      direction =
        "outbound";


      trainStatusText.textContent =
        "수서역으로 운행 중";


      talkMissionText.textContent =
        "운행 중";


      updateRouteLabels();

    }


    /* ================================================= */
    /* 선로 변경 */
    /* ================================================= */

    function moveUp() {

      if (
        paused ||
        !running
      ) {

        return;

      }


      if (
        playerLane >
        0
      ) {

        playerLane--;

        updatePlayerLane();

      }

    }


    function moveDown() {

      if (
        paused ||
        !running
      ) {

        return;

      }


      if (
        playerLane <
        2
      ) {

        playerLane++;

        updatePlayerLane();

      }

    }


    function updatePlayerLane() {

      playerTrain.classList.remove(
        "lane-position-0",
        "lane-position-1",
        "lane-position-2"
      );


      playerTrain.classList.add(
        "lane-position-" +
        playerLane
      );

    }


    /* ================================================= */
    /* 정지 */
    /* ================================================= */

    function stopTrain() {

      if (
        paused ||
        !running
      ) {

        return;

      }


      stopped =
        true;


      trainStatusText.textContent =
        "🛑 정지";


      playerTrain.style.transform =
        "scale(.96)";


      setTimeout(
        function () {

          stopped =
            false;


          playerTrain.style.transform =
            "scale(1)";


          if (
            running &&
            !paused
          ) {

            trainStatusText.textContent =
              direction ===
              "outbound"

                ? "수서역으로 운행 중"

                : "창원중앙역으로 운행 중";

          }

        },
        1200
      );

    }


    /* ================================================= */
    /* 장애물 */
    /* ================================================= */

    function spawnObstacle() {

      if (
        obstacleActive ||
        paused ||
        !running
      ) {

        return;

      }


      obstacleActive =
        true;


      currentObstacle =
        obstacles[
          Math.floor(
            Math.random() *
            obstacles.length
          )
        ];


      obstacleLane =
        Math.floor(
          Math.random() *
          3
        );


      obstacleX =
        window.innerWidth +
        100;


      obstacleEmoji.textContent =
        currentObstacle.icon;


      obstacle.className =
        "obstacle lane-obstacle-" +
        obstacleLane;


      obstacle.style.left =
        obstacleX +
        "px";


      nextObstacleIcon.textContent =
        currentObstacle.icon;


      nextObstacleText.textContent =
        currentObstacle.type ===
        "stop"

          ? "정지!"

          : "피하기!";

    }


    function resolveObstacle() {

      obstacleActive =
        false;


      obstacle.classList.add(
        "hidden"
      );


      nextObstacleIcon.textContent =
        "👀";


      nextObstacleText.textContent =
        "안전";


      timeSinceObstacle =
        0;

    }


    /* ================================================= */
    /* 판정 */
    /* ================================================= */

    function checkObstacle() {

      if (
        !obstacleActive
      ) {

        return;

      }


      const trainRect =
        playerTrain
          .getBoundingClientRect();


      const obstacleRect =
        obstacle
          .getBoundingClientRect();


      const overlap =
        obstacleRect.left <
        trainRect.right &&

        obstacleRect.right >
        trainRect.left;


      if (
        overlap
      ) {


        /*
          빨간 신호는
          같은 선로에서 정지하면 성공
        */

        if (
          currentObstacle.type ===
          "stop"
        ) {


          if (
            obstacleLane ===
            playerLane
          ) {


            if (
              stopped
            ) {

              successfulAvoid();

            }

            else {

              hitObstacle();

            }


            resolveObstacle();

            return;

          }

        }


        /*
          일반 장애물
        */

        else {


          if (
            obstacleLane ===
            playerLane
          ) {

            hitObstacle();

            resolveObstacle();

            return;

          }

        }

      }


      /*
        지나갔으면 성공
      */

      if (
        obstacleRect.right <
        trainRect.left -
        20
      ) {

        successfulAvoid();

        resolveObstacle();

      }

    }


    /* ================================================= */
    /* 성공 */
    /* ================================================= */

    function successfulAvoid() {

      avoidedCount++;


      score +=
        10;


      scoreText.textContent =
        score;


      successEffect.classList.remove(
        "hidden"
      );


      setTimeout(
        function () {

          successEffect.classList.add(
            "hidden"
          );

        },
        600
      );


      /*
        기존 3회에서 2회로 변경.
        훨씬 다양한 대화 상황 등장.
      */

      if (
        avoidedCount %
        2 ===
        0
      ) {


        if (
          direction ===
          "outbound"
        ) {

          outboundTalkCount++;


          setTimeout(
            function () {

              tryOpenRandomMission(
                "outbound"
              );

            },
            450
          );

        }


        else {

          returnTalkCount++;


          setTimeout(
            function () {

              tryOpenRandomMission(
                "return"
              );

            },
            450
          );

        }

      }

    }


    /* ================================================= */
    /* 충돌 */
    /* ================================================= */

    function hitObstacle() {

      lives--;


      if (
        lives <
        0
      ) {

        lives =
          0;

      }


      lifeText.textContent =
        lives;


      hitEffect.classList.remove(
        "hidden"
      );


      playerTrain.style.transform =
        "translateX(-8px) rotate(-3deg)";


      setTimeout(
        function () {

          hitEffect.classList.add(
            "hidden"
          );


          playerTrain.style.transform =
            "translateX(0) rotate(0)";

        },
        550
      );


      if (
        lives ===
        0
      ) {

        paused =
          true;


        trainStatusText.textContent =
          "🔧 정비팀 출동";


        setTimeout(
          function () {

            lives =
              2;


            lifeText.textContent =
              lives;


            trainStatusText.textContent =
              "✅ 정비 완료";


            setTimeout(
              function () {

                paused =
                  false;


                trainStatusText.textContent =
                  direction ===
                  "outbound"

                    ? "수서역으로 운행 중"

                    : "창원중앙역으로 운행 중";

              },
              600
            );

          },
          900
        );

      }

    }


    /* ================================================= */
    /* 랜덤 문제 호출 */
    /* ================================================= */

    function tryOpenRandomMission(
      source
    ) {

      if (
        paused ||
        talkOpening ||
        !running
      ) {

        return;

      }


      talkOpening =
        true;


      const mission =
        getRandomMission(
          source
        );


      openTalkMission(
        mission,
        source
      );


      setTimeout(
        function () {

          talkOpening =
            false;

        },
        300
      );

    }


    /* ================================================= */
    /* 화용언어 문제 */
    /* ================================================= */

    function openTalkMission(
      mission,
      source
    ) {

      paused =
        true;


      currentTalkMission =
        mission;


      currentTalkSource =
        source;


      talkMissionText.textContent =
        "🎙️ 대화 중";


      talkType.textContent =
        mission.type;


      talkCharacter.textContent =
        mission.character;


      talkIcon.textContent =
        mission.icon;


      talkTitle.textContent =
        mission.title;


      talkQuestion.textContent =
        mission.question;


      talkChoices.innerHTML =
        "";


      talkFeedback.classList.add(
        "hidden"
      );


      speakArea.classList.add(
        "hidden"
      );


      mission
        .choices
        .forEach(
          function (
            choice,
            index
          ) {

            const button =
              document.createElement(
                "button"
              );


            button.className =
              "talk-choice";


            button.type =
              "button";


            button.textContent =
              choice;


            button.addEventListener(
              "click",
              function () {

                answerTalk(
                  index,
                  button
                );

              }
            );


            talkChoices.appendChild(
              button
            );

          }
        );


      talkModal.classList.remove(
        "hidden"
      );

    }


    /* ================================================= */
    /* 대화 정답 */
    /* ================================================= */

    function answerTalk(
      index,
      button
    ) {

      if (
        index ===
        currentTalkMission.answer
      ) {


        button.classList.add(
          "correct"
        );


        talkChoices
          .querySelectorAll(
            ".talk-choice"
          )
          .forEach(
            function (btn) {

              btn.disabled =
                true;

            }
          );


        talkFeedback.textContent =
          currentTalkMission.feedback;


        talkFeedback.classList.remove(
          "hidden"
        );


        speakText.textContent =
          "“" +
          currentTalkMission.speech +
          "”";


        speakArea.classList.remove(
          "hidden"
        );


        score +=
          15;


        scoreText.textContent =
          score;


        talkSolved++;

      }


      else {


        button.classList.add(
          "wrong"
        );


        button.disabled =
          true;

      }

    }


    /* ================================================= */
    /* 말하기 완료 */
    /* ================================================= */

    function finishSpeaking() {

      talkModal.classList.add(
        "hidden"
      );


      talkMissionText.textContent =
        "✅ 해결";


      /*
        수서역 문제
      */

      if (
        currentTalkSource ===
        "suseo"
      ) {

        suseoMissionCount++;


        if (
          suseoMissionCount <
          requiredSuseoMissions
        ) {


          setTimeout(
            function () {

              openTalkMission(
                getRandomMission(
                  "suseo"
                ),
                "suseo"
              );

            },
            350
          );


          return;

        }


        stickers++;


        stickerText.textContent =
          stickers;


        setTimeout(
          function () {

            returnModal.classList.remove(
              "hidden"
            );

          },
          400
        );


        return;

      }


      setTimeout(
        function () {

          talkMissionText.textContent =
            "운행 중";


          paused =
            false;

        },
        350
      );

    }


    /* ================================================= */
    /* 수서역 */
    /* ================================================= */

    function arriveSuseo() {

      paused =
        true;


      running =
        false;


      progress =
        100;


      routeProgress.style.width =
        "100%";


      routeTrain.style.left =
        "100%";


      startStationLabel.classList.remove(
        "active-station"
      );


      destinationLabel.classList.add(
        "active-station"
      );


      trainStatusText.textContent =
        "🏙️ 수서역 도착";


      stationModal.classList.remove(
        "hidden"
      );

    }


    function startSuseoMission() {

      stationModal.classList.add(
        "hidden"
      );


      suseoMissionCount =
        0;


      /*
        매번 수서역에서도
        랜덤 문제 4개
      */

      openTalkMission(
        getRandomMission(
          "suseo"
        ),
        "suseo"
      );

    }


    /* ================================================= */
    /* 창원 복귀 */
    /* ================================================= */

    function startReturnTrip() {

      returnModal.classList.add(
        "hidden"
      );


      direction =
        "return";


      progress =
        0;


      distance =
        0;


      obstacleActive =
        false;


      timeSinceObstacle =
        0;


      routeProgress.style.width =
        "0%";


      routeTrain.style.left =
        "0%";


      destinationLabel.classList.remove(
        "active-station"
      );


      startStationLabel.classList.add(
        "active-station"
      );


      updateRouteLabels();


      playerLane =
        1;


      updatePlayerLane();


      trainStatusText.textContent =
        "창원중앙역으로 운행 중";


      paused =
        false;


      running =
        true;

    }


    /* ================================================= */
    /* 창원 도착 */
    /* ================================================= */

    function arriveChangwon() {

      running =
        false;


      paused =
        true;


      stickers++;


      stickerText.textContent =
        stickers;


      resultAvoid.textContent =
        avoidedCount;


      resultTalk.textContent =
        talkSolved;


      resultSticker.textContent =
        stickers;


      const rewards = [

        "🚄",
        "🚅",
        "🚆",
        "🚇",
        "🚂"

      ];


      stickerReward.textContent =
        rewards[
          Math.floor(
            Math.random() *
            rewards.length
          )
        ];


      resultModal.classList.remove(
        "hidden"
      );

    }


    /* ================================================= */
    /* 노선 표시 */
    /* ================================================= */

    function updateRouteLabels() {

      if (
        direction ===
        "outbound"
      ) {

        startStationLabel.textContent =
          "🏠 창원중앙역";


        destinationLabel.textContent =
          "🏙️ 수서역";


        tripBadge.textContent =
          "창원 → 수서";

      }


      else {

        startStationLabel.textContent =
          "🏙️ 수서역";


        destinationLabel.textContent =
          "🏠 창원중앙역";


        tripBadge.textContent =
          "수서 → 창원";

      }

    }


    /* ================================================= */
    /* 읽기 */
    /* ================================================= */

    function readCurrentTalk() {

      if (
        !currentTalkMission ||
        !window.speechSynthesis
      ) {

        return;

      }


      window
        .speechSynthesis
        .cancel();


      const speech =
        new SpeechSynthesisUtterance(
          currentTalkMission.character +
          ". " +
          currentTalkMission.title +
          ". " +
          currentTalkMission.question
        );


      speech.lang =
        "ko-KR";


      speech.rate =
        .87;


      window
        .speechSynthesis
        .speak(
          speech
        );

    }


    /* ================================================= */
    /* 게임 루프 */
    /* ================================================= */

    function gameLoop(
      now
    ) {

      const delta =
        Math.min(
          40,
          now -
          lastFrame
        );


      lastFrame =
        now;


      if (
        running &&
        !paused
      ) {


        /*
          이동 속도
      */

        const progressSpeed =
          direction ===
          "outbound"

            ? 0.0036

            : 0.0042;


        progress +=
          delta *
          progressSpeed;


        if (
          progress >
          100
        ) {

          progress =
            100;

        }


        routeProgress.style.width =
          progress +
          "%";


        routeTrain.style.left =
          progress +
          "%";


        distance =
          Math.round(
            progress *
            3.8
          );


        distanceBadge.textContent =
          distance +
          " km";


        /*
          장애물
        */

        timeSinceObstacle +=
          delta;


        const interval =
          direction ===
          "outbound"

            ? 2400

            : 1900;


        if (
          !obstacleActive &&
          timeSinceObstacle >
          interval
        ) {

          spawnObstacle();

        }


        if (
          obstacleActive
        ) {


          const speed =
            direction ===
            "outbound"

              ? .22

              : .27;


          obstacleX -=
            delta *
            speed;


          obstacle.style.left =
            obstacleX +
            "px";


          checkObstacle();

        }


        /*
          도착
        */

        if (
          progress >=
          100
        ) {


          if (
            direction ===
            "outbound"
          ) {

            arriveSuseo();

          }


          else {

            arriveChangwon();

          }

        }

      }


      requestAnimationFrame(
        gameLoop
      );

    }


    /* ================================================= */
    /* 다시하기 */
    /* ================================================= */

    function restartGame() {

      window.location.reload();

    }


    /* ================================================= */
    /* 버튼 */
    /* ================================================= */

    startGameBtn.addEventListener(
      "click",
      startGame
    );


    upBtn.addEventListener(
      "click",
      moveUp
    );


    downBtn.addEventListener(
      "click",
      moveDown
    );


    stopBtn.addEventListener(
      "click",
      stopTrain
    );


    speakDoneBtn.addEventListener(
      "click",
      finishSpeaking
    );


    talkSoundBtn.addEventListener(
      "click",
      readCurrentTalk
    );


    suseoMissionBtn.addEventListener(
      "click",
      startSuseoMission
    );


    returnStartBtn.addEventListener(
      "click",
      startReturnTrip
    );


    restartBtn.addEventListener(
      "click",
      restartGame
    );


    /* ================================================= */
    /* 시작 */
    /* ================================================= */

    updatePlayerLane();

    updateRouteLabels();


    requestAnimationFrame(
      gameLoop
    );

  }
);
