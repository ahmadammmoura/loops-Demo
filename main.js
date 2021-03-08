var device = prompt("you want mobile or laptop")

function answer() {
    while (device !== "mobile" && device !== "laptop") {
        device = prompt("you want mobile or laptop")
    }
}

function choose() {
    var item = ''

    if (device == "laptop" || device == "mobile") {
        item = item + device
    }
}


function buy() {
    var numberOfItems = prompt(`how many ${device}s you want`)

    var card = `<div class="card">
                    <img src="/img/${device}.jpg" alt="${device}" style="width:100%">
                    <h1>NOKIA 3310</h1>
                    <p class="title">MOBILE</p>

                </div>`

    for (var i = 1; i <= numberOfItems; i++) {
        document.getElementById("container").innerHTML += card
    }
}


answer()
choose()
buy()