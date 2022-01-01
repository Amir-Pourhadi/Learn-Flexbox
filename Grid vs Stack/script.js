$("a.stack").on("click", () => {
  $("article").addClass("stack");
});

$("a.grid").on("click", () => {
  $("article").removeClass("stack");
});
