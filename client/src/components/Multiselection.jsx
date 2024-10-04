import { useContext } from "react";
import { SelectedItems } from "../App";
import Swal from "sweetalert2";
import { apiUrl } from "../fetch";
import { MdOutlinePlaylistRemove } from "react-icons/md";


export default function Multiselection() {
  const [selectedItems] = useContext(SelectedItems);

  // console.log("donestatus chosen :", selectedItems)

  async function handleDoneStatus(event) {
    event.preventDefault();

    // const mapping = chosenItems.map(item => console.log(item))
    // console.log(" chosen :", chosenItems)
    // console.log("mapping chosen: ", mapping)

    try {
      const swalResult = await Swal.fire({
        title: `${
          selectedItems.length > 1
            ? `Are ${selectedItems.length} selected tasks finished?`
            : `Is the task finished?`
        }`,
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `Cancel`,
      });

      if (swalResult.isConfirmed) {
        if (selectedItems) {
          const bulkUpdate = selectedItems.map(async (item) => {
            try {
              const res = await fetch(apiUrl + `/todo/${item.id}`, {
                method: "put",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...item,
                  isDone: true,
                }),
              });

              // console.log("res: ", res);
              return res;
            } catch (error) {
              console.error(error);
            }
          });

          console.log("bulkUpdate:", bulkUpdate);

          const res = await Promise.all(bulkUpdate);

          // console.log("resbulk: ", res);

          if (res) {
            await Swal.fire("Task Finished", "", "success");
            window.location.reload();
          }
        } else if (swalResult.isDenied) {
          await Swal.fire("Changes are not saved", "", "info");
        }
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: `${error.message}`,
        icon: "error",
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleDoneStatus} action="">
        <button
          className="bg-sky-500 text-sm p-2 hover:font-medium hover:bg-red-600 hover:shadow-sm hover:ring-1 ring-teal-300 rounded-md transition-all duration-200"
          type="submit"
        >
          <MdOutlinePlaylistRemove fill="white" size={30} />
        </button>
      </form>
    </div>
  );
}
