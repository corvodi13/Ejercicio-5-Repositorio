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