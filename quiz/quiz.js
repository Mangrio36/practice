const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d58ddb8cfbmsh126e6d03322f2f1p12f43bjsn15cb86d6c87d",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

fetch("https://covid-19-statistics.p.rapidapi.com/regions", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d58ddb8cfbmsh126e6d03322f2f1p12f43bjsn15cb86d6c87d",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

fetch(
  "https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const opions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d58ddb8cfbmsh126e6d03322f2f1p12f43bjsn15cb86d6c87d",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

fetch(
  "https://covid-19-statistics.p.rapidapi.com/reports?iso=Pak&region_name=Pakistan&date=2022-11-16",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
