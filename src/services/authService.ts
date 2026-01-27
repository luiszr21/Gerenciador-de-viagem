import { http } from "../api/http";
import type { LoginInput } from "../types/Auth";

export async function login(data: LoginInput) {
  const response = await http.post("/login", data);
  return response.data;
}
