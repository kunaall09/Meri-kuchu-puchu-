function unlock() {
    let pass = document.getElementById("password").value;

    if (pass === "010123") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("main").style.display = "block";
        updateTimer();
    } else {
        document.getElementById("wrong").innerHTML = "❌ Wrong Password";
    }
}

const startDate = new Date("2023-01-01T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `❤️ Together for ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    setTimeout(updateTimer, 1000);
}

function yes() {
    alert("❤️ I Love You Forever Meri Kuchu Puchu ❤️");
}
