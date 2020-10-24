// You may wish to find an effective randomizer function on MDN.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArr() {
  const emptyArray = [];
  emptyArray.length = 10;

  for (let i = 0; i < 10; i+=1) {
    let randNum = getRandomInt(243);
    while (emptyArray.includes(randNum) == true) {
      randNum = getRandomInt(243)
    }
    emptyArray[i] = randNum;
  }
  return emptyArray;
}

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // You're going to do your lab work in here. Replace this comment.
      if (document.querySelector('.flex-inner')) {
        document.querySelector('.flex-inner').remove();
      }
      let randArr = getRandomArr();
      const countryList = randArr.map(x => fromServer[x])
      const countryListSorted = countryList.sort((a, b) => sortFunction(b, a, 'name'));
      const ul = document.createElement('ul');
      ul.className = 'flex-inner';
      $('form').prepend(ul);

      countryListSorted.forEach((el, i) => {
        const li =  document.createElement('li');
        $(li).append(`<input type="checkbox" value=${el.code} id=${el.code} />`);
        $(li).append(`<label for=${el.code}>${el.name}</label>`);
        $(ul).append(li);
      })

      console.log('fromServer', fromServer);
     
      console.log(countryListSorted);
    })
    .catch((err) => console.log(err));
});