const load = () => {
  const emergencyHelplines = [
    {
      id: 1,
      name: "National Emergency Number",
      subName: "National Emergency",
      number: "999",
      category: "All",
      imageData: "assets/emergency.png",
    },
    {
      id: 2,
      name: "Police Helpline Number",
      subName: "Police",
      number: "999",
      category: "Police",
      imageData: "assets/police.png",
    },
    {
      id: 3,
      name: "Fire Service Number",
      subName: "Fire",
      number: "999",
      category: "Fire",
      imageData: "assets/fire-service.png",
    },
    {
      id: 4,
      name: "Ambulance Service",
      subName: "Ambulance",
      number: "1994-999999",
      category: "Ambulance",
      imageData: "assets/ambulance.png",
    },
    {
      id: 5,
      name: "Women & Child Helpline",
      subName: "Women & Child Helpline",
      number: "109",
      category: "Women & Child",
      imageData: "assets/coin.png",
    },
    {
      id: 6,
      name: "Anti-Corruption Helpline",
      subName: "Anti-Corruption",
      number: "106",
      category: "Govt.",
      imageData: "assets/heart.png",
    },
    {
      id: 7,
      name: "Electricity Helpline",
      subName: "Electricity Outage",
      number: "16216",
      category: "Electricity",
      imageData: "assets/police.png",
    },
    {
      id: 8,
      name: "Brac Helpline",
      subName: "Brac",
      number: "16445",
      category: "NGO",
      imageData: "assets/brac.png",
    },
    {
      id: 9,
      name: "Bangladesh Railway Helpline",
      subName: "Travel",
      number: "163",
      category: "Travel",
      imageData: "assets/ambulance.png",
    },
  ];

  const card = document.getElementById("card_area");

  for (const item of emergencyHelplines) {
    const createCard = document.createElement("div");
    createCard.innerHTML = `
      <div class="bg-[#dedce7] rounded-lg p-9 h-90 flex flex-col justify-center item-start gap-3 ">
        <div class="flex justify-between items-center">
          <div id="image" class="w-[40px] h-[40px]">
            <img src="${item.imageData}" alt="" />
          </div>
          <div class="">
            <button class="heart_icon cursor-pointer">
              <i class="fa-regular fa-heart text-4xl"></i>
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-center items-start gap-3">
          <h1 id="card_title_${item.id}" class=" text-xl md:text-xl lg:text-2xl font-semibold">${item.name}</h1>
          <p class="text-xl font-semibold text-[#9e9297]">${item.subName}</p>
          <h2 id="call_number_${item.id}" class="text-2xl font-semibold">${item.number}</h2>
          <p class="text-xl font-semibold text-[#9e9297]">${item.category}</p>
        </div>
        <div class="flex justify-between items-center gap-5">
          <button onclick =copyText(${item.number}) class="btn btn-outline btn-success">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
          <button id="call_${item.id}" class="btn btn-active btn-success">
            <i class="fa-solid fa-phone"></i> Call
          </button>
        </div>
      </div>`;
    card.append(createCard);

    document
      .getElementById(`call_${item.id}`)
      .addEventListener("click", () => callfunction(item.id));
  }

  const heart_icons = document.querySelectorAll(".heart_icon");
  let count = 0;
  for (let icon of heart_icons) {
    icon.addEventListener("click", () => {
      const number = document.getElementById("heart_number");
      count++;
      number.innerText = count;
    });
  }
};
load();

const copyText = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied: " + text);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

let callCount = 100;
let history = [];

const callfunction = (id) => {
  const number = document.getElementById("callCount_Number");
  const title = document.getElementById(`card_title_${id}`).innerText;
  const numberCall = document.getElementById(`call_number_${id}`).innerText;

  callCount -= 20;
  if (callCount < 0) {
    alert("Your call star value is less than 0");
    return;
  }

  number.innerText = callCount;
  alert(`Service Name : ${title}\nNumber : ${numberCall}`);

  const date = new Date().toLocaleTimeString();
  const historyObject = { time: date, serviceName: title, number: numberCall };
  history.push(historyObject);

  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";
  for (let item of history) {
    const historyCreateDiv = document.createElement("div");
    historyCreateDiv.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-xl font-bold">${item.serviceName}</h1>
          <p>${item.number}</p>
        </div>
        <div>${item.time}</div>
      </div>`;
    historyDiv.append(historyCreateDiv);
  }

  document.getElementById("clear_btn").addEventListener("click", () => {
    historyDiv.innerHTML = "";
    history = [];
  });
};
