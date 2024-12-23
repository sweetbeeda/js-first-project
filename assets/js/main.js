const inputFood = document.getElementById("inputFood");
const response = document.getElementById("response");

const result = document.getElementById("result");

response.addEventListener("click", () => {
  result.innerHTML = inputFood.value;
});
