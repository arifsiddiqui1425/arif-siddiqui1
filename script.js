function closeAll() {
  document.getElementById("posterPopup").style.display = "none";
  document.getElementById("landingPopup").style.display = "none";
  document.getElementById("socialPopup").style.display = "none";
  document.getElementById("uiPopup").style.display = "none";
}

function openPoster() {
  closeAll();
  document.getElementById("posterPopup").style.display = "block";
}

function openLanding() {
  closeAll();
  document.getElementById("landingPopup").style.display = "block";
}

function openSocial() {
  closeAll();
  document.getElementById("socialPopup").style.display = "block";
}

function openUI() {
  closeAll();
  document.getElementById("uiPopup").style.display = "block";
}