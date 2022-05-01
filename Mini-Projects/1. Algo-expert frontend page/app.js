const QUESTIONS_API_BASE_URL = "https://www.algoexpert.io/api/fe/questions";

// get URL json
async function fetchQuestions() {
  const response = await fetch(QUESTIONS_API_BASE_URL);
  const questions = await response.json();
  return questions;
}

// store the json data locally
function getQuestionsByCategory(questions) {
  const questionsByCatetory = {};
  console.log(questions);
  questions.forEach((question) => {
    if (questionsByCatetory.hasOwnProperty(question.category)) {
      questionsByCatetory[question.category].push(question);
    } else {
      questionsByCatetory[question.category] = [question];
    }
  });
  console.log(questionsByCatetory);
  return questionsByCatetory;
}

console.log(fetchQuestions());

/*  
    <div class="category">
      <h2>HTML</h2>
      <div class="question">
        <h3>Stopwatch</h3>
      </div>
      <div class="question">
        <h3>Tic Tac Toe</h3>
      </div>
*/

// make the <div>
function createCategory(category, questions) {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  const h2 = document.createElement("h2");
  h2.textContent = category;
  categoryDiv.append(h2);
  questions.forEach((question) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    const h3 = document.createElement("h3");
    h3.textContent = question.name;
    questionDiv.append(h3);
    categoryDiv.append(questionDiv);
  });
  return categoryDiv;
}

async function fetchAndAppendQuestions() {
  const questions = await fetchQuestions();
  const questionsByCatetory = getQuestionsByCategory(questions);

  const wrapper = document.getElementById("wrapper");
  for (const [category, questions] of Object.entries(questionsByCatetory)) {
    const categoryDiv = createCategory(category, questions);
    wrapper.append(categoryDiv);
  }
}

fetchAndAppendQuestions();
