var device = prompt("you want mobile or laptop")



while(device !== "mobile" && device !== "laptop"){
    device = prompt("you want mobile or laptop")
}


var item = ''

if(device == "laptop" || device == "mobile"){
    item = item+device
}

var numberOfItems = prompt(`how many ${device}s you want` )

var img = `<img src = "https://ahmadammmoura.github.io/loops-Demo/${device}.jpg" width = "150px"  height ="150px"   />` 

for(var i = 1 ; i<=numberOfItems ; i++){
    document.write(img)
}

