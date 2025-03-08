function uploadResume() {
    let fileInput = document.getElementById('resumeInput');
    let statusText = document.getElementById('resumeStatus');

    if (fileInput.files.length > 0) {
        statusText.innerText = "Resume uploaded successfully!";
    } else {
        statusText.innerText = "Please select a file first.";
    }
}
