export interface I_vAgencia {

    onNuevoSuscriptor(callback: () => void): void;

    reportar(
        porcentajeNoConexion: number,
        planFavorito: string,
    ): void;

    agregarRegistro(cedula: string, monto: number): void;

}