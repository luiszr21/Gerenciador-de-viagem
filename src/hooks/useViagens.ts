import {useEffect, useState} from "react";
import {listarViagens} from "../services/viagemService";
import type {Viagem} from "../types/Viagem";

export function useViagens(){
    const [viagens, setViagens] = useState<Viagem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listarViagens()
            .then(setViagens)
            .finally(() => setLoading(false));
    },[])

    return {viagens, loading};
}