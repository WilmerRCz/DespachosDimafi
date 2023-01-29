import { useState } from "react";
import axios from "axios"


function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

    function submitData() {
      axios
        .post("http://localhost:3000/api/v1/login", {
          correo: correo,
          contrasena: contrasena,
        })
        .then((response) => {
          console.log(response.data);
        });
      }

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

      const user = await submitData()

  };
  return (
    <><h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Correo"
          onChange={({ target }) => setCorreo(target.value)}
        />
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="Contraseña"
          onChange={({ target }) => setContrasena(target.value)}
        />
        <button>Iniciar Sesión</button>
      </form>
    
    </>
  )
}

export default Login