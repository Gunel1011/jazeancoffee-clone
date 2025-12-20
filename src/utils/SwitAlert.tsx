import Swal, { type SweetAlertIcon } from "sweetalert2";
interface AlertOptions {
  title?: string;
  text?: string;
  icon?: SweetAlertIcon; // 'string' əvəzinə SweetAlert-in öz tipini istifadə edirik
  showCancel?: boolean;
  confirmText?: string;
  cancelText?: string;
}

const switAlert = ({
  title = "Uğurlu!",
  text = "",
  icon = "success",
  showCancel = false,
  confirmText = "Tamam",
  cancelText = "Ləğv et",
}: AlertOptions = {}) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    draggable: true,
    background: "#5e4c47",
    color: "#fff",
    confirmButtonColor: "#ff652d",
    cancelButtonColor: "#d33",
    showCancelButton: showCancel,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
  });
};

export default switAlert;
