const button = document.querySelector("article");
const input = document.querySelector("input");
// console.log(article);
console.log(input);
button.addEventListener("click", (e) => {
  if (e.target.innerHTML == "C") {
    input.value = "";
  } else if (e.target.innerHTML === "bs") {
    if (input.value != "") {
      //convert str to array
      let res = input.value.split("");
      res.pop();
      input.value = res.join("");
    }
  } else if (e.target.innerHTML === "=")
    // console.log(e.target.innerHTML);
    try {
      input.value = eval(input.value);
    } catch (e) {
      input.value = "Invalid";
    }
  else {
    input.value += e.target.innerHTML;
  }
});
