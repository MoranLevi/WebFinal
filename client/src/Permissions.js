export function isUserLoggedIn() {
    let UserData = JSON.parse(localStorage.getItem('User'));
    return UserData !== null;
}
