document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ========================================= */
    /* DOM */
    /* ========================================= */

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


    /* Talk */

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


    /* Station */

    const stationModal =
      document.getElementById("stationModal");

    const suseoMissionBtn =
      document.getElementById("suseoMissionBtn");

    const returnModal =
      document.getElementById("returnModal");

    const returnStartBtn =
      document.getElementById("returnStartBtn");


    /* Result */

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



    /* ========================================= */
    /* 장애물 */
    /* ========================================= */

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
        label: "공사"
      },

      {
        icon: "💧",
        type: "avoid",
        label: "물 고임"
      },

      {
        icon: "🚆",
        type: "avoid",
        label: "앞 열차"
      },

      {
        icon: "🔴",
        type: "stop",
        label: "정지 신호"
      }

    ];



    /* ========================================= */
    /* 화용언어 문제 */
    /* ========================================= */

    const outboundTalk = [

      {
        type: "관제 대화",

        character:
          "👨‍✈️ SRT 기관사",

        icon:
          "📡",

        title:
          "앞 선로에 공사 구간",

        question:
          "기관사가 “앞 선로에 공사 구간이 있습니다. 어떻게 할까요?”라고 물었어요.",

        choices: [
          "🚄 그냥 빨리 지나가세요",
          "🚧 속도를 줄이고 다른 선로를 확인해 주세요",
          "🤷 잘 모르겠어요",
          "😠 왜 물어봐요?"
        ],

        answer: 1,

        feedback:
          "좋아요! 상황에 맞는 행동을 기관사에게 정확하게 알려줬어요.",

        speech:
          "속도를 줄이고 다른 선로를 확인해 주세요."
      },


      {
        type: "다시 말하기",

        character:
          "👨‍✈️ SRT 기관사",

        icon:
          "📡",

        title:
          "무전이 잘 안 들렸어요",

        question:
          "기관사가 “관제사님, 잘 못 들었습니다.”라고 말했어요. 어떻게 해야 할까요?",

        choices: [
          "😠 아까 말했잖아요",
          "📡 네, 다시 말씀드릴게요",
          "🤷 그냥 알아서 하세요",
          "🔇 아무 말도 하지 않는다"
        ],

        answer: 1,

        feedback:
          "맞아요! 상대가 잘 못 들었다면 차분하게 다시 설명하면 좋아요.",

        speech:
          "네, 다시 말씀드릴게요. SRT는 2번 선로로 이동해 주세요."
      },


      {
        type: "상황 파악",

        character:
          "👩 엄마",

        icon:
          "🎫",

        title:
          "엄마가 표를 확인해요",

        question:
          "엄마가 “우리 좌석이 몇 번이야?”라고 물었어요. 가장 자연스러운 대답은 무엇일까요?",

        choices: [
          "🚄 SRT는 빠른 기차야",
          "💺 8호차 3A, 3B 자리야",
          "🤷 왜 물어봐?",
          "🎫 표가 예뻐"
        ],

        answer: 1,

        feedback:
          "좋아요! 질문에서 필요한 정보를 듣고 그 내용에 맞게 대답했어요.",

        speech:
          "우리 자리는 8호차 3A와 3B야."
      }

    ];



    const suseoTalk = [

      {
        type: "도움 요청 듣기",

        character:
          "👧 이서",

        icon:
          "🎒",

        title:
          "이서의 가방",

        question:
          "이서가 “내 가방이 안 보여!”라고 말했어요. 가장 좋은 질문은 무엇일까요?",

        choices: [
          "😠 왜 잃어버렸어?",
          "🎒 어디에서 마지막으로 봤어?",
          "🛍️ 새로 사면 돼",
          "🤷 난 몰라"
        ],

        answer: 1,

        feedback:
          "좋아요! 문제를 해결하기 위해 필요한 정보를 먼저 물어봤어요.",

        speech:
          "이서야, 가방을 어디에서 마지막으로 봤어?"
      },


      {
        type: "상대 의도 확인",

        character:
          "👵 진주할머니",

        icon:
          "🗺️",

        title:
          "길을 찾는 할머니",

        question:
          "진주할머니가 수서역에서 어디로 가야 하는지 몰라 주변을 보고 있어요. 어떻게 말하면 좋을까요?",

        choices: [
          "👉 저쪽이에요",
          "👵 할머니, 어디로 가세요? 제가 같이 찾아볼게요",
          "🚶 그냥 가세요",
          "🤷 직원에게 물어보세요"
        ],

        answer: 1,

        feedback:
          "맞아요! 먼저 어디로 가려는지 확인하면 더 정확하게 도울 수 있어요.",

        speech:
          "할머니, 어디로 가세요? 제가 같이 찾아볼게요."
      },


      {
        type: "정중하게 부탁",

        character:
          "🧔 삼촌",

        icon:
          "📱",

        title:
          "삼촌의 큰 휴대폰 소리",

        question:
          "삼촌이 SRT 안에서 휴대폰 영상을 크게 틀었어요. 주변 승객들이 쳐다봐요. 어떻게 말할까요?",

        choices: [
          "😠 삼촌 시끄러워!",
          "🔉 삼촌, 다른 사람들도 있으니까 소리를 조금 줄여줄래?",
          "📱 휴대폰을 빼앗는다",
          "🙉 아무 말도 하지 않는다"
        ],

        answer: 1,

        feedback:
          "좋아요! 이유와 함께 정중하게 부탁했어요.",

        speech:
          "삼촌, 다른 사람들도 있으니까 소리를 조금 줄여줄래?"
      }

    ];



    const returnTalk = [

      {
        type: "안전 판단",

        character:
          "👨‍✈️ SRT 기관사",

        icon:
          "🔴",

        title:
          "빨간 신호",

        question:
          "기관사가 “앞 신호가 빨간색입니다.”라고 보고했어요. 어떻게 대답해야 할까요?",

        choices: [
          "🚄 빨리 지나가세요",
          "🛑 현재 위치에서 정지하고 신호를 기다려 주세요",
          "↗️ 그냥 옆으로 가세요",
          "🤷 알아서 하세요"
        ],

        answer: 1,

        feedback:
          "정답! 안전과 관련된 상황에서는 정확한 행동을 알려줘야 해요.",

        speech:
          "현재 위치에서 정지하고 신호를 기다려 주세요."
      },


      {
        type: "상황 설명",

        character:
          "👩 엄마",

        icon:
          "⏰",

        title:
          "왜 기차가 멈췄어요?",

        question:
          "엄마가 “왜 기차가 갑자기 멈췄어?”라고 물었어요. 어떻게 설명하면 좋을까요?",

        choices: [
          "🤷 몰라",
          "🔴 앞 신호가 빨간색이라 안전하게 기다리고 있어",
          "🚄 기차가 쉬고 싶대",
          "😠 그냥 기다려"
        ],

        answer: 1,

        feedback:
          "좋아요! 왜 그런 일이 생겼는지 상대가 이해하기 쉽게 설명했어요.",

        speech:
          "앞 신호가 빨간색이라 안전하게 기다리고 있어."
      },


      {
        type: "감정 이해",

        character:
          "👧 이서",

        icon:
          "😴",

        title:
          "이서가 피곤해 보여요",

        question:
          "이서가 창밖을 보다가 하품을 하고 말수가 줄었어요. 어떻게 생각할 수 있을까요?",

        choices: [
          "😡 화가 났다",
          "😴 피곤하거나 쉬고 싶을 수 있다",
          "🎉 더 놀고 싶다",
          "🚄 기차 이야기를 더 듣고 싶다"
        ],

        answer: 1,

        feedback:
          "맞아요! 표정과 행동을 보면 상대방의 상태를 짐작할 수 있어요.",

        speech:
          "이서야, 피곤해? 조금 쉴래?"
      }

    ];



    /* ========================================= */
    /* 게임 상태 */
    /* ========================================= */

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

    let outboundTalkIndex =
      0;

    let suseoTalkIndex =
      0;

    let returnTalkIndex =
      0;

    let currentTalkMission =
      null;

    let currentTalkSource =
      "";

    let lastFrame =
      performance.now();

    let timeSinceObstacle =
      0;



    /* ========================================= */
    /* 시작 */
    /* ========================================= */

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



    /* ========================================= */
    /* 선로 변경 */
    /* ========================================= */

    function moveUp() {

      if (
        paused ||
        !running
      ) {
        return;
      }


      if (
        playerLane > 0
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
        playerLane < 2
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



    /* ========================================= */
    /* 정지 */
    /* ========================================= */

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
        "scale(.97)";


      setTimeout(
        function() {

          stopped =
            false;


          playerTrain.style.transform =
            "scale(1)";


          if (
            running &&
            !paused
          ) {

            trainStatusText.textContent =
              direction === "outbound"
                ? "수서역으로 운행 중"
                : "창원중앙역으로 운행 중";

          }

        },
        1100
      );

    }



    /* ========================================= */
    /* 장애물 생성 */
    /* ========================================= */

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
        obstacleX + "px";


      nextObstacleIcon.textContent =
        currentObstacle.icon;


      nextObstacleText.textContent =
        currentObstacle.type === "stop"
          ? "정지!"
          : "피하기!";

    }



    /* ========================================= */
    /* 장애물 종료 */
    /* ========================================= */

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



    /* ========================================= */
    /* 장애물 판정 */
    /* ========================================= */

    function checkObstacle() {

      if (
        !obstacleActive
      ) {
        return;
      }


      const trainRect =
        playerTrain.getBoundingClientRect();


      const obstacleRect =
        obstacle.getBoundingClientRect();


      const overlappingX =
        obstacleRect.left <
        trainRect.right &&
        obstacleRect.right >
        trainRect.left;


      if (
        overlappingX
      ) {


        if (
          currentObstacle.type === "stop"
        ) {


          if (
            stopped
          ) {

            successfulAvoid();

            resolveObstacle();

            return;

          }


          if (
            obstacleLane === playerLane
          ) {

            hitObstacle();

            resolveObstacle();

            return;

          }

        }


        else {


          if (
            obstacleLane === playerLane
          ) {

            hitObstacle();

            resolveObstacle();

            return;

          }

        }

      }


      if (
        obstacleRect.right <
        trainRect.left - 20
      ) {

        successfulAvoid();

        resolveObstacle();

      }

    }



    /* ========================================= */
    /* 성공 */
    /* ========================================= */

    function successfulAvoid() {

      avoidedCount++;

      score += 10;


      scoreText.textContent =
        score;


      successEffect.classList.remove(
        "hidden"
      );


      setTimeout(
        function() {

          successEffect.classList.add(
            "hidden"
          );

        },
        600
      );


      /*
        일정 횟수마다
        화용언어 문제
      */

      if (
        direction === "outbound" &&
        avoidedCount > 0 &&
        avoidedCount % 3 === 0 &&
        outboundTalkIndex <
        outboundTalk.length
      ) {

        setTimeout(
          function() {

            openTalkMission(
              outboundTalk[
                outboundTalkIndex
              ],
              "outbound"
            );

            outboundTalkIndex++;

          },
          500
        );

      }


      if (
        direction === "return" &&
        avoidedCount > 0 &&
        avoidedCount % 3 === 0 &&
        returnTalkIndex <
        returnTalk.length
      ) {

        setTimeout(
          function() {

            openTalkMission(
              returnTalk[
                returnTalkIndex
              ],
              "return"
            );

            returnTalkIndex++;

          },
          500
        );

      }

    }



    /* ========================================= */
    /* 충돌 */
    /* ========================================= */

    function hitObstacle() {

      lives--;


      if (
        lives < 0
      ) {

        lives = 0;

      }


      lifeText.textContent =
        lives;


      hitEffect.classList.remove(
        "hidden"
      );


      playerTrain.style.transform =
        "translateX(-8px) rotate(-3deg)";


      setTimeout(
        function() {

          hitEffect.classList.add(
            "hidden"
          );


          playerTrain.style.transform =
            "translateX(0) rotate(0)";

        },
        550
      );


      /*
        아이가 게임을 계속할 수 있게
        하트가 0이면 정비팀이 복구
      */

      if (
        lives === 0
      ) {

        paused =
          true;


        trainStatusText.textContent =
          "🔧 정비 중";


        setTimeout(
          function() {

            lives =
              2;


            lifeText.textContent =
              lives;


            trainStatusText.textContent =
              "✅ 정비 완료";


            setTimeout(
              function() {

                paused =
                  false;

              },
              700
            );

          },
          900
        );

      }

    }



    /* ========================================= */
    /* 화용언어 열기 */
    /* ========================================= */

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
          function(
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
              function() {

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



    /* ========================================= */
    /* 대화 정답 */
    /* ========================================= */

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
            function(btn) {

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



    /* ========================================= */
    /* 말하기 완료 */
    /* ========================================= */

    function finishSpeaking() {

      talkModal.classList.add(
        "hidden"
      );


      talkMissionText.textContent =
        "✅ 성공";


      setTimeout(
        function() {

          talkMissionText.textContent =
            "운행 중";

        },
        900
      );


      /*
        수서역 미션이라면
        다음 수서 미션
      */

      if (
        currentTalkSource ===
        "suseo"
      ) {


        suseoTalkIndex++;


        if (
          suseoTalkIndex <
          suseoTalk.length
        ) {

          setTimeout(
            function() {

              openTalkMission(
                suseoTalk[
                  suseoTalkIndex
                ],
                "suseo"
              );

            },
            350
          );


          return;

        }


        /*
          수서 미션 완료
        */

        stickers++;


        stickerText.textContent =
          stickers;


        setTimeout(
          function() {

            returnModal.classList.remove(
              "hidden"
            );

          },
          350
        );


        return;

      }


      paused =
        false;

    }



    /* ========================================= */
    /* 수서역 도착 */
    /* ========================================= */

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



    /* ========================================= */
    /* 수서 화용언어 */
    /* ========================================= */

    function startSuseoMission() {

      stationModal.classList.add(
        "hidden"
      );


      suseoTalkIndex =
        0;


      openTalkMission(
        suseoTalk[0],
        "suseo"
      );

    }



    /* ========================================= */
    /* 귀환 출발 */
    /* ========================================= */

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


      tripBadge.textContent =
        "수서 → 창원";


      startStationLabel.textContent =
        "🏙️ 수서역";


      destinationLabel.textContent =
        "🏠 창원중앙역";


      playerLane =
        1;


      updatePlayerLane();


      trainStatusText.textContent =
        "창원중앙역으로 운행 중";


      paused =
        false;


      running =
        true;


      timeSinceObstacle =
        0;

    }



    /* ========================================= */
    /* 창원 도착 */
    /* ========================================= */

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
        "🚇"
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



    /* ========================================= */
    /* 경로 표시 */
    /* ========================================= */

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



    /* ========================================= */
    /* 음성 읽기 */
    /* ========================================= */

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
          currentTalkMission.title +
          ". " +
          currentTalkMission.question
        );


      speech.lang =
        "ko-KR";


      speech.rate =
        .88;


      window
        .speechSynthesis
        .speak(
          speech
        );

    }



    /* ========================================= */
    /* 메인 루프 */
    /* ========================================= */

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
          이동 거리
        */

        const progressSpeed =
          direction ===
          "outbound"
            ? 0.0044
            : 0.0052;


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
          progress + "%";


        routeTrain.style.left =
          progress + "%";


        distance =
          Math.round(
            progress *
            3.8
          );


        distanceBadge.textContent =
          distance + " km";


        /*
          장애물 생성 타이머
        */

        timeSinceObstacle +=
          delta;


        const obstacleInterval =
          direction === "outbound"
            ? 2500
            : 2000;


        if (
          !obstacleActive &&
          timeSinceObstacle >
          obstacleInterval
        ) {

          spawnObstacle();

        }


        /*
          장애물 이동
        */

        if (
          obstacleActive
        ) {


          const speed =
            direction === "outbound"
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
          progress >= 100
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



    /* ========================================= */
    /* 재시작 */
    /* ========================================= */

    function restartGame() {

      window.location.reload();

    }



    /* ========================================= */
    /* EVENT */
    /* ========================================= */

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



    /* ========================================= */
    /* 초기값 */
    /* ========================================= */

    updatePlayerLane();

    updateRouteLabels();

    requestAnimationFrame(
      gameLoop
    );


  }
);
