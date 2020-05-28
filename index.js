const button = document.querySelector("button");
const form = document.querySelector("form")

const countTip = (bill, service) => {
  switch (service) {
    case 1:
      return bill * 0.02;
    case 2:
      return bill * 0.06;
    case 4:
      return bill * 0.12;
    case 5:
      return bill * 0.14;
    default:
      return bill * 0.1;
  }
};

const handleButtonClick = async e => {
  e.preventDefault();
  console.log(e)
  const bill = parseInt(document.getElementById("bill").value);
  const service = parseInt(document.getElementById("service").value);
  const guestsElem = document.getElementById("guests");
  const guests = parseInt(document.getElementById("guests").value);
  const tip = Math.round(await countTip(bill, service));
  const tipForGuest = Math.round(tip / guests);

  let tipPar = document.querySelector(".tip");
  tipPar.innerHTML = `Napiwek wynosi ${tip} zł`;
  let tipGuestsPar = document.querySelector(".tipPerGuest");
  tipGuestsPar.innerHTML = `${tipForGuest} zł na osobę`;
};

button.addEventListener("click", handleButtonClick);
