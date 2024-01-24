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
const select1 = document.getElementsByClassName("select-selected")[0];

select1.setAttribute("onclick", "change()");

var worldCountryOption = document.getElementById("world-country-option").value;
const stateCityCard = document.querySelector(".city-state-container");
const availCountry = document.querySelector(".avai-container");
const formSetupWorld = document.querySelector("#world-search-bar");
const formSetupCountry = document.querySelector("#country-search-bar");

if (worldCountryOption == "world") {
  availCountry.style.display = "none";
  stateCityCard.style.display = "none";
  formSetupWorld.style.display = "flex";
  formSetupCountry.style.display = "none";
} else {
  stateCityCard.style.display = "flex";
  availCountry.style.display = "flex";
  formSetupWorld.style.display = "none";
  formSetupCountry.style.display = "flex";
}

function change() {
  var worldCountryOption = document.getElementById(
    "world-country-option"
  ).value;
  const stateCityCard = document.querySelector(".city-state-container");
  const availCountry = document.querySelector(".avai-container");
  const formSetupWorld = document.querySelector("#world-search-bar");
  const formSetupCountry = document.querySelector("#country-search-bar");
  const additionalInfo = document.querySelector(".add-info-container");

  if (worldCountryOption == "world") {
    availCountry.style.display = "none";
    stateCityCard.style.display = "none";
    formSetupWorld.style.display = "flex";
    formSetupCountry.style.display = "none";
    additionalInfo.style.display = "none";
  } else if (worldCountryOption == "country") {
    stateCityCard.style.display = "flex";
    availCountry.style.display = "flex";
    formSetupWorld.style.display = "none";
    formSetupCountry.style.display = "flex";
    additionalInfo.style.display = "flex";
  }
}

//default value

const startYear = document.querySelector("#start-year");
const endYear = document.querySelector("#end-year");
const countryStartYear = document.querySelector("#country-start-year");
const countryEndYear = document.querySelector("#country-end-year");

var i = 0;

for (i = 0; i < 2; i++) {
  startYear.value = null;
  endYear.value = null;
  countryStartYear.value = null;
  countryEndYear.value = null;
}

//alert

function validate() {
  var startYear = document.getElementById("start-year");
  var endYear = document.getElementById("end-year");
  var countryStartYear = document.getElementById("country-start-year");
  var countryEndYear = document.getElementById("country-end-year");
  var input = document.getElementById("country-input");

  var countryValid = input.validity;
  var startYearValid = startYear.validity;
  var endYearValid = endYear.validity;
  var countryStartYearValid = countryStartYear.validity;
  var countryEndYearValid = countryEndYear.validity;

  if (
    countryValid.valueMissing ||
    startYearValid.valueMissing ||
    endYearValid.valueMissing ||
    countryStartYearValid.valueMissing ||
    countryEndYearValid.valueMissing
  ) {
    const alert = document.querySelector(".alert");
    alert.style.display = "flex";
    setTimeout(() => {
      const alert = document.querySelector(".alert");
      alert.style.display = "none";

      // 👇️ hides element (still takes up space on page)
      // box.style.visibility = 'hidden';
    }, 3000);
  }

  const countryStartYearValue = countryStartYear.value;
  const countryEndYearValue = countryEndYear.value;

  if (countryStartYearValue < 1750 || countryEndYearValue > 2013) {
    const alert = document.querySelector(".alert");
    const alertContent = document.querySelector(".alert-content");
    alertContent.innerHTML = "Please enter a year between 1750 and 2013";
    alert.style.display = "flex";
    setTimeout(() => {
      const alert = document.querySelector(".alert");
      alert.style.display = "none";

      // 👇️ hides element (still takes up space on page)
      // box.style.visibility = 'hidden';
    }, 3000);
  }
  input.reportValidity();
}

//Countries table sorting and filtering

document
  .getElementsByClassName("select-selected")[1]
  .setAttribute("onclick", "ascDescOrder()");

document
  .getElementsByClassName("select-selected")[2]
  .setAttribute("onclick", "ascDescOrder()");

