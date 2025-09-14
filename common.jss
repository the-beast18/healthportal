// Get users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '{}');
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Session management
function setSession(username, role) {
    localStorage.setItem('session', JSON.stringify({ username, role }));
}

function getSession() {
    return JSON.parse(localStorage.getItem('session') || 'null');
}

function clearSession() {
    localStorage.removeItem('session');
}
