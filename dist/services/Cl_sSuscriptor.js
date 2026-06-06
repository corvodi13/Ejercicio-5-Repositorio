import Cl_sProyecto from "./Cl_sProyecto.js";
export default class Cl_sSuscriptor extends Cl_sProyecto {
    /**
       * Verifica si existe un suscriptor con la cédula indicada
       */
    static async existe(suscriptorId) {
        return super.existeId({
            tabla: "suscriptor",
            tablaId: suscriptorId,
            tablaIdName: "cedula",
        });
    }
    /**
       * Agrega un nuevo suscriptor con validaciones completas
       * @param nuevoSuscriptor - Objeto Cl_mSuscriptor a guardar
       * @returns Promise con resultado de la operación
       */
    static async agregar(nuevoSuscriptor) {
        // ✅ VALIDACIÓN 1: Datos básicos obligatorios
        if (Number(nuevoSuscriptor.cedula) <= 0) {
            return {
                ok: false,
                mensaje: "La cédula debe ser un número positivo",
            };
        }
        if (!nuevoSuscriptor.planes || nuevoSuscriptor.planes.trim() === "") {
            return {
                ok: false,
                mensaje: "El plan a cotizar es obligatorio",
            };
        }
        // ✅ VALIDACIÓN 2: Verificar unicidad de cédula (solo un quiz por estudiante)
        const chkExiste = await super.existeId({
            tabla: "suscriptor",
            tablaId: Number(nuevoSuscriptor.cedula),
            tablaIdName: "cedula",
        });
        if (!chkExiste.ok) {
            return {
                ok: false,
                mensaje: "Error: No se pudo conectar con el servidor",
            };
        }
        if (chkExiste.existe) {
            return {
                ok: false,
                mensaje: "Ya existe un quiz registrado con esa cédula",
            };
        }
        // ✅ VALIDACIÓN 3: Guardar en MockAPI
        return super.agregar(nuevoSuscriptor.toJSON());
    }
}
//# sourceMappingURL=Cl_sSuscriptor.js.map