import Cl_mSuscriptor from "../models/Cl_mSuscriptor.js";
export default class Cl_cSuscriptor {
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
    btAceptarOnClick() {
        this.callback(new Cl_mSuscriptor(this.vista.cedula, this.vista.planes));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cSuscriptor.js.map