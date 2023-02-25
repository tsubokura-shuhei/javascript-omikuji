const btn = document.getElementById("btn")
const result = document.getElementById("result")

const listBox = ["吉","中吉","小吉"];
let rundoms = ""

btn.addEventListener("click",() => {
  answer = Math.floor(Math.random() * listBox.length)
  result.textContent = listBox[answer]
})