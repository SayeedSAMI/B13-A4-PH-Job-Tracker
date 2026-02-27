// show div after toggle button clicked


function showinfo(id) {
  const all = document.getElementById("all");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");

  all.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");

  const clicked = document.getElementById(id);
  clicked.classList.remove("hidden");
}

