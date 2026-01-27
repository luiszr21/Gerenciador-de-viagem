import { useViagens } from "../hooks/useViagens";

export default function Viagens() {
  const { viagens, loading } = useViagens();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Bem vindo a Agenda de viagens</h1>

      <ul>
        {viagens.map(v => (
          <li key={v.id}>
            {v.titulo} - {v.destino}
          </li>
        ))}
      </ul>
    </div>
  );
}
