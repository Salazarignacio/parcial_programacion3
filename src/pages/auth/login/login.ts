import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { getUsersLocalStorage } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
/* const selectRol = document.getElementById("rol") as HTMLSelectElement; */

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const users: IUser[] = getUsersLocalStorage() || [];

  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  /* const valueRol = selectRol.value as Rol; */
  console.log(users);

  const user = users.find(
    (u) => u.email === valueEmail && u.password === valuePassword,
  );

  if (user) {
    const loggedInUser: IUser = {
      email: valueEmail,
      password: valuePassword,
      role: user.role,
      loggedIn: true,
    };

    const parseUser = JSON.stringify(loggedInUser);
    localStorage.setItem("userData", parseUser);
    if (user.role === "admin") {
      navigate("/src/pages/admin/home/home.html");
    } else if (user.role === "client") {
      navigate("/src/pages/client/home/home.html");
    }
  } else {
    alert("Credenciales incorrectas");
  }
});
