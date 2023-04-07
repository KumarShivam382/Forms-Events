
const form = document.querySelector("#form");
const tweetsContainer = document.querySelector('#ulist');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#input");
  const names = document.querySelector("#Tweet");
  
  const bolds = document.createElement('b');
  const list = document.createElement('li');

  bolds.append(`${names.value}`);
  console.log(bolds);

  list.append(`${input.value} - `);
  list.append(bolds);

  console.log(list);
  tweetsContainer.append(list);
  
  input.value = '';
  names.value = '';
});

tweetsContainer.addEventListener('click' , (e) => {
  e.target.nodeName === "LI" && e.target.remove();
})
