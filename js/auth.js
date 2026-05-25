//login,logout,route guard

import {users} from '../js/mockData.js';

const errorMessage = document.getElementById('error-message');
errorMessage.style.display = 'none';

document.getElementById('user-info').addEventListener('submit',(e)=>{
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if(user){
    
    errorMessage.style.display = 'none';
    localStorage.setItem('currentUser',JSON.stringify({
      id:user.id,
      name:user.name,
      role:user.role,
    }))
    
    window.location.href ='dashboard.html'
  } else{
    errorMessage.style.display = 'block';
  }
  
})
