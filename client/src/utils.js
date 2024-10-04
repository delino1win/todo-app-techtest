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

export function formatDate(isoString) {
  const date = new Date(isoString);

  // Convert the ISO string into the format "12 April 2023, 14:30"
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false, // 24-hour format, change to true for 12-hour with AM/PM
  });

  return formattedDate;
}
