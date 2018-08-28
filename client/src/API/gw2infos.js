export const getCLassIcon = (className) =>
fetch(`http://localhost:5000/api/gwinfos/classIcons/${className}`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  },
}).then(res => res.json())
.then(data => data)
