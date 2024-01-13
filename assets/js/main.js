//Calling The API
// let data = new XMLHttpRequest();

//Get And Parse the data

//Show in UI

//Promises
const decition = new Promise((reslove, reject) => {
  //let resign;

  let resign = true;

  // 3 sec wait
  setTimeout(() => {
    resign = true;
  }, 3000);
  if (resign) {
    reslove("Good Idea");
  } else {
    reject("Bad Idea");
  }
});

decition.then((msg) => {
  console.log(msg);
});

//console.log(decition);
