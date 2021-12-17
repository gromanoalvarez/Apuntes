//declaracion de una clase (molde para crear varios objetos)
class Coche {
    //declaracion de su constructor........
    constructor(marca, velocidad, antiguedad) {
        this.marca = marca;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad() { // metodos
        this.velocidad += 1;
    }
    reducirVelocidad() {
        this.velocidad -= 1;
    }
}

//creacion de objetos, llama a su constructor y le pasa parametros para asignacion de valores a las propiedades
var coche0 = new Coche("BMW", 200, 2017);
var coche1 = new Coche("Audi", 100, 2018);
var coche2 = new Coche("Mercedez", 200, 2017);
var coche3 = new Coche("Renault", 200, 2017);

document.write(`<h1>${coche1.marca} Velocidad actual: ${coche1.velocidad}km/hs</h1>`);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write(`<h1>${coche1.marca} Velocidad actual: ${coche1.velocidad}km/hs</h1>`);

console.log(coche1);

// HERENCIA, (extends y super) Crear una clase con las propiedades y metodos de otra clase padre

class Autobus extends Coche {
    constructor(marca, velocidad, antiguedad) {
        super(marca, velocidad, antiguedad); //los parametros que ingresan se los pasa a las propiedades padre
        this.altura = 3; //tambien puedo crear mas propiedades
    }
    mostrarAltura() {
        return "La altura del bus es: " + this.altura;
    }
}

var autobus = new Autobus("Escolar", 110, 2010);
document.write(autobus.mostrarAltura());
document.write(" su antiguedad es " + autobus.antiguedad);
