// Se usará la sintaxis de class dado en ECMAScript-6

class Pokemon {
  constructor(HP, ataque, defensa) {
    this.HP = HP;
    this.ataque = ataque;
    this.defensa = defensa;
    this.mover = "";
    this.nivelar = 1;
    this.tipo = "";
  }

  flight(){
    if(this.movimiento === ""){
      throw new Error("No se especifica ningún movimiento.");
    }
  }

  canFly() {
    if (this.tipo === "") {
      throw new Error("No se especifica ningún tipo."); 
    }

    return this.tipo.includes("flying");// true o false
  }
}

class Charizard extends Pokemon{
  constructor(HP, ataque, defensa, movimiento) {
    super(HP, ataque, defensa);
    this.movimiento = movimiento ;
    this.tipo = "disparar/volar";
  }

  fight(){
    if(this.movimiento != ""){
      console.log("Utilizando el movimiento: ",this.movimiento);
      return this.ataque;
    } else{
      throw new Error("No se especifica ningún movimiento.");
    }
  }
}
