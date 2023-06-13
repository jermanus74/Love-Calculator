const btn = document.querySelector("a");
const results = document.getElementById("status");
const condition = document.getElementById("condition");

const love = function() {
    const name1 = document.querySelector("#name1").value;
    const name2 = document.querySelector("#name2").value;
  
    if (name1.length <= 2) {
        alert('Oops! Enter at least 3 characters for Name 1.');
    } else if (name2.length <= 2) {
        alert('Oops! Enter at least 3 characters for Name 2.');
    } else {
        var random = Math.floor(Math.random() * 100);
        results.innerHTML = `${name1} and ${name2}, =${random}% of love`;
    }
    if(random<=10 || random<=40){
        condition.innerHTML = `OOOPS!GOOD CONDITION 🥰`;
    }if (random>51 || random>100) {
        condition.innerHTML = `wow!! a LOVELY CONDITION 💖🩷💓 `;
    } 
}


   

btn.addEventListener("click", love);
