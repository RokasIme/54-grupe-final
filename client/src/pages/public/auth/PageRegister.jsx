import { useContext } from "react";
import { RegisterForm } from "../../../components/form/RegisterForm";
import { PageTitle } from "../../../components/page-title/PageTitle";
import { UserContext } from "../../../context/user/UserContext";

export function PageRegister() {
  const { isLoggedIn, logout } = useContext(UserContext);

  function handleLogoutClick() {
    fetch("http://localhost:5437/api/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          logout();
        }
      })
      .catch(console.error);
  }

  return (
    <div className="container">
      <PageTitle title="Register" />
      {isLoggedIn ? (
        <>
          <p>
            Einamuoju metu prisijungę vartotojai negali registruoti naujų paskyrų. Norėdami tą atlikti, visų pirma
            atsijunkite nuo esamos paskyros.
          </p>
          <button onClick={handleLogoutClick} className="btn btn-danger">
            Log out
          </button>
        </>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
}
