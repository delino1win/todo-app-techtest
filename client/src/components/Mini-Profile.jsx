import Logout from "./Logout";

export default function MiniProfile() {

  const getCredentialId = localStorage.getItem("id");

  return (
    <div>
      <div>User {getCredentialId}</div>
      <Logout />
    </div>
  )
}
