export class Persona {
    constructor(pnombre, papellido, pnota, pemail) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.nota = pnota;
        this.email = pemail;
    }

  /**
   * If the value of the variable nota is greater than or equal to 80, the function returns the string
   * "Aprobado". Otherwise, it returns the string "Reprobado"
   * @returns The value of the expression.
   */
    aprobar() {
        return this.nota >= 80 ? 'Aprobado' : 'Reprobado';
    }

    constructorFromData(data) {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.nota = data.nota;
        this.email = data.email;
    }
}