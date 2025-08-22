export const loginApi = async ({email, password}) => {
  const res = await fetch('http://localhost:4000/api/admin/account/login', {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({email, password})
  })
  
  if(!res.ok) {
    return false;
  }

  const data = res.json();
  return data
}