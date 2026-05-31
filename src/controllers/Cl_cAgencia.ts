/**NETFLIX
 * Una agencia vende planes de Netflix (A: para 1TV, B: para 2TVs, C: para 5TVs) asi 
 * A = suscripcion $3
 * B = suscripcion $5
 * C = suscripcion $10
 * ademas el suscriptor debe pagar un 10% adicional del valor de la suscripcion 
 * por servicio de conexion (menos el plan , que ya lo incluye). En este sentido se 
 * desea conocer:
 * a. Precio a pagar por cada suscriptor
 * b. Porcentaje de suscriptores que no pagaran servicio de conexion
 * c. Plan favorito
 */

import Cl_mAgencia from "../models/Cl_mAgencia.js";
import type { I_vAgencia } from "../interfaces/I_vAgencia.js";
import Cl_cSuscriptor from "./Cl_cSuscriptor.js";

export default class Cl_cAgencia {

    private mAgencia: Cl_mAgencia = new Cl_mAgencia();
    private vAgencia: I_vAgencia;
    private cSuscriptor: Cl_cSuscriptor;

    constructor(vistaAgencia: I_vAgencia, controladorSuscriptor: Cl_cSuscriptor) {

        this.vAgencia = vistaAgencia;
        this.cSuscriptor = controladorSuscriptor;

        // botón nuevo suscriptor
        this.vAgencia.onNuevoSuscriptor(
            () => this.procesar1Suscriptor()
        );
    }

    // procesa cada persona que se agrega
    private procesar1Suscriptor(): void {

        this.cSuscriptor.solicitarSuscriptor((suscriptor) => {

            if (suscriptor !== null) {

                // guardar en el modelo
                this.mAgencia.agregarSuscriptor(suscriptor);

                // actualizar reporte
                this.vAgencia.reportar(
    
                    this.mAgencia.porcentajeNoConexion(),
                    this.mAgencia.planFavorito(),

                );
                const monto = suscriptor.calcularMonto();
                // agregar al registro visual
                this.vAgencia.agregarRegistro(
                    suscriptor.cedula,
                    monto

                );
            }

        });

    }

}