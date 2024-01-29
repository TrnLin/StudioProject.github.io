const ctx4 = document.getElementById("main-graph");

new Chart(ctx4, {
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
        borderWidth: 4,
        backgroundColor: "#F9B572",
        borderColor: "#F9B572",
      },
      {
        label: "",
        data: [
          30, 50, 40, 60, 80, 70, 20, 90, 100, 110, 120, 130, 150, 160, 170,
          180,
        ],
        borderWidth: 4,
        backgroundColor: "#EFC65C",
        borderColor: "#EFC65C",
      },
      {
        label: "",
        data: [70, 30, 90, 45, 53, 65, 35, 76, 43, 64, 34, 76, 34, 65, 35],
        borderWidth: 4,
        backgroundColor: "#ff6060",
        borderColor: "#ff6060",
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
