function copyTxt(text) {
    navigator.clipboard.writeText(text).then(
        () => {
            console.log(`"${text}" successfully copied`);
        },
        () => {
            console.log("Clipboard error");
        }
    );
    const copybtn = document.querySelectorAll("#copyip");
    copybtn.forEach((element) => {
        element.innerText = "Skopiowano";
        setTimeout(() => {
            element.innerText = "SKOPIUJ IP";
        }, 5000);
    });
}