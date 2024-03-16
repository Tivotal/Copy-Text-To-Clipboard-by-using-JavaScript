/* Created by Tivotal */

let copyBtn = document.querySelector(".copy-btn");
let textArea = document.querySelector("textarea");
let title = document.querySelector(".header h2");

copyBtn.addEventListener("click", () => {
  textArea.select();
  navigator.clipboard.writeText(textArea.value);
  copyBtn.innerHTML = `<i class="fas fa-check"></i>`;
  copyBtn.style.background = "lightgreen";
  copyBtn.style.color = "#fff";
  title.textContent = "Text copied to clipboard!";

  setTimeout(() => {
    document.getSelection().removeAllRanges();

    copyBtn.innerHTML = `<i class="fas fa-copy"></i>`;
    copyBtn.style.background = "#eee";
    copyBtn.style.color = "#999";
    title.textContent = "Copy Text to Clipboard";
  }, 2000);
});
