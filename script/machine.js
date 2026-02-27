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

function addToInterview(id) {
  const removeEmpty = document.getElementById("interview-empty-section");
  removeEmpty.classList.add("hidden");

  const jobNo1 = document.getElementById(id);

  const value = jobNo1.innerHTML;
  const newdiv = document.createElement("div");

  newdiv.innerHTML = `
      <div class="border border-[#F1F2F4] p-5 rounded-lg space-y-3 bg-white"> 
    ${value}
    </div>
    `;

  const interviewSection = document.getElementById("interview");
  interviewSection.append(newdiv);
}
