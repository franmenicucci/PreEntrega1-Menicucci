


    nombre = prompt("¡Bienvenido al simulador de Modo Carrera - Jugador de Fútbol! Prepárate para tomar decisiones que afectarán tu carrera en el mundo del fútbol. Ingresa el nombre con el que quieras iniciar este recorrido.");

    while (nombre === " " || nombre === null) {
        nombre = prompt("Vamos! Debes ingresar tu nombre para poder comenzar con tu carrera futbolística.");
    }

    alert("Te doy una cálida bienvenida al Modo Carrera, " + nombre + "!");
    alert("Es hora de que elijas un camino para iniciar tu carrera como futbolista. Tu carrera, tus propias decisiones. Cada una de ellas te llevará al éxito o al fracaso. Confía en tu instinto. Sigamos.");
    
    function choice() {
      do{
        posicionElegida = Number(prompt("Ahora dime en que posicion del campo te gustaria jugar: \n1. Delantero  \n2. Mediocampista  \n3. Defensor  \n4. Arquero "))

      } while (posicionElegida !== 1 && posicionElegida !==2 && posicionElegida !==3 && posicionElegida !==4) 
            return posicionElegida
        
    }
    
    const miPosicion = choice()
    if (miPosicion === 1) {
        alert("Has seleccionado la opcion de Delantero")
    } else if (miPosicion === 2) {
        alert("Has seleccionado la opcion de Mediocampista")
    } else if (miPosicion === 3) {
        alert("Has seleccionado la opcion de Defensor")
    }  else if (miPosicion=== 4) {
        alert("Has seleccionado la opcion de Arquero")
    }
       


    alert("Llegó el día, " + nombre + ". Tienes dos ofertas sobre la mesa.");

    function decision() {
        do {
            tuCamino = Number(prompt("1. Unirte a un club grande en una liga competitiva, donde no tendrás muchos minutos de juego pero un gran salario.\n2. Unirte a un club más pequeño con un entrenador reconocido por desarrollar talento, donde tendrás más minutos de juego pero ganarás menos dinero."));
        } while (tuCamino !== 1 && tuCamino !== 2)

        return tuCamino;
    }

    const caminoElegido = decision();
    if (caminoElegido === 1) {
        alert("Has decidido unirte a un club grande. Prepárate para enfrentar los desafíos y las expectativas.");
    } else if (caminoElegido === 2) {
        alert("Has decidido unirte a un club más pequeño. ¡Tu talento y dedicación te llevarán lejos!");
    } 

    
    
    
    function clubesProyeccion(){
        
        if (tuCamino === 2){
            do {
                clubProyeccion= Number(prompt("Los clubes con proyeccion que buscan un jugador con tus caracteristicas, " + nombre + "son los siguientes: \n1. Brighton \n2. Atalanta \n3. Talleres de Cordoba"))
               } while (clubProyeccion !== 1 && clubProyeccion !== 2 && clubProyeccion !== 3)
    
           return clubProyeccion
        
            }
        }
        

    const clubSeleccionado = clubesProyeccion()
    if (clubSeleccionado === 1){
        alert("Tomaste la decision de fichar por el Brighton! Felicitaciones, " + nombre)
    } else if (clubSeleccionado === 2){
        alert("Tomaste la decision de fichar por el Atalanta! Felicitaciones, " + nombre)
    } else if (clubSeleccionado === 3){
        alert("Tomaste la decision de fichar por Talleres de Cordoba! Felicitaciones, " + nombre)
    }
    
    
    
    
    function clubesGrandes() {
         
        if (tuCamino === 1 ){
            do {
                clubGrandeElegido= Number(prompt("Los clubes grandes que buscan un jugador con tus caracteristicas, " + nombre + " son los siguientes: \n1. Chelsea \n2. Ajax  \n3. Boca Juniors"))
               } while (clubGrandeElegido !== 1 && clubGrandeElegido !== 2 && clubGrandeElegido !== 3)
   
           return clubGrandeElegido
   
           }
        }
       

    const clubElegido = clubesGrandes()
    if (clubElegido === 1){
        alert("Tomaste la decision de fichar por el Chelsea! Felicitaciones, " + nombre)
    } else if (clubElegido === 2){
        alert("Tomaste la decision de fichar por el Ajax! Felicitaciones, " + nombre)
    } else if (clubElegido === 3){
        alert("Tomaste la decision de fichar por Boca Juniors! Felicitaciones, " + nombre)  
    }



    mensaje = alert("¿Que sucedera con la carrera de tu jugador? Proximamente en la segunda entrega")








   