/**
 * WorkerI: Almacena los datos del trabajador. Sera enviado al API con los datos del trabajador.
 */
export interface WorkerI {
    nombre1: string,
    nombre2: string,
    apellido1: string,
    apellido2: string,
    correo: string,
    contrasena: string,
    rol: string,
    cedula: number

}