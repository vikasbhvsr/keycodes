let which = document.querySelector(".which");
let code = document.querySelector(".code");
let key = document.querySelector(".key");
let shift = document.querySelector(".shift");
let ctrl = document.querySelector(".ctrl");
let meta = document.querySelector(".meta");
let alt = document.querySelector(".alt");
let keyCodes = document.querySelector(".keyCodes");
document.querySelector("body").addEventListener("keydown", event => {
  event.preventDefault();

  which.innerHTML = `${event.which}`;
  code.innerHTML = `${event.code}`;
  key.innerHTML = `${event.key}`;
  shift.innerHTML = `${event.shiftKey}`;
  ctrl.innerHTML = `${event.ctrlKey}`;
  alt.innerHTML = `${event.altKey}`;
  meta.innerHTML = `${event.metaKey}`;
});