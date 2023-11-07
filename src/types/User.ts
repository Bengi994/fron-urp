import {Role} from "./Role";
import { Catalog } from "./Catalog";

export type User = {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    email: string;
    password: string;
    blocked: boolean;
    role: Role;
    direccion: string;
    zona: string;
    codigo: string;
    escuela: string;
    conferencias: Catalog[];
    
};
