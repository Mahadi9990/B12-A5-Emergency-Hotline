// history

let callHistory = [
    {
        title : "hellow",
        date : "10.40 AM"
    }
]


// add hearts

const hearts = document.getElementsByClassName("heart_icon");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", () => {
    const heartNumber = parseInt(document.getElementById("heart_number").innerText);
    const totalHeart = heartNumber + 1;
    document.getElementById("heart_number").innerText = totalHeart;
  });
}

// call section

const calls = document.getElementsByClassName("call");

for (let i = 0; i < calls.length; i++) {
    calls[i].addEventListener("click", () => {
      const reduceNumber =parseInt(document.getElementById("callCount_Number").innerText)
      if(reduceNumber <= 0){
        alert("Your are not able to make a call Star count value is less than 0")
        return
      }
      const totalreduceNumber = reduceNumber - 20
      document.getElementById("callCount_Number").innerText = totalreduceNumber;
      alert('HELLOW')
      const data ={
        title:calls[i],
        date: new Date().toLocaleTimeString()
      }
      callHistory.push(data)
    });
}

// History

const historyContailer = document.getElementById("history")
for(const item of callHistory){
    const div = document.createElement('div')
    div.innerHTML = `<div class="flex flex-row justify-between">
              <div class="title">
                <h1 class="text-2xl">Fireservice</h1>
                <p>${data.title}</p>
              </div>
              <div class="time">${item.date}</div>
            </div>`
            historyContailer.appendChild(div)
}

// clear History

document.getElementById("clear_btn").addEventListener('click',()=>{
    callHistory = null
})


