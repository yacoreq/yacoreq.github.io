const global = document.getElementById("status-global");
const deadsmp = document.getElementById("status-deadsmp");

function getOnlinePlayers(serverIp, serverPort, element) {
  fetch("https://mcapi.us/server/status?ip=" + serverIp + "&port=" + serverPort)
    .then((response) => response.json())
    .then((data) => (element.innerHTML += data.players.now));
}

function getOnlinePlayersMode(serverIp, serverPort, element) {
  fetch("https://mcapi.us/server/status?ip=" + serverIp + "&port=" + serverPort)
    .then((response) => response.json())
    .then(
      (data) =>
        (element.innerHTML = "Online <b>" + data.players.now + "</b> graczy")
    );
}

getOnlinePlayers("54.38.202.210", "25565", global);
getOnlinePlayersMode("54.38.202.210", "13304", deadsmp);
