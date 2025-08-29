const hearts = document.getElementsByClassName("heart_icon");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", () => {
    const heartNumber = parseInt(document.getElementById("heart_number").innerText);
    const totalHeart = heartNumber + 1;
    document.getElementById("heart_number").innerText = totalHeart;
  });
}




