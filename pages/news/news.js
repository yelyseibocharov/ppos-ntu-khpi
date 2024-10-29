document.querySelectorAll(".filter--news button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter--news button")
      .forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});
