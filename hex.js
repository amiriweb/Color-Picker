const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    let randomIndex = Math.floor((Math.random()*hex.length));
    hexColor += hex[randomIndex];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});


function randomHexGenerator() {
  let hexColor = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
