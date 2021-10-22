var fSesion = document.getElementById('formInicioSesion')

fSesion.addEventListener('submit',function(e){
    e.preventDefault()

    var datos = new FormData(fSesion)
    console.log(datos.get('usuario'))
    console.log(datos.get('contra'))

    var mensaje = document.getElementById("mensaje")

    mensaje.innerHTML = `
            <h4>Datos Correctos</h4>
            <p>Usuario: ${datos.get('usuario')}</p>
            <p>Contraseña: ${datos.get('contra')}</p>
    `
})

var fRegistro = document.getElementById('formRegistro')

fRegistro.addEventListener('submit',function(e){
    e.preventDefault()

    var dat = new FormData(fRegistro)
    console.log(dat.get('nombre'))
    console.log(dat.get('edad'))
    console.log(dat.get('correo'))
    console.log(dat.get('contraRegistro'))

    var men = document.getElementById('men')

    if(dat.get('edad') == "" || dat.get('contraRegistro')=="")
    {
        
        men.innerHTML;
        alert("Faltan datos para poder completar el registro :(");
        
    }
    else
    {
        var mensa = document.getElementById("mensa")

        mensa.innerHTML = `
            <br>
            <h6>Datos Correctos</h6>
            <p>Nombre: ${dat.get('nombre')}</p>
            <p>Edad: ${dat.get('edad')}</p>
            <p>Correo: ${dat.get('correo')}</p>
            <p>Contraseña: ${dat.get('contraRegistro')}</p>
        `
    }
})