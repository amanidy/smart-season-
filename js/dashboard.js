//stats, overview rendering 
import {fields} from "../js/mockData.js"
import computeStatus from "../js/utils.js"
import requireAuth from "../js/router.js"

requireAuth();

// Nav open/close
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

// Map data-view to your actual ids
const VIEW_MAP = {
  dashboard: 'dashboard-view',
  list: 'list-view',
  fieldAdd: 'fieldAdd-view',
  fieldDetails: 'viewDetails', // your actual id
  agents: 'viewDetails'
};

function showView(viewName){
  if(!viewName) return;

  // Hide all views
  document.querySelectorAll('.view, .viewDetails').forEach(v => v.classList.add('hidden'));

  // Show target
  const targetId = VIEW_MAP[viewName];
  const targetView = document.getElementById(targetId);
  if(targetView){
    targetView.classList.remove('hidden');
  }
}

// ONE click handler for sidebar links - handles active + showView + closeNav
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const viewName = link.closest('li').getAttribute('data-view');
    showView(viewName);
    closeNav();
  })
})

// Show dashboard on load
showView('dashboard');
renderFields();
updateStats();

// fields length functionality 
function updateStats() {
  const fieldValue = document.querySelector('.value');
  if(fieldValue) fieldValue.textContent = fields.length;

  const fieldLengthEl = document.getElementById('fieldLength');
  if(fieldLengthEl) fieldLengthEl.textContent = fields.length;

  // hide "no fields yet" text
  const stateTextEl = document.querySelector('.state-text');
  if(stateTextEl){
    if(fields.length <= 0){
      stateTextEl.style.display = 'block'; // fixed typo + quotes
    } else {
      stateTextEl.style.display = 'none';
    }
  }

  // assigned fields count
  const assignedFields = fields.filter(f => f.assignedTo && f.assignedTo.trim() !== '')
  const assignedCount = document.getElementById('assignedCount')
  if(assignedCount) assignedCount.textContent = assignedFields.length;
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
      <div class="status">Status: ${computeStatus(field)}</div>
      
      <button class="view-btn" onclick="handleView('${field.id}')">View</button>
      <button class="delete-btn" onclick="handleDelete('${field.id}')">Delete</button>
      <button class="assign-btn" onclick="handleAssign('${field.id}')">Assign</button>
      <button class="delete-btn" onclick="handleEdit('${field.id}')">Edit</button>
    </div>
  `).join('');
}

// username + logout
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(currentUser){
  document.querySelector('.header-user').textContent = currentUser.name;
}

document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html'
})

// selected field details - now uses .hidden class instead of style.display
window.handleView = (id) => {
  const selectedField = fields.find(f => f.id === id);
  if(selectedField){
    document.getElementById('detail-crop').textContent = selectedField.cropType;
    document.getElementById('detail-stage').textContent = selectedField.stage;
    document.getElementById('detail-date').textContent = selectedField.plantingDate;
    document.getElementById('detail-name').textContent = selectedField.name;
    document.getElementById('detail-notes').textContent = selectedField.details.notes;
    document.getElementById('detail-soil').textContent = selectedField.details.soilType;
    document.getElementById('detail-irrigation').textContent = selectedField.details.irrigation;

    showView('fieldDetails'); // use showView instead of style.display
  } else {
    alert('Field not found')
  }
}

// dummy handlers so buttons don't crash
window.handleDelete = (id) => console.log('Delete', id)
window.handleAssign = (id) => console.log('Assign', id)
window.handleEdit = (id) => console.log('Edit', id)