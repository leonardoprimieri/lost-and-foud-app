export function logOut() {
  localStorage.removeItem('email');
  return (window.location.href = '/');
}

export function isLogged() {
  let email = localStorage.getItem('email');

  return email ? true : false;
}
