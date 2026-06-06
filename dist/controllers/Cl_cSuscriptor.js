import Cl_mSuscriptor from "../models/Cl_mSuscriptor.js";
import Cl_sSuscriptor from "../services/Cl_sSuscriptor.js";
import Cl_vModal from "../views/Cl_vModal.js";
export default class Cl_cSuscriptor {
    modal = new Cl_vModal();
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // botones del modal
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // pide una persona desde la vista
    solicitarSuscriptor(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    async btAceptarOnClick() {
        const suscriptor = new Cl_mSuscriptor(this.vista.cedula, this.vista.planes);
        this.callback(suscriptor);
        this.vista.ocultar();
        const resultado = await Cl_sSuscriptor.agregar(suscriptor);
        this.modal.mostrar(resultado.mensaje);
    }
}
//# sourceMappingURL=Cl_cSuscriptor.js.map