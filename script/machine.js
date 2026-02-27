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
function add_in_tag(jobId) {
  const job = document.getElementById(jobId);
  const rejectedTag = job.querySelector(".rejected-tag");
  const interviewTag = job.querySelector(".interview-tag");

  rejectedTag.classList.add("hidden");
  interviewTag.classList.remove("hidden");
}

function add_re_tag(jobId) {
  const job = document.getElementById(jobId);
  const rejectedTag = job.querySelector(".rejected-tag");
  const interviewTag = job.querySelector(".interview-tag");

  interviewTag.classList.add("hidden");
  rejectedTag.classList.remove("hidden");
}
function updateCounts() {
  const interviewSection = document.getElementById("interview");
  const rejectedSection = document.getElementById("rejected");

  const interviewCnt =
    interviewSection.querySelectorAll("[id$='-interview']").length;
  const rejectedCnt =
    rejectedSection.querySelectorAll("[id$='-rejected']").length;

  document.getElementById("interview-cnt").innerText = interviewCnt;
  document.getElementById("rejected-cnt").innerText = rejectedCnt;
}
function allSectionDelete(id) {
  const job = document.getElementById(id);
  job.classList.add("hidden");
  const totalCnt = document.getElementById("total-cnt");
  const newCnt = Number(totalCnt.innerText) - 1;
  totalCnt.innerText = newCnt;

  const jobsCntParagraph = document.getElementById("jobs-cnt");
  const newJobCnt = Number(jobsCntParagraph.innerText) - 1;
  jobsCntParagraph.innerText = newJobCnt;

  if (newCnt === 0 || newJobCnt === 0) {
    document.getElementById("all-empty-section").classList.remove("hidden");
    document.getElementById("all-btn").click();
    document.getElementById("reset-btn").classList.remove("hidden");
  }
}

// // add remove tag
// function add_in_tag(jobid) {
//   // const rejectedTag = document.getElementById("rejected-tag");
//   // const interviewTag = document.getElementById("interview-tag");
//   const rejectedTag = jobid.querySelector(".rejected-tag");
//   const interviewTag = jobid.querySelector(".interview-tag");

//   rejectedTag.classList.add("hidden");
//   interviewTag.classList.remove("hidden");
// }
// function add_re_tag(jobid) {
//   // const rejectedTag = document.getElementById("rejected-tag");
//   // const interviewTag = document.getElementById("interview-tag");
//   const interviewTag = jobid.querySelector(".interview-tag");
//   const rejectedTag = jobid.querySelector(".rejected-tag");

//   interviewTag.classList.add("hidden");
//   rejectedTag.classList.remove("hidden");
// }
// for adding to interview section

function addToInterview(id) {
  const removeEmpty = document.getElementById("interview-empty-section");
  removeEmpty.classList.add("hidden");

  const remove = document.getElementById(id + "-rej");
  if (remove) {
    remove.remove();
  }

  const jobNo = document.getElementById(id);
  jobNo.classList.remove("hidden");
  const value = jobNo.innerHTML;
  const newdiv = document.createElement("div");
  newdiv.id = id + "-int";

  newdiv.innerHTML = `
      <div class="border border-[#F1F2F4] p-5 rounded-lg space-y-3 bg-white"> 
    ${value}
    </div>
    `;
  add_in_tag(id);
  newdiv.querySelector(".rejected-tag")?.classList.add("hidden");
  newdiv.querySelector(".interview-tag")?.classList.remove("hidden");

  const interviewSection = document.getElementById("interview");

  // showinfo("interview");
  interviewSection.append(newdiv);
  updateCounts();
  // const interviewCount = document.getElementById("interview-cnt");
  // const newCount = Number(interviewCount.innerText) + 1;
  // interviewCount.innerHTML = newCount;
}

// for adding to rejected section

function addTorejected(id) {
  const removeEmpty = document.getElementById("rejected-empty-section");
  removeEmpty.classList.add("hidden");

  const remove = document.getElementById(id + "-int");
  if (remove) {
    remove.remove();
  }
  const jobNo = document.getElementById(id);

  const value = jobNo.innerHTML;
  const newdiv = document.createElement("div");
  newdiv.id = id + "-rej";

  newdiv.innerHTML = `
      <div class="border border-[#F1F2F4] p-5 rounded-lg space-y-3 bg-white"> 
    ${value}
    </div>
     `;
  add_re_tag(id);

  newdiv.querySelector(".interview-tag")?.classList.add("hidden");
  newdiv.querySelector(".rejected-tag")?.classList.remove("hidden");
  const rejectedSection = document.getElementById("rejected");

  // showinfo("rejected");
  rejectedSection.append(newdiv);
  updateCounts();
  // const rejectedCount = document.getElementById("rejected-cnt");
  // const newCount = Number(rejectedCount.innerText) + 1;
  // rejectedCount.innerHTML = newCount;
}
