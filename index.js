window.addEventListener('load', () => {
    registerSW();
});

var button = document.getElementById("click"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Push UP: " + count;
};


async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}