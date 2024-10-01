//Calling The API
// let data = new XMLHttpRequest();

//Get And Parse the data

//Show in UI

//Promises
const decition = new Promise((reslove, reject) => {
  //let resign;

  let resign = false;

  // 3 sec wait
  /* setTimeout(() => {
    resign = true;
  }, 3000); */
  if (resign) {
    reslove({ id: 1, result: "" });
  } else {
    reject("Bad Idea");
  }
});

decition
  .then((msg) => {
    console.log(msg);
  })
  .catch((reject) => {
    console.log(` Error : ${reject}`);
  })
  .finally(() => {
    console.log(` Finally You did It`);
  });

//console.log(decition);

const adviceEl = document.querySelector("#advice");

const API_URL = "https://api.adviceslip.com/advice";
const refreshBtnEl = document.querySelector(".refreshBtn");
const adviceCardEl = document.querySelector(".advice-card");

async function getAdvices() {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Some network error: ", error);
  }
}

(async () => {
  const adviceData = await getAdvices();
  adviceEl.textContent = adviceData.slip.advice;
})();

refreshBtnEl.addEventListener("click", () => {
  getAdvices().then((newAdvice) => {
    console.log(newAdvice);
    adviceEl.textContent = newAdvice.slip.advice;
  });
});
