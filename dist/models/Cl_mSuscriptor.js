export default class Cl_mSuscriptor {
    _cedula;
    _planes;
    constructor(cedula, planes) {
        this._cedula = cedula;
        this._planes = planes;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set planes(planes) {
        this._planes = planes;
    }
    get planes() {
        return this._planes;
    }
    calcularMonto() {
        const precios = { 'A': 3, 'B': 5, 'C': 10 };
        let total = 0;
        const listaPlanes = this.planes.split(',');
        for (let plan of listaPlanes) {
            plan = plan.trim().toUpperCase();
            if (precios[plan]) {
                total += precios[plan];
            }
        }
        // Aplicar 10% adicional si tiene plan A o B (o ambos)
        const tieneA = listaPlanes.some(p => p.trim().toUpperCase() === 'A');
        const tieneB = listaPlanes.some(p => p.trim().toUpperCase() === 'B');
        if (tieneA || tieneB) {
            total *= 1.10; // 10% extra sobre el total
        }
        return total;
    }
}
//# sourceMappingURL=Cl_mSuscriptor.js.map