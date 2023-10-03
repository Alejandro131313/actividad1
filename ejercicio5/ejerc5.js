const USUARIOS = ["pepe", "paco", "juan", "benito", "manuel"];
const CONTRASEÑAS = ["12345", "23456", "09876", "67890", "666666"];

function existeLogin(usuario) {
    for (let i = 0; i < USUARIOS.length; i++) {
        if (USUARIOS[i] === usuario) {
            return true;
        }
    }
    return false;
}

function passwordCorrecto(usuario, password) {
    const indice = USUARIOS.indexOf(usuario);
    if (CONTRASEÑAS[indice] === password) {
        return true;
    }
    return false;
}

let intentos = 5;

while (intentos > 0) {
    const usuario = prompt("Ingrese usuario: ");
    const password = prompt("Ingrese contraseña: ");

    if (existeLogin(usuario)) {
        
        if (passwordCorrecto(usuario, password)) {
            console.log("El usuario y la contraseña son correctas");
            break;

        } else {
            console.log("El usuario o la contraseña son incorrectos");
        }
    } else {
        console.log("El usuario no existe.");
    }

    intentos--;

    if (intentos > 0) {
        console.log("Quedan" + intentos + "intentos");
    } else {
        console.log("No quedan más intentos.");
    }
}

console.log("Fin");