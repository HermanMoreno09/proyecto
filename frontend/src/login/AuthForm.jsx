import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";  

// Definir la URL base del backend (mejor si lo pones en variables de entorno)
const API_BASE_URL = "const API_BASE_URL = "https://backend-n8hs.onrender.com";


function AuthForm() {
  const [modo, setModo] = useState("login");
  const [formData, setFormData] = useState({ nombre: "", correo: "", contrasena: "" });
  const navigate = useNavigate();

  // ... (keep the rest of your existing code until handleSubmit)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = modo === "registro"
      ? `${API_BASE_URL}/auth/register`
      : `${API_BASE_URL}/auth/login`;

    const payload = modo === "registro"
      ? formData
      : { correo: formData.correo, contrasena: formData.contrasena };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // ... (rest of your existing handleSubmit code)
    } catch (error) {
      // ... (keep your existing error handling)
    }
  };

  // ... (keep the rest of your component code)
}

export default AuthForm;
