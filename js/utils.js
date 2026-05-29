//computeStatus(),helpers

 export default function computeStatus(field) {
  
  if (field.stage === 'harvested') {
    return 'completed'
  }

  
  const planted = new Date(field.plantingDate)
  const today = new Date()
  const daysSincePlanting = (today - planted) / (1000 * 60 * 60 * 24)

  if (field.stage === 'growing' && daysSincePlanting > 90) {
    return 'at_risk'
  }

  
  return 'active'
}