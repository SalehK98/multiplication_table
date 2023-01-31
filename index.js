const numOne = document.getElementById("num1")
const numTwo = document.getElementById("num2")
const button = document.querySelector("button")
const form = document.getElementById("form")
const table = document.getElementById("myTable")
const tableDiv = document.getElementById("tableDiv")

form.addEventListener("submit", makeTable)
let tds


function makeTable(event) {
    event.preventDefault()
    let num1 = parseInt(numOne.value)
    let num2 = parseInt(numTwo.value)

    table.innerHTML = ""
    numOne.value = ""
    numTwo.value = ""
    document.getElementById("click_a_number").style.visibility = "visible"
    for (let i = 1; i < num1 + 1; i++) {
        // const td1 = document.createElement("td")
        // td1.setAttribute("row", `${i}`)
        // td1.setAttribute("column", `1`)
        // td1.innerText = i
        // tr.appendChild(td1)
        const tr = document.createElement("tr")
        for (let j = 1; j < num2 + 1; j++) {
            const td = document.createElement("td")
            td.setAttribute("row", `${i}`)
            td.setAttribute("column", `${j}`)
            td.innerText = i * j
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

}


table.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.getAttribute("row") === null) {
        alert("click only one")
    } else {
        const span = document.getElementById("clickedTD")
        span.innerText = event.target.getAttribute("row") + "  x  " + event.target.getAttribute("column") + " = " + event.target.innerText
    }
})



