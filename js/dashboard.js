//stats, overview rendering 

import {fields} from "../js/mockData.js"



const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sideNav = document.getElementById('side-nav');
const overlay = document.getElementById('overlay');

function openNav() {
  sideNav.classList.add('active');
  overlay.classList.add('active');
}

function closeNav() {
  sideNav.classList.remove('active');
  overlay.classList.remove('active');
}

menuBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);


document.querySelectorAll('#side-nav nav a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('#side-nav nav a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    closeNav();
  });
});


//fields length functionality 
const fieldLengthEl= document.getElementById('fieldLength');
fieldLengthEl.textContent = fields.length;

//functionality to hide no fields yet section 

const stateTextEl = document.querySelector('.state-text');

if(fields.length <=0){
  stateTextEl.style.dispaly = block
} else{
  stateTextEl.style.display = 'none';
  fieldLengthEl.textContent = fields.length;

}


// field list functionality 
function renderFields() {
    const fieldsEl = document.getElementById('list-container');

    if (!fieldsEl) {
      console.log('list-container was not found');
      return;
    }

    fieldsEl.innerHTML = fields.map(field => `
      <div class="field-item">
        <div class="field-name">Field Name: ${field.name}</div>
        <div class="crop-type">Crop type: ${field.cropType}</div>
        <div class="planting-date">Planting Date: ${field.plantingDate}</div>
        <div class="crop-stage">Crop Stage: ${field.stage}</div>
        <div class="assignedTo">Assigned To: ${field.assignedTo}</div>
        
        <button class="view-btn" onclick="handleView(${field.id})">View</button>
        <button class="delete-btn" onclick="handleDelete(${field.id})">Delete</button>
        <button class="assign-btn" onclick="handleAssign(${field.id})">Assign</button>
        <button class="delete-btn" onclick="handleEdit(${field.id})">Edit</button>
        
        
      </div>
    `).join('');
  }
  
  renderFields();


const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const role = currentUser.role;
const name = currentUser.name;

//functionality to display username 
document.querySelector('.header-user').textContent = name;


//logout authentication 
document.getElementById('logout-btn').addEventListener('click',()=> {
  localStorage.removeItem('currentUser');
  window.location.href='index.html'
})



