export const factionsData = (systemName) =>
fetch(`https://www.edsm.net/api-system-v1/factions?systemName=${systemName}&showHistory=1`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  },
}) .then(res => res.json())
.then(data => data)

export const systemDetails = (systemName) =>
fetch(`https://www.edsm.net/api-system-v1/stations?systemName=${systemName}`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  },
}) .then(res => res.json())
.then(data => data)

export const systemAroundTarget = (systemName) =>
fetch(`https://www.edsm.net/api-v1/sphere-systems?radius=20&systemName=${systemName}`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  },
}) .then(res => res.json())
.then(data => data)
