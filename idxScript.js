// `home.html?toName=${}&fromName=${}`

const myForm = document.querySelector("#myForm");
const toName = document.querySelector("#toName");
const fromName = document.querySelector("#fromName");

toName.addEventListener("input", function (e) {
  toName.value = e.target.value;
  myForm.action = `home.html?toName=${e.target.value}&fromName=${fromName.value}`;
  document.querySelector(
    "#myForm > fieldset > a"
  ).href = `home.html?toName=${e.target.value}&fromName=${fromName.value}`;
  // console.log(e.target.value);
});
fromName.addEventListener("input", function (e) {
  fromName.value = e.target.value;
  myForm.action = `home.html?toName=${toName.value}&fromName=${e.target.value}`;
  document.querySelector(
    "#myForm > fieldset > a"
  ).href = `home.html?toName=${toName.value}&fromName=${e.target.value}`;
  // console.log(e.target.value);
});
