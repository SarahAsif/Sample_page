const params = new URLSearchParams(window.location.search);
const c = params.get("c");
if (c) {
  document.querySelector(
    `#serviceSelect > option[value="${c}"]`
  ).selected = true;
}
