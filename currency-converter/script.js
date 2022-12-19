function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  event.preventDefault();
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
  event.preventDefault();
}
function control() {
  let amountInput = String(document.querySelector(".enterAmount").value);
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let sayac = 0;
  let arrayAmount = [];
  arrayAmount = amountInput.split("");
  for (let i = 0; i < arrayAmount.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (arrayAmount[i] == numbers[j]) {
        sayac++;
      }
    }
  }
  transactions(amountInput);
  if (sayac != arrayAmount.length || arrayAmount == null) {
    document.querySelector(".header").classList.add("eventsNone");
    document.querySelector(".amount").classList.add("eventsNone");
    document.querySelector(".exchange").classList.add("eventsNone");
    document.querySelector(".convertedAmount").classList.add("eventsNone");
    document.querySelector(".converted").classList.add("eventsNone");
    let closing =
      `<div class="deleteTag alignment column">
    <h1>The amount input should only contain numbers.</h1>
    <h1>Close the Application.</h1>
    </div>
    `
    document.querySelector(".container").insertAdjacentHTML("beforeend", closing);

  }

}
function gelenID(inputID) {
  let butondakiInput = document.querySelector(".dropbtn span");
  let butondakiInput2 = document.querySelector(".dropbtn span:last-child");
  let inputlar = document.querySelectorAll(".dropdown-content span[id] span:first-child");
  let inputlar2 = document.querySelectorAll(".dropdown-content span[id] span:last-child");

  let inputTutucu = inputlar[inputID].classList.toString();
  let butonTutucu = butondakiInput.classList.toString();
  butondakiInput.classList = "";
  butondakiInput.classList = inputTutucu;
  inputlar[inputID].classList = "";
  inputlar[inputID].classList = butonTutucu;


  let inputTutucu2 = inputlar2[inputID].innerText;
  let butonTutucu2 = butondakiInput2.innerText;
  butondakiInput2.innerText = "";
  butondakiInput2.innerText = inputTutucu2;
  inputlar2[inputID].innerText = "";
  inputlar2[inputID].innerText = butonTutucu2;
}
function gelenID2(inputID) {
  let butondakiInput = document.querySelector(".dropbtn2 span");
  let butondakiInput2 = document.querySelector(".dropbtn2 span:last-child");
  let inputlar = document.querySelectorAll(".dropdown-content2 span[id] span:first-child");
  let inputlar2 = document.querySelectorAll(".dropdown-content2 span[id] span:last-child");

  let inputTutucu = inputlar[inputID].classList.toString();
  let butonTutucu = butondakiInput.classList.toString();
  butondakiInput.classList = "";
  butondakiInput.classList = inputTutucu;
  inputlar[inputID].classList = "";
  inputlar[inputID].classList = butonTutucu;


  let inputTutucu2 = inputlar2[inputID].innerText;
  let butonTutucu2 = butondakiInput2.innerText;
  butondakiInput2.innerText = "";
  butondakiInput2.innerText = inputTutucu2;
  inputlar2[inputID].innerText = "";
  inputlar2[inputID].innerText = butonTutucu2;
}
function changeCurrency() {
  const SolBayrakTutucu = document.querySelector(".dropbtn span").classList.toString();
  const SağBayrakTutucu = document.querySelector(".dropbtn2 span").classList.toString();
  const SolBirimTutucu = (document.querySelector(".dropbtn span:last-child").textContent).toString();;
  const SağBirimTutucu = (document.querySelector(".dropbtn2 span:last-child").textContent).toString();
  document.querySelector(".dropbtn span").classList = "";
  document.querySelector(".dropbtn span").classList = SağBayrakTutucu;
  document.querySelector(".dropbtn2 span").classList = "";
  document.querySelector(".dropbtn2 span").classList = SolBayrakTutucu;
  document.querySelector(".dropbtn span:last-child").textContent = "";
  document.querySelector(".dropbtn span:last-child").textContent = SağBirimTutucu;
  document.querySelector(".dropbtn2 span:last-child").textContent = "";
  document.querySelector(".dropbtn2 span:last-child").textContent = SolBirimTutucu;

  const SolBayrakTutucu2 = document.querySelector(".dropdown-content span[id] span:first-child").classList.toString();
  const SağBayrakTutucu2 = document.querySelector(".dropdown-content2 span[id] span:first-child").classList.toString();
  const SolBirimTutucu2 = (document.querySelector(".dropdown-content span[id] span:last-child").textContent).toString();;
  const SağBirimTutucu2 = (document.querySelector(".dropdown-content2 span[id] span:last-child").textContent).toString();
  document.querySelector(".dropdown-content span[id] span:first-child").classList = "";
  document.querySelector(".dropdown-content span[id] span:first-child").classList = SağBayrakTutucu2;
  document.querySelector(".dropdown-content2 span[id] span:first-child").classList = "";
  document.querySelector(".dropdown-content2 span[id] span:first-child").classList = SolBayrakTutucu2;
  document.querySelector(".dropdown-content span[id] span:last-child").textContent = "";
  document.querySelector(".dropdown-content span[id] span:last-child").textContent = SağBirimTutucu2;
  document.querySelector(".dropdown-content2 span[id] span:last-child").textContent = "";
  document.querySelector(".dropdown-content2 span[id] span:last-child").textContent = SolBirimTutucu2;

  const SolBayrakTutucu3 = document.querySelector(".dropdown-content span[id]:nth-child(2) span:first-child").classList.toString();
  const SağBayrakTutucu3 = document.querySelector(".dropdown-content2 span[id]:nth-child(2) span:first-child").classList.toString();
  const SolBirimTutucu3 = (document.querySelector(".dropdown-content span[id]:nth-child(2) span:last-child").textContent).toString();;
  const SağBirimTutucu3 = (document.querySelector(".dropdown-content2 span[id]:nth-child(2) span:last-child").textContent).toString();
  document.querySelector(".dropdown-content span[id]:nth-child(2) span:first-child").classList = "";
  document.querySelector(".dropdown-content span[id]:nth-child(2) span:first-child").classList = SağBayrakTutucu3;
  document.querySelector(".dropdown-content2 span[id]:nth-child(2) span:first-child").classList = "";
  document.querySelector(".dropdown-content2 span[id]:nth-child(2) span:first-child").classList = SolBayrakTutucu3;
  document.querySelector(".dropdown-content span[id]:nth-child(2) span:last-child").textContent = "";
  document.querySelector(".dropdown-content span[id]:nth-child(2) span:last-child").textContent = SağBirimTutucu3;
  document.querySelector(".dropdown-content2 span[id]:nth-child(2) span:last-child").textContent = "";
  document.querySelector(".dropdown-content2 span[id]:nth-child(2) span:last-child").textContent = SolBirimTutucu3;

  const SolBayrakTutucu4 = document.querySelector(".dropdown-content span[id]:nth-child(3) span:first-child").classList.toString();
  const SağBayrakTutucu4 = document.querySelector(".dropdown-content2 span[id]:nth-child(3) span:first-child").classList.toString();
  const SolBirimTutucu4 = (document.querySelector(".dropdown-content span[id]:nth-child(3) span:last-child").textContent).toString();;
  const SağBirimTutucu4 = (document.querySelector(".dropdown-content2 span[id]:nth-child(3) span:last-child").textContent).toString();
  document.querySelector(".dropdown-content span[id]:nth-child(3) span:first-child").classList = "";
  document.querySelector(".dropdown-content span[id]:nth-child(3) span:first-child").classList = SağBayrakTutucu4;
  document.querySelector(".dropdown-content2 span[id]:nth-child(3) span:first-child").classList = "";
  document.querySelector(".dropdown-content2 span[id]:nth-child(3) span:first-child").classList = SolBayrakTutucu4;
  document.querySelector(".dropdown-content span[id]:nth-child(3) span:last-child").textContent = "";
  document.querySelector(".dropdown-content span[id]:nth-child(3) span:last-child").textContent = SağBirimTutucu4;
  document.querySelector(".dropdown-content2 span[id]:nth-child(3) span:last-child").textContent = "";
  document.querySelector(".dropdown-content2 span[id]:nth-child(3) span:last-child").textContent = SolBirimTutucu4;

  const SolBayrakTutucu5 = document.querySelector(".dropdown-content span[id]:nth-child(4) span:first-child").classList.toString();
  const SağBayrakTutucu5 = document.querySelector(".dropdown-content2 span[id]:nth-child(4) span:first-child").classList.toString();
  const SolBirimTutucu5 = (document.querySelector(".dropdown-content span[id]:nth-child(4) span:last-child").textContent).toString();;
  const SağBirimTutucu5 = (document.querySelector(".dropdown-content2 span[id]:nth-child(4) span:last-child").textContent).toString();
  document.querySelector(".dropdown-content span[id]:nth-child(4) span:first-child").classList = "";
  document.querySelector(".dropdown-content span[id]:nth-child(4) span:first-child").classList = SağBayrakTutucu5;
  document.querySelector(".dropdown-content2 span[id]:nth-child(4) span:first-child").classList = "";
  document.querySelector(".dropdown-content2 span[id]:nth-child(4) span:first-child").classList = SolBayrakTutucu5;
  document.querySelector(".dropdown-content span[id]:nth-child(4) span:last-child").textContent = "";
  document.querySelector(".dropdown-content span[id]:nth-child(4) span:last-child").textContent = SağBirimTutucu5;
  document.querySelector(".dropdown-content2 span[id]:nth-child(4) span:last-child").textContent = "";
  document.querySelector(".dropdown-content2 span[id]:nth-child(4) span:last-child").textContent = SolBirimTutucu5;

}
function transactions(Amount) {
  const request = new XMLHttpRequest();
  let to = (document.querySelector(".dropbtn span:last-child").textContent).toString();//sag tutuoyr
  let from = (document.querySelector(".dropbtn2 span:last-child")).textContent.toString();//sol tututyor
  request.open("GET", `https://api.vatcomply.com/rates?base=${from}`);
  request.send();
  request.addEventListener("load", () => {
    const data = JSON.parse(request.responseText);
    const birimler = Object.entries(data.rates);
    let donusturulecekBirimDegeri = "";
    for (let i = 0; i < birimler.length; i++) {
      if (birimler[i][0] == to) {
        donusturulecekBirimDegeri = birimler[i][1].toFixed(3);
      }
    }
    let tutar = `${((Amount / donusturulecekBirimDegeri).toFixed(2))} ${data.base}`;
    document.querySelector(".convertedAmountP").textContent = tutar;
  })
}
