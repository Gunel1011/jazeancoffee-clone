import Swal from 'sweetalert2';
const switAlert = () => {

    Swal.fire({
        title: "Payment Successful",
        icon: "success",
        draggable: true,
        background: "#5e4c47",
        color: "#fff",
        confirmButtonColor: "#ff652d",
    });
};

export default switAlert;