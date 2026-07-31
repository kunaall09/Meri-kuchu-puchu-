const startDate = new Date("2023-01-01T00:00:00");

function unlock() {
  const password = document.getElementById("password").value;

  if (password === "010123") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("main").style.display = "block";
    startTimer();
  } else {
    document.getElementById("wrong").innerHTML =
      "❌ Wrong Password ❤️";
  }
}

function startTimer() {
  setInterval(() => {
    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
      "❤️ Together Since ❤️<br>" +
      days +
      " Days " +
      hours +
      " Hours " +
      minutes +
      " Minutes " +
      seconds +
      " Seconds";
  }, 1000);
}

function yes() {
  alert(
    "❤️ Meri Kuchu Puchu ❤️\n\nHappy Girlfriend's Day ❤️\n\nForever Yours,\nTera Kuchu Puchu 💖"
  );
}
