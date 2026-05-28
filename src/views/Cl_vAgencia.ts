import type { I_vAgencia } from "../interfaces/I_vAgencia.js";

export default class Cl_vAgencia implements I_vAgencia {

    private lblPorcentajeNoConexion: HTMLElement;
    private lblPlanFavorito: HTMLElement;
    private btNuevoSuscriptor: HTMLButtonElement;
    private lista: HTMLElement;
    private listaVacia: HTMLElement;

    constructor() {

        this.lblPorcentajeNoConexion = document.getElementById("body_lblPorcentajeNoConexion") as HTMLElement;
        this.lblPlanFavorito = document.getElementById("body_lblPlanFavorito") as HTMLElement;
        this.btNuevoSuscriptor = document.getElementById("body_btNuevoSuscriptor") as HTMLButtonElement;
        this.lista = document.getElementById("body_lista") as HTMLElement;
        this.listaVacia = document.getElementById("body_listaVacia") as HTMLElement;
    }

    onNuevoSuscriptor(callback: () => void): void {
        this.btNuevoSuscriptor.onclick = callback;
    }

    // actualiza los resultados del reporte
    reportar(
        porcentajeNoConexion: number,
        planFavorito: string,
    ): void {
        this.lblPorcentajeNoConexion.innerHTML = porcentajeNoConexion.toString() + "%";
        this.lblPlanFavorito.innerHTML = planFavorito.toString();
    }

    // agrega cada persona al cuadro de registro
    agregarRegistro(cedula: string, monto: number): void {
        if (this.listaVacia) {
            this.listaVacia.remove();
            this.listaVacia = null as any;
        }

        

        this.lista.innerHTML += `
            <div class="card mb-2 shadow-sm border-0">
                <div class="card-body border-start border-4 border-primary">
                    <b>Cedula: ${cedula}</b><br>
                    Monto a pagar: ${monto.toFixed(2)}
                </div>
            </div>
        `;
    }

}