//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook(event) {
    event.preventDefault();

    // Get values from input fields
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const isbn = document.getElementById('isbn').value.trim();

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append row to table body
    document.getElementById('book-list').appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event delegation for delete buttons
document.getElementById('book-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.parentElement.remove();
    }
});
