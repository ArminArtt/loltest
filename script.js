function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById("copyMsg");
    msg.textContent = `"${text}" copied to clipboard!`;
    setTimeout(() => msg.textContent = "", 2200);
  });
}