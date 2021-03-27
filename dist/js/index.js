const mainColor = "hsl(176, 50%, 47%)";

// Bookmark
const bookmarkBtn = document.querySelector(".bookmark");
const rightBtn = document.querySelector(".right-btn");
const bookMarkText = document.querySelector(".bookmark-text");
const circle = document.querySelector(".circle");
const icon = document.querySelector(".bookmark-icon");

bookmarkBtn.addEventListener("click", function () {
  bookMarkText.innerHTML = "Bookmarked";
  rightBtn.classList.toggle("bookmarked");
  circle.style.fill = mainColor;
  icon.style.fill = "#fff";

  if (!rightBtn.classList.contains("bookmarked")) {
    bookMarkText.innerHTML = "Bookmark";
    circle.style.fill = "#2F2F2F";
    icon.style.fill = "#B1B1B1";
  }
});

// Modal

// Show and hide modal
const modal = document.getElementById("modal");
const backProjectBtn = document.querySelector(".left-btn");
const closeBtn = document.querySelector(".close-btn");
const getStarted = document.getElementById("get-started");

getStarted.addEventListener("click", function () {
  modal.style.display = "block";
});

backProjectBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Show modal pledge footer

const radioBtns = document.querySelectorAll('input[name="radio"]');
const pledgeFooters = document.querySelectorAll(".modal-pledge-footer");
const pledgeBlocks = document.querySelectorAll(".modal-pledge-block");

for (const btn of radioBtns) {
  btn.addEventListener("click", function () {
    switch (btn.value) {
      case "no-reward":
        hideModalPledgeFooter();
        pledgeFooters[0].style.display = "flex";
        break;
      case "bamboo":
        hideModalPledgeFooter();
        pledgeFooters[1].style.display = "flex";
        break;
      case "black":
        hideModalPledgeFooter();
        pledgeFooters[2].style.display = "flex";

        break;
      case "mahogany":
        hideModalPledgeFooter();
        pledgeFooters[3].style.display = "flex";
    }
  });

  isSelected(btn);
}

function hideModalPledgeFooter() {
  for (const footer of pledgeFooters) {
    footer.style.display = "none";
  }
}

function isSelected(radio) {
  radio.addEventListener("click", function () {
    for (let i of radioBtns) {
      if (i.checked) {
        i.parentElement.parentElement.style.borderColor = mainColor;
      } else {
        i.parentElement.parentElement.style.borderColor = "hsl(0, 0%, 90%)";
      }
    }
  });
}

// Logic

// Update stats
let totalMoney = 89914;
let totalBackers = 5007;

const totalBackersElement = document.getElementById("total-backers");
const totalMoneyElement = document.getElementById("total-money");

const submitBtns = document.querySelectorAll('input[type="submit"]');
const inputs = document.querySelectorAll('input[type="text"]');
const progressBar = document.getElementById("progress");

const successModal = document.getElementById("success-modal");
const successBtn = document.getElementById("success-btn");

for (btn of submitBtns) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    totalBackers = totalBackers + 1;
    let formattedBackers = new Intl.NumberFormat("en-US").format(totalBackers);
    totalBackersElement.textContent = formattedBackers;

    totalMoney = totalMoney + getInputValue();

    let formattedMoney = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(totalMoney);

    totalMoneyElement.textContent = formattedMoney;
    // console.log(getInputValue());
    progressBar.value = progressBar.value + getInputValue() / 1000;
    let x = progressBar.value.toFixed(5);
    progressBar.value = x;

    for (input of inputs) {
      input.value = null;
    }

    modal.style.display = "none";

    // Success Modal

    successModal.style.display = "block";

    successBtn.addEventListener("click", function () {
      successModal.style.display = "none";
    });
  });
}

function getInputValue() {
  for (input of inputs) {
    if (input.value > 0) {
      return parseInt(input.value);
    }
  }
  return (inputs[0].value = 0);
}

// Fixed reward

const bambooReward = document.getElementById("bamboo-reward");
const blackReward = document.getElementById("black-reward");
const bambooPledgesLeft = document.querySelector(".bamboo-left");
const blackPledgesLeft = document.querySelector(".black-left");
let bambooLeft = 101;
let blackLeft = 64;

bambooReward.addEventListener("click", function () {
  bambooLeft = bambooLeft - 1;
  bambooPledgesLeft.textContent = bambooLeft;

  totalBackers = totalBackers + 1;
  let formattedBackers = new Intl.NumberFormat("en-US").format(totalBackers);
  totalBackersElement.textContent = formattedBackers;

  totalMoney = totalMoney + 25;
  let formattedMoney = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(totalMoney);
  totalMoneyElement.textContent = formattedMoney;

  progressBar.value = progressBar.value + 25 / 1000;
  let x = progressBar.value.toFixed(5);
  progressBar.value = x;

  successModal.style.display = "block";

  successBtn.addEventListener("click", function () {
    successModal.style.display = "none";
  });
});

blackReward.addEventListener("click", function () {
  blackLeft = blackLeft - 1;
  blackPledgesLeft.textContent = blackLeft;

  totalBackers = totalBackers + 1;
  let formattedBackers = new Intl.NumberFormat("en-US").format(totalBackers);
  totalBackersElement.textContent = formattedBackers;

  totalMoney = totalMoney + 75;
  let formattedMoney = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(totalMoney);
  totalMoneyElement.textContent = formattedMoney;

  progressBar.value = progressBar.value + 75 / 1000;
  let x = progressBar.value.toFixed(5);
  progressBar.value = x;

  successModal.style.display = "block";

  successBtn.addEventListener("click", function () {
    successModal.style.display = "none";
  });
});

// Show mobile menu

const menuBtn = document.querySelector(".mobile-menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuShow = document.querySelector(".show");
const menuClose = document.querySelector(".close");
const logo = document.querySelector(".logo");
const navItemBtns = document.querySelectorAll(".nav-item-btn");

menuShow.addEventListener("click", function () {
  menuNav.style.display = "block";
  menuShow.style.display = "none";

  menuClose.style.display = "block";
  menuClose.style.zIndex = "2";
  menuClose.style.position = "fixed";

  logo.style.zIndex = "2";
  logo.style.position = "fixed";
});

menuClose.addEventListener("click", function () {
  menuNav.style.display = "none";
  menuShow.style.display = "block";
  menuClose.style.display = "none";
});

for (const navBtn of navItemBtns) {
  navBtn.addEventListener("click", function () {
    if (window.innerWidth < 576) {
      menuNav.style.display = "none";
      menuClose.style.display = "none";
      menuShow.style.display = "block";
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    menuNav.classList.add("show-menu");
  } else {
    menuNav.classList.remove("show-menu");
  }
});
