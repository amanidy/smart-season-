//show/hide views,nav logic

const publicPages = ['index.html'];

export default function requireAuth() {
  const path = window.location.pathname.split('/').pop();
  
  if (publicPages.includes(path)) return true;

  const currentUser = localStorage.getItem('currentUser');
  
  if (!currentUser) {
    window.location.replace('index.html');
    return false;
  }

  return true;
}
