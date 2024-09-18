document.getElementById("switchToggle").addEventListener("change", function() {
    var switchStatus = document.getElementById("switchStatus");
    switchStatus.textContent = this.checked ? "Switch is ON" : "Switch is OFF";
});
