import Swal from "sweetalert2"
import { nanoid } from 'nanoid';


export function generateNanoid() {
  return nanoid(5); // Generate a nanoid with 5 characters
}


export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});


