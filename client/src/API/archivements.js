export const getArchivements = () =>
fetch(`http://localhost:5000/api/archivements`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(res => res.json())
.then(data => data)
