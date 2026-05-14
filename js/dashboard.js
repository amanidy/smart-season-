//stats, overview rendering 


console.log("Hello dashboard!");

const sidebar = document.getElementById('side-nav');

document.getElementById('menu-btn').onclick = () => sidebar.classList.toggle('active');
document.getElementById('close-btn').onclick = () => sidebar.classList.remove('active');

