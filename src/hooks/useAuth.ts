import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { setAuthToken } from "../api/http";

export function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthToken(token);
      navigate("/viagens");
    }
  }, [navigate]);
   
  async function authenticate(email: string, senha: string) {
    try {
      setLoading(true);
      setError(null);

      const { token } = await login({ email, senha });

      localStorage.setItem("token", token);
      setAuthToken(token);

      navigate("/viagens");
    } catch {
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  return { authenticate, loading, error };
}
