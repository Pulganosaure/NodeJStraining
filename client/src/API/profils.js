export const getUserList = () =>
fetch(`http://localhost:5000/api/profils/users_list`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(res => res.json())
.then(data => data)
