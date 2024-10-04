import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Toast } from "../utils";

export default function Logout() {
  const navigate = useNavigate();

  const getCredentialId = localStorage.getItem("id");

  const logout = () => {
    if (!getCredentialId) {
      Swal.fire({
        icon: "warning",
        title: "You have not login Yet",
      }).then(() => {
        navigate("/auth/login");
      });
    } else {
      Swal.fire({
        title: "Are you sure want to Logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();

          return Toast.fire({
            icon: "success",
            text: "Success Logout",
          }).then((result) => {
            if (result.isDismissed) {
              // window.location.reload();
              navigate(0)
            }
          });
        }
      });
    }
  };

  return (
    <button className="btn max-sm:btn-sm hover:text-red-500 tracking-wider" onClick={logout}>
      Sign Out
    </button>
  );
}
