import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import axios from "axios";

function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);
  const [error, setError] = useState("");

  const resetPasswordURL = "http://localhost:4000/api/resetPasword";
  const sendEmailURL = "http://localhost:4000/api/newPassword";

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      await axios.post(resetPasswordURL, { email });
      setIsCodeSubmitted(true);
      setError("");
    } catch (error) {
      setError("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    }
  };

  const handleSubmitCode = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("La contraseña y la confirmación de contraseña no coinciden.");
      return;
    }

    try {
      await axios.post(sendEmailURL, { code, newPassword });
      window.location.href = "/authentication/sign-in";
    } catch (error) {
      setError("Ocurrió un error al cambiar la contraseña. Por favor, intenta nuevamente más tarde.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card sx={{ padding: 4, width: "300px" }}>
        <SoftBox textAlign="center" mb={2}>
          <SoftTypography variant="h5" fontWeight="medium">
            Recuperar Contraseña
          </SoftTypography>
        </SoftBox>
        <SoftBox component="form" role="form" onSubmit={isCodeSubmitted ? handleSubmitCode : handleSubmitEmail}>
          {!isCodeSubmitted && (
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </SoftBox>
          )}
          {isCodeSubmitted && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Código"
                  className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </>
          )}
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
          <SoftButton type="submit" variant="gradient" color="dark" fullWidth>
            {isCodeSubmitted ? "Cambiar Contraseña" : "Enviar Correo de Recuperación"}
          </SoftButton>
          <SoftBox textAlign="center" mt={2}>
            <SoftTypography variant="body2" color="text" fontWeight="regular">
              ¿Recuerdas tu contraseña?&nbsp;
              <SoftTypography component={Link} to="/authentication/sign-in" variant="body2" color="primary" fontWeight="bold">
                Inicia Sesión
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Card>
    </div>
  );
}

export default PasswordRecovery;
