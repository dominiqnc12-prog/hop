function getVotes() {
  return {
    alpha: Number(localStorage.getItem("alphaVotes")) || 0,
    que: Number(localStorage.getItem("queVotes")) || 0,
    locked: localStorage.getItem("votingLocked") === "true"
  };
}

function saveVotes(alpha, que) {
  localStorage.setItem("alphaVotes", alpha);
  localStorage.setItem("queVotes", que);
}

function vote(team) {
  const votes = getVotes();

  if (votes.locked) {
    document.getElementById("message").textContent = "Voting is currently locked.";
    return;
  }

  if (localStorage.getItem("hasVoted") === "true") {
    document.getElementById("message").textContent = "You have already voted on this device.";
    return;
  }

  if (team === "alpha") votes.alpha++;
  if (team === "que") votes.que++;

  saveVotes(votes.alpha, votes.que);
  localStorage.setItem("hasVoted", "true");

  updateResults();
  document.getElementById("message").textContent = "Vote submitted.";
}

function updateResults() {
  const votes = getVotes();
  const total = votes.alpha + votes.que || 1;

  const alphaPercent = (votes.alpha / total) * 100;
  const quePercent = (votes.que / total) * 100;

  if (document.getElementById("alphaVotes")) {
    document.getElementById("alphaVotes").textContent = votes.alpha;
    document.getElementById("queVotes").textContent = votes.que;
    document.getElementById("alphaBar").style.width = alphaPercent + "%";
    document.getElementById("queBar").style.width = quePercent + "%";
  }
}

function resetVotes() {
  localStorage.removeItem("alphaVotes");
  localStorage.removeItem("queVotes");
  localStorage.removeItem("hasVoted");
  document.getElementById("adminMessage").textContent = "Votes reset.";
}

function lockVoting() {
  localStorage.setItem("votingLocked", "true");
  document.getElementById("adminMessage").textContent = "Voting locked.";
}

function unlockVoting() {
  localStorage.setItem("votingLocked", "false");
  document.getElementById("adminMessage").textContent = "Voting unlocked.";
}

updateResults();
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

async function submitToSheet(payload) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}
