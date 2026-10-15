
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuToggle.textContent = navigation.classList.contains("open") ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

const ideaData = {
  SecondSprout: {
    description: "A neighbourhood plant-sharing concept that helps people exchange cuttings, pots, and growing tips.",
    questions: [
      "Which local group would try this first?",
      "How could swaps be convenient?",
      "What would encourage people to return?"
    ]
  },
  SkillPatch: {
    description: "A peer-learning concept where students host short sessions on practical skills.",
    questions: [
      "Which skills do students want to learn?",
      "How could learners find the right host?",
      "What would make a first session useful?"
    ]
  },
  NearKind: {
    description: "A discovery concept for finding independent shops and services close to home.",
    questions: [
      "What information do shoppers need?",
      "How can shop listings stay up to date?",
      "How could the platform build trust?"
    ]
  }
};

const dialog = document.getElementById("ideaDialog");

document.querySelectorAll(".idea-button").forEach(button => {
  button.addEventListener("click", () => {
    const idea = ideaData[button.dataset.idea];

    document.getElementById("dialogTitle").textContent = button.dataset.idea;
    document.getElementById("dialogDescription").textContent = idea.description;

    const questionList = document.getElementById("dialogQuestions");
    questionList.replaceChildren();

    idea.questions.forEach(question => {
      const item = document.createElement("li");
      item.textContent = question;
      questionList.appendChild(item);
    });

    dialog.showModal();
  });
});

document.getElementById("closeDialog").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

document.getElementById("ideaForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const idea = document.getElementById("idea").value.trim();
  const stage = document.getElementById("stage").value;
  const problem = document.getElementById("problem").value.trim();

  const result = document.getElementById("formResult");

  result.textContent =
    `Thanks, ${name}! Your idea "${idea}" is currently at the "${stage}" stage. ` +
    `Your problem statement: ${problem}. This is a frontend demo; your submission is not permanently saved.`;

  result.classList.add("show");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
