import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "./login.css";
export function Login() {
  const { authenticate, loading, error } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    authenticate(email, senha);
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="container-login">
        <h1 className = "titulo" >Login</h1>
        <input
        className="input-login"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
        className="input-login"
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Senha"
        />
        <button className='botao' type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>

    <div>
      <p>
      </p>
      <p> 
      </p>
    </div>
      {error && <p>{error}</p>}
    </form>
  );
}
