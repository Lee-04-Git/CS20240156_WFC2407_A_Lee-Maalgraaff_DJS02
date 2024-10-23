const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

    // Scenario 1 - Dividing numbers result in a decimal number
    const wholeNumberResult = Math.trunc(dividend / divider);
    result.innerText = wholeNumberResult;

     // Scenario 2 - Validation when values are missing
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      return;
    }

});