const cardNumberInput = document.querySelector("#number");
const holderNameInput = document.querySelector("#name");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");
const holderName = document.querySelector(".holder-name");
const cardNumber = document.querySelector(".card-number");
const expDate = document.querySelector(".exp-date");
const expMonth = document.querySelector(".exp-month");
const expYear = document.querySelector(".exp-year");
const cvcCode = document.querySelector(".cvc-code");
const numberError = document.querySelector("#number-error");
const nameError = document.querySelector("#name-error");
const dateError = document.querySelector("#date-error");
const cvcError = document.querySelector("#cvc-error");
const cardForm = document.querySelector("form");
const formSection = document.querySelector(".form-section");
const completeSection = document.querySelector(".complete-section");
const continueButton = document.querySelector(".continue-button");

let originalNumber = "0000000000000000";
let originalName = "JANE APLLESEED";
let orginalDate = "00";
let originalCvc = "000";

cardForm.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") checkError();
});

// check card number input

cardNumberInput.addEventListener("input", (event) => {
  checkError();
  if (cardNumberInput.value.length > 16) {
    cardNumberInput.value = cardNumberInput.value
      .split("")
      .toSpliced(16)
      .join("");
  }

  let currentNumber = originalNumber.split("");
  currentNumber.splice(
    0,
    cardNumberInput.value.replaceAll(" ", "").length,
    ...cardNumberInput.value.replaceAll(" ", "").split("")
  );
  let formattedNumber = "";
  for (let i = 0; i < currentNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      console.log(formattedNumber);

      formattedNumber += " ";
    }
    formattedNumber += currentNumber[i];
  }

  cardNumber.textContent = formattedNumber.trim();
});

// end card number input

//  holder name input

holderNameInput.addEventListener("input", () => {
  checkError();
  holderName.textContent = holderNameInput.value.toUpperCase();
});

// end holder name input

// experation month input

monthInput.addEventListener("input", () => {
  checkError();
  if (monthInput.value.length > 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }

  expMonth.textContent = monthInput.value;

  if (expMonth.textContent.length === 1) {
    expMonth.textContent = expMonth.textContent.padStart(2, "0");
  }

  if (monthInput.value === "") {
    expMonth.textContent = "00";
  }
});

// end experation month input

// experation year input

yearInput.addEventListener("input", () => {
  checkError();
  if (yearInput.value.length > 2) {
    yearInput.value = yearInput.value.slice(0, 2);
  }
  expYear.textContent = yearInput.value;

  if (expYear.textContent.length === 1) {
    expYear.textContent = expYear.textContent.padStart(2, "0");
  }

  if (yearInput.value === "") {
    expYear.textContent = "00";
  }
});

// end experation year input

// CVC code input

cvcInput.addEventListener("input", () => {
  checkError();
  if (cvcInput.value.length > 3) {
    cvcInput.value = cvcInput.value.slice(0, 3);
  }
  cvcCode.textContent = cvcInput.value;
});

// end CVC code input

// form submit event

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkError()) {
    formSection.classList.add("hide");
    completeSection.classList.remove("hide");
    holderNameInput.value = "";
    cardNumberInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    cvcInput.value = "";
  }
});

// end form submit event

// continue event

continueButton.addEventListener("click", () => {
  cardNumber.textContent = originalNumber;
  holderName.textContent = originalName;
  expMonth.textContent = orginalDate;
  expYear.textContent = orginalDate;
  cvcCode.textContent = originalCvc;
  completeSection.classList.add("hide");
  formSection.classList.remove("hide");
});

// end continue event

// function for checking errors
const checkError = () => {
  if (cardNumberInput.value.length < 16) {
    numberError.classList.remove("hide");
  } else {
    numberError.classList.add("hide");
  }

  if (holderNameInput.value == "") {
    nameError.classList.remove("hide");
  } else {
    nameError.classList.add("hide");
  }

  if (monthInput.value == "" || yearInput.value === "") {
    dateError.classList.remove("hide");
  } else {
    dateError.classList.add("hide");
  }

  if (cvcInput.value.length < 3) {
    cvcError.classList.remove("hide");
  } else {
    cvcError.classList.add("hide");
  }

  return (
    cardNumberInput.value !== "" &&
    holderNameInput.value !== "" &&
    monthInput.value !== "" &&
    cvcInput.value !== "" &&
    yearInput.value !== ""
  );
};
