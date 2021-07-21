function changeText(){
    // document.getElementById("myMessage").innerHTML = "Goodbye";
    var myMessage = document.getElementById("myMessage");

    // Change the text of the h1 element
    myMessage.innerHTML = "Goodbye";

    // change a css property by using .style
    myMessage.style.color = "red";

}

function makeHappy() {
    // getElement by Tag name returns a full collection
    // even if there is only 1 element of that type
    var myImage = document.getElementById("image");

    myImage.src = "https://m.media-amazon.com/images/I/51zLZbEVSTL._AC_SL1200_.jpg";
}

function makeSad() {
    var myImage = document.getElementById("image");

    myImage.src = "https://www.kindpng.com/picc/m/82-828486_sad-smileys-png-sad-yellow-smiley-face-transparent.png"
}