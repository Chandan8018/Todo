let interval = '';
function toggleButton(btn, body) {
  if (btn.classList.contains("off")) {
    btn.classList.remove("off");
    btn.classList.add("on");
    if (!interval) {
      interval = setInterval(() => {
        let color1 = randomHexColor();
        let color2 = randomHexColor();
        body.style.background = `linear-gradient(to left top, #${color1}, #${color2})`;
      }, 1500);
    }
    console.log("Turned On: Execute your code here");
  } else {
    btn.classList.remove("on");
    btn.classList.add("off");
    console.log(interval);
    clearInterval(interval);
    interval = '';
    console.log("Turned Off: Execute your code here");
  }
  function randomHexColor() {
    const randomValue = Math.floor(Math.random() * 0xffffff); // Generate a random integer between 0 and 0xffffff
    const hexString = randomValue.toString(16);
    // Pad the string with leading zeros if necessary (optional)
    return hexString.padStart(6, "0");
  }
}

export default toggleButton;
