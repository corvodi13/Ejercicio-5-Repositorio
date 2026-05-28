export default class Cl_mAgencia {
    suscriptor = [];
    contNoConexion = 0;
    contPlanA = 0;
    contPlanB = 0;
    contPlanC = 0;
    agregarSuscriptor(s) {
        this.suscriptor.push(s);
        switch (s.planes) {
            case 'A':
                this.contPlanA++;
                this.contNoConexion++;
                break;
            case 'B':
                this.contPlanB++;
                this.contNoConexion++;
                break;
            case 'C':
                this.contPlanC++;
                break;
        }
    }
    porcentajeNoConexion() {
        if (this.suscriptor.length === 0)
            return 0;
        return (this.contNoConexion / this.suscriptor.length) * 100;
    }
    planFavorito() {
        if (this.contPlanA >= this.contPlanB && this.contPlanA >= this.contPlanC) {
            return 'A';
        }
        else if (this.contPlanB >= this.contPlanC) {
            return 'B';
        }
        else {
            return 'C';
        }
    }
}
//# sourceMappingURL=Cl_mAgencia.js.map