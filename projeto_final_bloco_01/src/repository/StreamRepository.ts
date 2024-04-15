import { AparelhoStreaming } from "../model/AparelhoStreaming";

export interface StreamRepository {

    listarTodos(): void;
    listarPorId(id: number): void;
    cadastrar(produto: AparelhoStreaming): void;
    atualizar(produto: AparelhoStreaming): void;
    deletar(id: number): void;
}
