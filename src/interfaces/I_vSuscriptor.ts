export interface I_vSuscriptor {

    get cedula(): string;
    get planes(): string;
    

    mostrar(): void;
    ocultar(): void;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;

}