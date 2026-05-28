import type { I_vSuscriptor } from "../interfaces/I_vSuscriptor.js";
declare var bootstrap: any;

export default class Cl_vSuscriptor implements I_vSuscriptor {

    private inCedula: HTMLInputElement;
    private inPlanes: HTMLSelectElement;
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private modal: any;


    constructor() {
        this.inCedula = document.getElementById("suscriptor_inCedula") as HTMLInputElement;
        this.inPlanes = document.getElementById("suscriptor_inPlanes") as HTMLSelectElement;

        this.btCancelar = document.getElementById("suscriptor_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("suscriptor_btAceptar") as HTMLButtonElement;

        const elementoModal = document.getElementById("suscriptor");
        this.modal = new bootstrap.Modal(elementoModal);
    }

    get cedula(): string {
        return this.inCedula.value;
    }

    get planes(): string {
        return this.inPlanes.value;
    }
    

    mostrar(): void {
        this.inCedula.value = "";
        this.inPlanes.value = "";
        this.modal.show();
    }

    ocultar(): void {
        this.modal.hide();
    }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }

}