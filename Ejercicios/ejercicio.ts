const equipos = ['R. Madrid', 'Betis', 'Valencia', 'Villareal'];

let  getEnfrentamientos = (equipos: Array<string>) => {
    const [ e1, e2] = equipos; 
    console.log(e1 + " vs " + e2);
    equipos = equipos.reverse();
    const [e3, e4] = equipos;
    console.log(e3 + " vs " + e4);
    console.log(equipos[Math.floor(Math.random()*(equipos.length))] + ' se clasifica');
}

getEnfrentamientos(equipos);