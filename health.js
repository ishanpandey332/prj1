document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Create a URL with query parameters
    const newPageUrl = `nextpage.html?username=${encodeURIComponent(username)}&age=${age}&gender=${gender}`;
    
    // Redirect to the new page
    window.location.href = 'google.com';
});

// Add functionality to the "Nex" button
document.getElementById('nextPageButton').addEventListener('click', function() {
    window.location.href = 'nextpage.html';
});