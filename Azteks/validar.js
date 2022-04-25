var validar = function(){
    
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var colonia = document.getElementById("colonia").value;
        var razones = document.querySelectorAll(".razones").value;
        var mensaje = document.getElementById("mensaje").value;

        razones.forEach((e)=>{
            if(e.checked == true){
                console.log(e.value);
            }
        });
        
        console.log(nombre);
        console.log(correo);
        console.log(telefono);
        console.log(colonia);
        console.log(razones);
        console.log(mensaje);
    }
    

    //https://www.youtube.com/watch?v=DzXu6Y_SoMc