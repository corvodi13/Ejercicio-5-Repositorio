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
export default class Cl_cAgencia {
    mAgencia = new Cl_mAgencia();
    vAgencia;
    cSuscriptor;
    constructor(vistaAgencia, controladorSuscriptor) {
        this.vAgencia = vistaAgencia;
        this.cSuscriptor = controladorSuscriptor;
        // botón nuevo suscriptor
        this.vAgencia.onNuevoSuscriptor(() => this.procesar1Suscriptor());
    }
    // procesa cada persona que se agrega
    procesar1Suscriptor() {
        this.cSuscriptor.solicitarSuscriptor((suscriptor) => {
            if (suscriptor !== null) {
                // guardar en el modelo
                this.mAgencia.agregarSuscriptor(suscriptor);
                // actualizar reporte
                this.vAgencia.reportar(this.mAgencia.porcentajeNoConexion(), this.mAgencia.planFavorito());
                const monto = suscriptor.calcularMonto();
                // agregar al registro visual
                this.vAgencia.agregarRegistro(suscriptor.cedula, monto);
            }
        });
    }
}
//# sourceMappingURL=Cl_cAgencia.js.map