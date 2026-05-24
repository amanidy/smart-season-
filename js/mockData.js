//fake DB(users,fields,updates)

export const users = [
  {
    id: 'u1',
    name: 'Coordinator Amani',
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: 'u2',
    name: 'Agent Felix',
    email: 'felix@gmail.com',
    password: 'agent123',
    role: 'agent'
  },
  {
    id: 'u3',
    name: 'Agent Edith',
    email: 'edith@gmail.com',
    password: 'agent345',
    role: 'agent'
  }
]

//fields
export const fields = [
  {
    id: 'f1',
    name: 'North Paddock',
    cropType: 'Maize',
    plantingDate: '2025-01-10',
    stage: 'growing',
    assignedTo: 'u2',
    createdAt: '2025-01-10'
  },
  {
    id: 'f2',
    name: 'South Field',
    cropType: 'Beans',
    plantingDate: '2025-02-15',
    stage: 'harvesting',
    assignedTo: 'u1',
    createdAt: '2025-02-15'
  },
  {
    id: 'f3',
    name: 'East Valley',
    cropType: 'Tomatoes',
    plantingDate: '2025-03-01',
    stage: 'flowering',
    assignedTo: 'u3',
    createdAt: '2025-03-01'
  },
  {
    id: 'f4',
    name: 'West Block',
    cropType: 'Potatoes',
    plantingDate: '2025-04-20',
    stage: 'growing',
    assignedTo: 'u2',
    createdAt: '2025-04-20'
  },
  {
    id: 'f5',
    name: 'River Plot',
    cropType: 'Rice',
    plantingDate: '2025-05-05',
    stage: 'planting',
    assignedTo: 'u4',
    createdAt: '2025-05-05'
  },
  {
    id: 'f6',
    name: 'Hilltop Farm',
    cropType: 'Wheat',
    plantingDate: '2025-06-12',
    stage: 'growing',
    assignedTo: 'u1',
    createdAt: '2025-06-12'
  }
]