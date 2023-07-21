document.addEventListener("DOMContentLoaded", function () {
  //key up event
  const fromForm = document.forms["from"];
  const toForm = document.forms["to"];
  fromForm.querySelector("#sendData").addEventListener("keyup", (e) => {
    e.preventDefault();
    calc();
  });

  //convert from
  fromForm.querySelector("select").addEventListener("change", (e) => {
    e.preventDefault();
    fromForm.querySelectorAll("option").forEach((opt) => {
      if (opt.getAttribute("value") == e.target.value) {
        opt.setAttribute("class", "active");
      } else {
        opt.removeAttribute("class");
      }
    });
    calc();
  });

  //Convert to
  toForm.querySelector("select").addEventListener("change", (e) => {
    e.preventDefault();
    toForm.querySelectorAll("option").forEach((opt) => {
      if (opt.getAttribute("value") == e.target.value) {
        opt.setAttribute("class", "active");
      } else {
        opt.removeAttribute("class");
      }
    });
    calc();
  });

  //convert from celcius To Fahrenheit
  function celciusToFahrenheit(temp) {
    return Math.round((temp * 9) / 5 + 32);
  }

  //convert from fahrenheit To Celcius
  function fahrenheitToCelcius(temp) {
    return Math.round((temp - 32) * (5 / 9));
  }

  //determine the convention direction
  function calc() {
    const temp = fromForm.querySelector("#sendData").value;
    fromForm.querySelectorAll("option").forEach((opt) => {
      if (
        opt.hasAttribute("class") &&
        opt.getAttribute("value") == "formCelcius"
      ) {
        toForm.querySelectorAll("option").forEach((element) => {
          if (
            element.hasAttribute("class") &&
            element.getAttribute("value") == "Celcius"
          ) {
            toForm.querySelector("div").textContent = temp;
            console.log("celciusToCelcius");
          } else if (
            element.hasAttribute("class") &&
            element.getAttribute("value") == "fahrenheit"
          ) {
            toForm.querySelector("div").textContent = celciusToFahrenheit(temp);
            console.log("celciusToFahrenheit");
          }
        });
      } else if (
        opt.hasAttribute("class") &&
        opt.getAttribute("value") == "fromFahrenheit"
      ) {
        toForm.querySelectorAll("option").forEach((element) => {
          if (
            element.hasAttribute("class") &&
            element.getAttribute("value") == "Celcius"
          ) {
            toForm.querySelector("div").textContent = fahrenheitToCelcius(temp);
            console.log("fahrenheitToCelcius");
          } else if (
            element.hasAttribute("class") &&
            element.getAttribute("value") == "fahrenheit"
          ) {
            toForm.querySelector("div").textContent = temp;
            console.log("fahrenheitToFahrenheit");
          }
        });
      }
    });
  }
});
