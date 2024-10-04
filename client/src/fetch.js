import Swal from "sweetalert2"

// "http://localhost:3000"
export const apiUrl = "https://quill-awake-argument.glitch.me"

//handle register dan login menghindari duplikasi
export async function submitUsername (username) {

  let newData = {
    id: username,
    username: username,
    createdAt: new Date().toISOString()
  }

  try {
      const res = await fetch(apiUrl + `/user/${username}`)

      if(res.status === 404) {
        const res = await fetch(apiUrl + `/user`, {
          method: 'post',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData)
        })

        if(!res.ok) {
          return await Swal.fire({
            icon: 'error',
            title: `${res.status}`,
            text: `Error code: ${res.statusText}`
          })
        }

        return newData

      }

      const data = await res.json()

      return data
    
  } catch (error) {
    console.log(error);
  }
}

export async function getListTodo(url, setLoading) {
  try {
    setLoading(true)
    const res = await fetch(url);

    if(!res.ok) return

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false)
  }
}