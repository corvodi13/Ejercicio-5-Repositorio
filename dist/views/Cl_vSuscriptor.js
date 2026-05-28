export default class Cl_vSuscriptor {
    inCedula;
    inPlanes;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inCedula = document.getElementById("suscriptor_inCedula");
        this.inPlanes = document.getElementById("suscriptor_inPlanes");
        this.btCancelar = document.getElementById("suscriptor_btCancelar");
        this.btAceptar = document.getElementById("suscriptor_btAceptar");
        const elementoModal = document.getElementById("suscriptor");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get cedula() {
        return this.inCedula.value;
    }
    get planes() {
        return this.inPlanes.value;
    }
    mostrar() {
        this.inCedula.value = "";
        this.inPlanes.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=Cl_vSuscriptor.js.map