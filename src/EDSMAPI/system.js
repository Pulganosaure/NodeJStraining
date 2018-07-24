export const systemData = (systemName) =>
  fetch(`https://www.edsm.net/api-system-v1/factions?systemName=${systemName}&showHistory=1`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  }) .then(res => res.json())
     .then(data => data)
