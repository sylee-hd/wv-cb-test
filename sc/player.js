shaka.polyfill.installAll();

var video = document.getElementById("v");

video.textTracks = [];
video.addTextTrack = function () {
    return {
        addCue: function () { },
    };
};

var player = new shaka.Player(video);
player.addEventListener("error", onErrorEvent);
window.player = player;

function playUrl(title, url, licenseServer, result) {
    document.getElementById("test-case").textContent =
        "Test Case: " + title;
    document.getElementById("license-server").textContent =
        "License Server URL: " + licenseServer;
    document.getElementById("content-url").textContent =
        "Content URL: " + url;
    document.getElementById("expected-result-value").innerHTML = result;
    document.getElementById("result-value").textContent = "";

    player.configure({
        drm: { servers: { "com.widevine.alpha": licenseServer } },
    });
    player
        .load(url)
        .then(function () {
            video.play();
        })
        .catch(onError);
}

function onErrorEvent(e) {
    onError(e.detail);
}

function onError(error) {
    var codeName = "UNKNOWN";
    for (var k in shaka.util.Error.Code) {
        if (shaka.util.Error.Code[k] == error.code) codeName = k;
    }
    document.getElementById("result-value").textContent =
        "Error code " + error.code + " " + codeName;
}