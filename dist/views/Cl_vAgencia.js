export default class Cl_vAgencia {
    lblPorcentajeNoConexion;
    lblPlanFavorito;
    btNuevoSuscriptor;
    lista;
    listaVacia;
    constructor() {
        this.lblPorcentajeNoConexion = document.getElementById("body_lblPorcentajeNoConexion");
        this.lblPlanFavorito = document.getElementById("body_lblPlanFavorito");
        this.btNuevoSuscriptor = document.getElementById("body_btNuevoSuscriptor");
        this.lista = document.getElementById("body_lista");
        this.listaVacia = document.getElementById("body_listaVacia");
    }
    onNuevoSuscriptor(callback) {
        this.btNuevoSuscriptor.onclick = callback;
    }
    // actualiza los resultados del reporte
    reportar(porcentajeNoConexion, planFavorito) {
        this.lblPorcentajeNoConexion.innerHTML = porcentajeNoConexion.toString() + "%";
        this.lblPlanFavorito.innerHTML = planFavorito.toString();
    }
    // agrega cada persona al cuadro de registro
    agregarRegistro(cedula, monto) {
        if (this.listaVacia) {
            this.listaVacia.remove();
            this.listaVacia = null;
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
//# sourceMappingURL=Cl_vAgencia.js.map