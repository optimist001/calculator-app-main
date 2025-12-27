const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["+", "-", "/", "*", "."];

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
    // return;
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
