function brokenFlow() {
  document.getElementById("brokenOutput").innerHTML = `
    <p>Verification required</p>
    <button onclick="brokenReset()">Continue</button>
  `;
}

function brokenReset() {
  document.getElementById("brokenOutput").innerHTML = `
    <p>Back to search. Profile lost.</p>
  `;
}

function fixedFlow() {
  document.getElementById("fixedOutput").innerHTML = `
    <p>Mia's profile</p>
    <button onclick="showUpgrade()">Message</button>
  `;
}

function showUpgrade() {
  document.getElementById("fixedOutput").innerHTML = `
    <p>Unlock messaging to continue with Mia</p>
    <button>Upgrade</button>
  `;
}