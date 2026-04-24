import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { getUSer } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
const selectRol = document.getElementById("rol") as HTMLSelectElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const users: IUser[] = JSON.parse(getUSer() || "[]");

  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  const valueRol = selectRol.value as Rol;
console.log(users);

  const user = users.find(
    (u) => u.email === valueEmail && u.password === valuePassword,
  );

  if (user) {
    if (valueRol === "admin") {
      navigate("/src/pages/admin/home/home.html");
    } else if (valueRol === "client") {
      navigate("/src/pages/client/home/home.html");
    }
  } else {
    alert("Credenciales incorrectas");
  }

  const loggedInUser: IUser = {
    email: valueEmail,
    password: valuePassword,
    role: valueRol,
    loggedIn: true,
  };

  const parseUser = JSON.stringify(loggedInUser);
  localStorage.setItem("userData", parseUser);
});
