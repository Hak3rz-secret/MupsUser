document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Authenticate user (for simplicity, use hardcoded credentials)
    if (username === 'admin' && password === 'admin') {
        fetch('http://localhost:3000/fetch-data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dataDisplay').innerText = data.content;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Invalid credentials');
    }
});
