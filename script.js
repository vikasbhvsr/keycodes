const which = document.querySelector(".which");
const code = document.querySelector(".code");
const key = document.querySelector(".key");
const shift = document.querySelector(".shift");
const ctrl = document.querySelector(".ctrl");
const meta = document.querySelector(".meta");
const alt = document.querySelector(".alt");
const keyCodes = document.querySelector(".keyCodes");
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