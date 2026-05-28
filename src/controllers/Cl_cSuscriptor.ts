import Cl_mSuscriptor from "../models/Cl_mSuscriptor.js";
import type { I_vAgencia } from "../interfaces/I_vAgencia.js";
import { I_vSuscriptor } from "../interfaces/I_vSuscriptor.js";

export default class Cl_cSuscriptor {

    private vista: I_vSuscriptor;
    private callback!: (suscriptor: Cl_mSuscriptor | null) => void;

    constructor(vista: I_vSuscriptor) {
        this.vista = vista;

        // botones del modal
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }

    // pide una persona desde la vista
    solicitarSuscriptor(callback: (suscriptor: Cl_mSuscriptor | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btCancelarOnClick(): void {
        this.callback(null);
        this.vista.ocultar();
    }

    private btAceptarOnClick(): void {
        this.callback(
            new Cl_mSuscriptor(
                this.vista.cedula,
                this.vista.planes
            )
        );

        this.vista.ocultar();
    }

}