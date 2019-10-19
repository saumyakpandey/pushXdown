window.addEventListener('load', () => {
    registerSW();
});

var button = document.getElementById("click"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Push UP: " + count;
};

// function gdPrac() {
//     if (count = 3) {
//         alert("Rabbit number " + i);
//         // else {

//         // }
//     }
// };

window.onload = function () {
    var today = new Date();
    var timeDisp = today.getHours() + ":" + today.getMinutes();
    var time = new Date().getHours();
    var greeting;
    if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("timing").innerHTML = greeting + timeDisp;
}

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}
