export const loginApi = async ({email, password}) => {
  const res = await fetch('http://localhost:4000/api/admin/account/login', {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({email, password}),
    credentials: "include"
  })
  
  if(!res.ok) {
    return false;
  }

  const data = res.json();
  return data
}

export const profileApi = async (accessToken) => {
  const res = await fetch('http://localhost:4000/api/admin/account/profile', {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      "Authorization": `${accessToken}`
    },
    credentials: "include"
  })

  if(!res.ok) {
    const data = res.json();
    return data;
  }

  const data = res.json();
  return data;
}