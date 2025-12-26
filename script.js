function checkURL() {
    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if (url === "") {
        result.innerHTML = "Please enter a URL";
        result.style.color = "red";
        return;
    }

    let risk = 0;

    // Rule 1: No https
    if (!url.startsWith("https://")) {
        risk++;
    }

    // Rule 2: URL too long
    if (url.length > 75) {
        risk++;
    }

    // Rule 3: Suspicious symbols
    if (url.includes("@") || url.includes("-")) {
        risk++;
    }

    // Rule 4: IP address in URL
    let ipPattern = /\d+\.\d+\.\d+\.\d+/;
    if (ipPattern.test(url)) {
        risk++;
    }

    if (risk === 0) {
        result.innerHTML = "URL looks SAFE";
        result.style.color = "green";
    } else if (risk <= 2) {
        result.innerHTML = "URL looks SUSPICIOUS";
        result.style.color = "orange";
    } else {
        result.innerHTML = "URL is DANGEROUS";
        result.style.color = "red";
    }
}