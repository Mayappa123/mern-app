import Swal from "sweetalert2";

// Common Toast Function
const showToast = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon,
    title,
  });
};

// Delete Toast
export const DeleteToast = () =>
  showToast("success", "Data deleted successfully");

// Edit Toast
export const EditToast = () =>
  showToast("success", "Data updated successfully");
