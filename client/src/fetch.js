import Swal from "sweetalert2"

export const apiUrl = "http://localhost:3000"

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

export async function getListTodo() {
  try {
    const res = await fetch(apiUrl + '/todo');

    // console.log("res: ", res)

    if(!res.ok) return

    const data = await res.json();

    // console.log("data origin: ", data)

    // const taskFiltered = data.filter((item) => item.isDone !== true);

    // console.log("data filtered: ", taskFiltered)

    return data;
  } catch (error) {
    console.error(error);
  }
}