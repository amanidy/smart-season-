//stats, overview rendering 

import {fields} from "../js/mockData.js"

console.log(fields)

console.log("Hello dashboard!");

const sidebar = document.getElementById('side-nav');

document.getElementById('menu-btn').onclick = () => sidebar.classList.toggle('active');
document.getElementById('close-btn').onclick = () => sidebar.classList.remove('active');


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

