let currentInterval;

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }

  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let citiesElement = document.querySelector("#cities");

  // Clear any existing interval
  if (currentInterval) {
    clearInterval(currentInterval);
  }

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <ion-icon size="small" name="arrow-back-circle-outline"></ion-icon><a class="back-link" href="/"> Go Back</a>
  `;

  // Update the time every second
  currentInterval = setInterval(() => {
    cityTime = moment().tz(timeZone);
    citiesElement.querySelector(".date").innerHTML =
      cityTime.format("MMMM Do YYYY");
    citiesElement.querySelector(".time").innerHTML = `${cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }, 1000);
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

setInterval(() => {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);