function ascDescOrder() {
  const orderCountries = document.querySelector("#order-countries").value;
  const popuTempOrder = document.querySelector("#popu-temp-order").value;

  if (orderCountries == "dsc") {
    if (popuTempOrder == "popu") {
      const dscPopu = document.querySelector("#available-country-popu-desc");
      const dscTemp = document.querySelector("#available-country-temp-desc");
      const ascPopu = document.querySelector("#available-country-popu-asc");
      const ascTemp = document.querySelector("#available-country-temp-asc");

      dscPopu.style.display = "block";
      dscTemp.style.display = "none";
      ascPopu.style.display = "none";
      ascTemp.style.display = "none";
    } else if (popuTempOrder == "temp") {
      const dscPopu = document.querySelector("#available-country-popu-desc");
      const dscTemp = document.querySelector("#available-country-temp-desc");
      const ascPopu = document.querySelector("#available-country-popu-asc");
      const ascTemp = document.querySelector("#available-country-temp-asc");

      dscPopu.style.display = "none";
      dscTemp.style.display = "block";
      ascPopu.style.display = "none";
      ascTemp.style.display = "none";
    }
  } else if (orderCountries == "asc") {
    if (popuTempOrder == "popu") {
      const dscPopu = document.querySelector("#available-country-popu-desc");
      const dscTemp = document.querySelector("#available-country-temp-desc");
      const ascPopu = document.querySelector("#available-country-popu-asc");
      const ascTemp = document.querySelector("#available-country-temp-asc");

      dscPopu.style.display = "none";
      dscTemp.style.display = "none";
      ascPopu.style.display = "block";
      ascTemp.style.display = "none";
    } else if (popuTempOrder == "temp") {
      const dscPopu = document.querySelector("#available-country-popu-desc");
      const dscTemp = document.querySelector("#available-country-temp-desc");
      const ascPopu = document.querySelector("#available-country-popu-asc");
      const ascTemp = document.querySelector("#available-country-temp-asc");

      dscPopu.style.display = "none";
      dscTemp.style.display = "none";
      ascPopu.style.display = "none";
      ascTemp.style.display = "block";
    }
  }
}

//City state table soring and filtering

document
  .getElementsByClassName("select-selected")[3]
  .setAttribute("onclick", "cityState()");

document
  .getElementsByClassName("select-selected")[4]
  .setAttribute("onclick", "cityState()");

document
  .getElementsByClassName("select-selected")[5]
  .setAttribute("onclick", "cityState()");

const hideDefault = document.querySelectorAll(".list-container table");

hideDefault.forEach((hideDefault) => {
  hideDefault.style.display = "none";
});

const defaultCityState = document.querySelector("#state-avg-asc");
defaultCityState.style.display = "block";

