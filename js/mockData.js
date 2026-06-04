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
    plantingDate: '2026-01-10',
    stage: 'growing',
    assignedTo: 'u2',
    createdAt: '2026-01-10',
    details: {
      soilType: 'Loamy',
      irrigation: 'Drip',
      notes: 'Germination looking good. Check for armyworm next week.'
    }
  },
  {
    id: 'f2',
    name: 'South Field',
    cropType: 'Beans',
    plantingDate: '2026-02-15',
    stage: 'harvested',
    assignedTo: 'u1',
    createdAt: '2026-02-15',
    details: {
      soilType: 'Sandy loam',
      irrigation: 'Rainfed',
      notes: 'Harvest completed. Yield ~1.2 tons/acre. Ready for next crop.'
    }
  },
  {
    id: 'f3',
    name: 'East Valley',
    cropType: 'Tomatoes',
    plantingDate: '2026-03-01',
    stage: 'ready',
    assignedTo: 'u3',
    createdAt: '2026-03-01',
    details: {
      soilType: 'Clay',
      irrigation: 'Furrow',
      notes: 'Fruits are ripening. Start harvest in 3-4 days.'
    }
  },
  {
    id: 'f4',
    name: 'West Block',
    cropType: 'Potatoes',
    plantingDate: '2026-04-20',
    stage: 'growing',
    assignedTo: 'u2',
    createdAt: '2026-04-20',
    details: {
      soilType: 'Sandy',
      irrigation: 'Sprinkler',
      notes: 'Hilling done. No blight detected so far.'
    }
  },
  {
    id: 'f5',
    name: 'River Plot',
    cropType: 'Rice',
    plantingDate: '2026-05-05',
    stage: 'planting',
    assignedTo: 'u4',
    createdAt: '2026-05-05',
    details: {
      soilType: 'Clayey',
      irrigation: 'Flooded',
      notes: 'Transplanting completed yesterday. Water level stable.'
    }
  },
  {
    id: 'f6',
    name: 'Hilltop Farm',
    cropType: 'Wheat',
    plantingDate: '2026-04-12',
    stage: 'growing',
    assignedTo: '',
    createdAt: '2026-04-12',
    details: {
      soilType: 'Loamy sand',
      irrigation: 'Rainfed',
      notes: 'Unassigned field. Needs supervisor review.'
    }
  }
]


//updates 
export const updates = [
  {
    id: 'upd1',
    fieldId: 'f1',
    agentId: 'u2',
    newStage: 'growing',
    notes: 'Armyworm scouting done. No infestation found. Crop canopy closing well.',
    updatedAt: '2026-01-27T09:15:00'
  },
  {
    id: 'upd2',
    fieldId: 'f3',
    agentId: 'u3',
    newStage: 'ready',
    notes: 'Brix test passed at 5.2. Harvest crew scheduled for tomorrow 6am.',
    updatedAt: '2026-03-28T16:42:00'
  },
  {
    id: 'upd3',
    fieldId: 'f6',
    agentId: 'u1',
    newStage: 'growing',
    notes: 'Field assigned to u2. Soil moisture low, irrigation plan updated.',
    updatedAt: '2026-04-25T11:05:00'
  }
];