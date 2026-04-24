import type { IUser } from "../../../types/IUser";
import { getUSer, saveUser } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
const selectRol = document.getElementById("rol") as HTMLSelectElement;
const form = document.getElementById("form") as HTMLFormElement;
const usersJson = getUSer();
const users: IUser[] = usersJson ? (JSON.parse(usersJson) as IUser[]) : [];
console.log(users);

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  const valueRol = selectRol.value;
  
  const existe = users?.some((user) => user.email === valueEmail);

  if(!existe) {
    const user: IUser = {
        email: valueEmail,
        loggedIn: true,
        password: valuePassword,
        role: valueRol as "admin" | "client",
    };
    saveUser(user);
    navigate(`/src/pages/${valueRol}/home/home.html`);
   
  } else {
    alert("El usuario ya existe");
  }
  
});
