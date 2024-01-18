//chart
const ctx = document.getElementById("population");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "1991",
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
    ],
    datasets: [
      {
        label: "",
        data: [
          20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 150, 160, 170,
          180,
        ],
        borderWidth: 1,
        backgroundColor: "#F9B572",
        borderColor: "#F9B572",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  },
});

const ctx2 = document.getElementById("temperature");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: [
      "1991",
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
    ],
    datasets: [
      {
        label: "",
        data: [
          20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 150, 160, 170,
          180,
        ],
        borderWidth: 1,
        backgroundColor: "#F9B572",
        borderColor: "#F9B572",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  },
});

//Country-World

document
  .getElementsByClassName("select-selected")[0]
  .setAttribute("onclick", "change()");

function change() {
  var worldCountryOption = document.getElementById(
    "world-country-option"
  ).value;

  const countryInput = document.querySelector(".country-name-input");
  const stateCityCard = document.querySelector(".city-state-container");
  const availCountry = document.querySelector(".avai-container");

  if (worldCountryOption == "world") {
    countryInput.style.display = "none";
    stateCityCard.style.display = "none";
    availCountry.style.display = "none";
  } else {
    countryInput.style.display = "flex";
    stateCityCard.style.display = "flex";
    availCountry.style.display = "flex";
  }
}
