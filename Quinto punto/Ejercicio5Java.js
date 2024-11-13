// Clase para perfil de usuario
class Usuario {
    constructor(nombre, profesion) {
        this.nombre = nombre;
        this.profesion = profesion;
    }

    mostrarPerfil() {
        console.log(`Nombre: ${this.nombre}, Profesión: ${this.profesion}`);
    }
}

// Instancia de la clase Usuario
const katherine = new Usuario('Katherine Cano', 'Estudiante de Tecnología en Desarrollo de Software');
katherine.mostrarPerfil();

// Clase extendida para añadir habilidades
class Habilidades extends Usuario {
    constructor(nombre, profesion, habilidades) {
        super(nombre, profesion);
        this.habilidades = habilidades;
    }

    mostrarHabilidades() {
        console.log(`Habilidades: ${this.habilidades.join(', ')}`);
    }
}

// Instancia de Habilidades
const habilidadesKatherine = new Habilidades('Juan Fernando Vergara', 'Estudiante de Tecnología en Desarrollo de Software', ['Analitico', 'Liderazgo', 'Estoico']);
habilidadesKatherine.mostrarHabilidades();