function cityState() {
  const cityStateOtion = document.querySelector("#city-state").value;
  const cityStateSort = document.querySelector("#city-state-sorting").value;
  const minMaxAvg = document.querySelector("#max-min-avg-sorting").value;

  if (cityStateOtion == "city") {
    const city = document.querySelectorAll(".city");
    const state = document.querySelectorAll(".state");

    city.forEach((city) => {
      city.style.display = "block";
    });
    state.forEach((state) => {
      state.style.display = "none";
    });

    if (cityStateSort == "asc") {
      const asc = document.querySelectorAll(".city.asc");
      const dsc = document.querySelectorAll(".city.desc");

      asc.forEach((asc) => {
        asc.style.display = "block";
      });
      dsc.forEach((dsc) => {
        dsc.style.display = "none";
      });

      if (minMaxAvg == "min") {
        const min = document.querySelector(".city.asc.min");
        const max = document.querySelector(".city.asc.max");
        const avg = document.querySelector(".city.asc.avg");

        min.style.display = "block";
        max.style.display = "none";
        avg.style.display = "none";
      } else if (minMaxAvg == "max") {
        const min = document.querySelector(".city.asc.min");
        const max = document.querySelector(".city.asc.max");
        const avg = document.querySelector(".city.asc.avg");

        min.style.display = "none";
        max.style.display = "block";
        avg.style.display = "none";
      } else if (minMaxAvg == "avg") {
        const min = document.querySelector(".city.asc.min");
        const max = document.querySelector(".city.asc.max");
        const avg = document.querySelector(".city.asc.avg");

        min.style.display = "none";
        max.style.display = "none";
        avg.style.display = "block";
      }
    } else if (cityStateSort == "dsc") {
      const asc = document.querySelectorAll(".city.asc");
      const dsc = document.querySelectorAll(".city.desc");

      asc.forEach((asc) => {
        asc.style.display = "none";
      });
      dsc.forEach((dsc) => {
        dsc.style.display = "block";
      });

      if (minMaxAvg == "min") {
        const min = document.querySelector(".city.desc.min");
        const max = document.querySelector(".city.desc.max");
        const avg = document.querySelector(".city.desc.avg");

        min.style.display = "block";
        max.style.display = "none";
        avg.style.display = "none";
      } else if (minMaxAvg == "max") {
        const min = document.querySelector(".city.desc.min");
        const max = document.querySelector(".city.desc.max");
        const avg = document.querySelector(".city.desc.avg");

        min.style.display = "none";
        max.style.display = "block";
        avg.style.display = "none";
      } else if (minMaxAvg == "avg") {
        const min = document.querySelector(".city.desc.min");
        const max = document.querySelector(".city.desc.max");
        const avg = document.querySelector(".city.desc.avg");

        min.style.display = "none";
        max.style.display = "none";
        avg.style.display = "block";
      }
    }
  } else if (cityStateOtion == "state") {
    const city = document.querySelectorAll(".city");
    const state = document.querySelectorAll(".state");

    city.forEach((city) => {
      city.style.display = "none";
    });
    state.forEach((state) => {
      state.style.display = "block";
    });

    if (cityStateSort == "asc") {
      const asc = document.querySelectorAll(".state.asc");
      const dsc = document.querySelectorAll(".state.desc");

      asc.forEach((asc) => {
        asc.style.display = "block";
      });
      dsc.forEach((dsc) => {
        dsc.style.display = "none";
      });

      if (minMaxAvg == "min") {
        const min = document.querySelector(".state.asc.min");
        const max = document.querySelector(".state.asc.max");
        const avg = document.querySelector(".state.asc.avg");

        min.style.display = "block";
        max.style.display = "none";
        avg.style.display = "none";
      } else if (minMaxAvg == "max") {
        const min = document.querySelector(".state.asc.min");
        const max = document.querySelector(".state.asc.max");
        const avg = document.querySelector(".state.asc.avg");

        min.style.display = "none";
        max.style.display = "block";
        avg.style.display = "none";
      } else if (minMaxAvg == "avg") {
        const min = document.querySelector(".state.asc.min");
        const max = document.querySelector(".state.asc.max");
        const avg = document.querySelector(".state.asc.avg");

        min.style.display = "none";
        max.style.display = "none";
        avg.style.display = "block";
      }
    } else if (cityStateSort == "dsc") {
      const asc = document.querySelectorAll(".state.asc");
      const dsc = document.querySelectorAll(".state.desc");

      asc.forEach((asc) => {
        asc.style.display = "none";
      });
      dsc.forEach((dsc) => {
        dsc.style.display = "block";
      });

      if (minMaxAvg == "min") {
        const min = document.querySelector(".state.desc.min");
        const max = document.querySelector(".state.desc.max");
        const avg = document.querySelector(".state.desc.avg");

        min.style.display = "block";
        max.style.display = "none";
        avg.style.display = "none";
      } else if (minMaxAvg == "max") {
        const min = document.querySelector(".state.desc.min");
        const max = document.querySelector(".state.desc.max");
        const avg = document.querySelector(".state.desc.avg");

        min.style.display = "none";
        max.style.display = "block";
        avg.style.display = "none";
      } else if (minMaxAvg == "avg") {
        const min = document.querySelector(".state.desc.min");
        const max = document.querySelector(".state.desc.max");
        const avg = document.querySelector(".state.desc.avg");

        min.style.display = "none";
        max.style.display = "none";
        avg.style.display = "block";
      }
    }
  }
}
