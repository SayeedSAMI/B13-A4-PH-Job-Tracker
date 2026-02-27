// show button

// interview section

document
  .getElementById("add-to-interview")
  .addEventListener("click", function () {
    const jobNo1 = document.getElementById("job-1");

    const value = jobNo1.innerHTML;
    const newdiv = document.createElement("div");

    newdiv.innerHTML = `
    <div id="all" class="space-y-4">
    ${value}
    </div>
    `;

    const interviewSection = document.getElementById("interview");
    interviewSection.append(newdiv);
  });
