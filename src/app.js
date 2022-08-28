let questions = [
  {
    title: "cat",
    alternatives: ["cachorro", "pássaro", "peixe", "gato"],
    correctAnswer: 3
  },
  {
    title: "shark",
    alternatives: ["gato", "tubarão", "tartaruga", "peixe"],
    correctAnswer: 1
  },
  {
    title: "snake",
    alternatives: ["cabra", "rato", "cachorro", "cobra"],
    correctAnswer: 3
  },
  {
    title: "turtle",
    alternatives: ["peixe", "tartaruga", "rato", "tubarão"],
    correctAnswer: 1
  },
  {
    title: "dog",
    alternatives: ["cachorro", "tartaruga", "cobra", "rato"],
    correctAnswer: 0
  },
  {
    title: "mouse",
    alternatives: ["cachorro", "tartaruga", "rato", "tubarão"],
    correctAnswer: 2
  },
  {
    title: "bird",
    alternatives: ["tubarão", "cobra", "cachorro", "pássaro"],
    correctAnswer: 3
  },
  {
    title: "fish",
    alternatives: ["rato", "peixe", "gato", "tartaruga"],
    correctAnswer: 1
  }
];

let app = {
  start: function () {
    // keep track of current position in the questions array
    this.currPosition = 0;

    //keep track of score
    this.score = 0;

    // get alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(index);
      });
    });

    // show first question
    this.showQuestion(questions[this.currPosition]);
  },

  showQuestion: function (q) {
    // show question title
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    // show alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    let currQuestion = questions[this.currPosition];

    if (currQuestion.correctAnswer == userSelected) {
      // correct
      this.showResult(true);
      this.score++;
    } else {
      // not correct
      this.showResult(false);
    }
    //refresh score
    this.updateScore();
    // increase position
    this.increasePosition();

    // show next question
    this.showQuestion(questions[this.currPosition]);
  },

  increasePosition: function () {
    // increase the current position
    this.currPosition++;

    // if reached the end of the database
    if (this.currPosition == questions.length) {
      // send back to the beginning
      this.currPosition = 0;
    }
  },
  updateScore: function () {
    let scoreDiv = document.getElementById("score");
    scoreDiv.textContent = ` Your score: ${this.score}`;
  },
  showResult: function (isCorrect) {
    let resultDiv = document.getElementById("result");
    let result = "";
    //checks
    if (isCorrect) {
      result = "Correct Answer!";
    } else {
      //get current question
      let currQuestion = questions[this.currPosition];
      // get correct answer (index)
      let correctAnswIndex = currQuestion.correctAnswer;
      //get correct answer (text)
      let correctAnswText = currQuestion.alternatives[correctAnswIndex];
      result = `Wrong Answer! Correct answer: ${correctAnswText}`;
    }
    resultDiv.textContent = result;
  }
};

// call the function for starting the application
app.start();
