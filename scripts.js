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

    // Scenario 3 - Invalid division (division by zero)
    if (divider === "0") {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      
      console.error(new Error("Division by zero"));
      
      return;
    }



});