window.onload = function () {
}

const buttonOne = document.querySelector("button");
buttonOne.addEventListener("click", function () {
    console.log(`you have clicked a button`);

});

const buttonTwo = document.getElementById("too");

const hello = document.getElementsByClassName("hello")[0];
buttonTwo.addEventListener("click", function () {
    hello.appendChild('p');
    p.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback)."
});
