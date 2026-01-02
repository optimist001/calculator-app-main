const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["+", "-", "/", "*", "."];
const themes = document.querySelectorAll('input[type="radio"]');

let output = "";

const calculate = (btnvalue) => {
  display.focus;
  if (btnvalue === "=" && output !== "") {
    display.value = output;

    output = eval(output);
  } else if (btnvalue === "del") {
    output = output.toString().slice(0, -1);
  } else if (btnvalue === "reset") {
    output = "";
    display.value = "";
    return;
  } else {
    if (output === "" && specialChar.includes(btnvalue)) return;
    output += btnvalue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});

themes.forEach((theme) => {
  theme.addEventListener("change", () => {
    if (themes[1].checked) {
      document.body.classList.add("theme-two");
      document.body.classList.remove("theme-three");
    } else if (themes[2].checked) {
      document.body.classList.add("theme-three");
    } else {
      document.body.classList.remove("theme-two");
      document.body.classList.remove("theme-three");
    }
  });
});

// if ((themes[1].checked = true)) {
//   document.body.classList.add("theme-two");
// }
