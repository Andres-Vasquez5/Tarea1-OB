class coche {
    constructor(puertas){
        this.puertas = puertas
    }
    sumPuertas() {
      return this.puertas+1;
    }
}


const newCoche = new coche(3);
console.log(newCoche.sumPuertas())

//newCoche.sumPuertas();