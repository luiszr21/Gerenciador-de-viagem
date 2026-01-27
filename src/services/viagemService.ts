import { http } from "../api/http";
import type { Viagem } from "../types/Viagem";

export async function listarViagens(): Promise<Viagem[]> {
  const response = await http.get<Viagem[]>("/viagens");
  return response.data;
}
