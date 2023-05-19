import { toast } from "react-toastify";

const toaster = (type, payload) => {
  switch (type) {
    case "error":
      toast.error(payload, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;
    case "success":
      toast.success(payload, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;
    default:
      break;
  }
};
export default toaster;
