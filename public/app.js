// app.js

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        const htmlResume = await response.text();
        document.getElementById('result').innerHTML = htmlResume;
    } else {
        document.getElementById('result').innerHTML = 'Error generating resume.';
    }
});
