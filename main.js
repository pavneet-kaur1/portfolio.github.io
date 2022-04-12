function yesnoCheck() {
  if (document.getElementById("hiring").checked) {
    document.getElementById("hourly-rate").style.display = "inline";
    document.getElementById("rate-label").style.display = "block";
  } else {
    document.getElementById("hourly-rate").style.display = "none";
    document.getElementById("rate-label").style.display = "none";
  }
}

function validate() {
  var radio = document.getElementById("hiring");

  if (hiring.checked) {
    let field = document.getElementById("hourly-rate");
    let input = field.value;

    if (input > 50) {
      document.getElementById("errors").innerHTML = " ";
      document.getElementById("errors").style.display = "none";

      return true;
    } else if (input <= 50) {
      document.getElementById("errors").innerHTML =
        "The hourly rate should be more than $50";
      document.getElementById("errors").style.display = "block";

      return false;
    }
  }

  return true;
}
