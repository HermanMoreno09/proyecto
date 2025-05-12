import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";  


function AuthForm() {
  const [modo, setModo] = useState("login");
  const [formData, setFormData] = useState({ nombre: "", correo: "", contrasena: "" });
  const navigate = useNavigate();

  const showAlerta = (title, text, icon = "info") => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 3000, 
      timerProgressBar: true,
      showConfirmButton: false, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = modo === "registro"
      ? "http://localhost:8000/auth/register"
      : "http://localhost:8000/auth/login";

    const payload = modo === "registro"
      ? formData
      : { correo: formData.correo, contrasena: formData.contrasena };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      showAlerta("¡Éxito!", data.message, "success");

      if (modo === "login") {
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        navigate("/dashboard");
      } else if (modo === "registro") {
        // Limpiar los campos después del registro
        setFormData({ nombre: "", correo: "", contrasena: "" });
        // Cambiar a login después de un registro exitoso
        setModo("login");
      }
    } catch (error) {
      if (error.message.includes("Correo o contraseña incorrectos")) {
        showAlerta("Error de autenticación", "El correo o la contraseña son incorrectos.", "error");
      } else {
        showAlerta("Error", error.message, "error");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="text-center text-dark">
          {modo === "login" ? "Iniciar sesión" : "Registro"}
        </h2>
        <form onSubmit={handleSubmit}>
          {modo === "registro" && (
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary w-100 mb-3">
            {modo === "login" ? "Ingresar" : "Registrar"}
          </button>
        </form>
        <button className="btn btn-outline-light w-100" onClick={() => setModo(modo === "login" ? "registro" : "login")}>
          Cambiar a {modo === "login" ? "Registro" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
