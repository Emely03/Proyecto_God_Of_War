let products = [
    {
        nombre:"Vaso Cervezero God Of War",
        precio:80000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/VASO1.jpg?alt=media&token=05b2014d-016c-41e5-8537-5c6fe593f650','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/VASO2.jpg?alt=media&token=a9941a74-2bd8-44ae-8a9a-3808cffda571']
    },
    {
        nombre: "Figura Kratos y Arterius",
        precio:150000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/figu1%20-%20copia.jpg?alt=media&token=4c8e4a37-503d-4e9c-ad63-e765fe0d5f66','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/figu2%20-%20copia.jpg?alt=media&token=63ab1943-2a64-4c1a-b84a-4495b87bc86d']
    },
    {
        nombre: "Figura god Of War Kratos",
        precio:200000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/kratos2.jpg?alt=media&token=f6ccc526-396b-40cf-b2fb-d5e944f52b89','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/kratos1.jpg?alt=media&token=6561b9d4-c5bb-4d1f-97e6-84e453e8cb9f']
    },
    {
        nombre: "Figura saga God Of War",
        precio:500000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/figuras1.jpg?alt=media&token=3fc67e27-0e7a-454a-ab52-5b18e5bcc90f','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/figuras2.jpg?alt=media&token=17a87b36-da9d-4fdd-9967-75de6f5aeb89']
    },
    {
        nombre:"Camiseta Hombre Kratos",
        precio:50000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/camisa1%20-%20copia.jpg?alt=media&token=5c859961-b0aa-4ad2-ab1f-f72adf2c16e8','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/camisa2.jpg?alt=media&token=5d90b265-c288-4e72-b7a5-fa593af88782']
    },
    {
        nombre: "Espadas juguete Kratos",
        precio:130000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/espada1.jpg?alt=media&token=82cecaae-cbe4-4daa-816d-83b5d6503968','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/espada2.jpg?alt=media&token=a232cd18-57da-4c2e-99e7-35a57408b704']
    },
    {
        nombre: "Gorra color negro Kratos",
        precio:200000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/gorra1.jpg?alt=media&token=7aba8817-383a-4952-8ad5-2221ad8b8d38','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/gorra2.jpg?alt=media&token=aada06bd-1353-4b46-a7db-ceae8d535267']
    },
    {
        nombre: "Figura Zeus God Of War",
        precio:100000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/zeus1.jpg?alt=media&token=1b5fd5ce-b961-453a-b4f9-a960562b29d2','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/zeus2.jpg?alt=media&token=333e3ff2-8595-45b3-b987-568a845a3086']
    }
    
]
let fila=document.getElementById("fila")

//recorrer el arreglo
products.forEach(function(producto){
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "h-100", "text-center","w-100","p-3")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid", "w-100", "h-100")
    foto.src=producto.fotos[0]

    let nombre=document.createElement("h5")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h5")
    precio.classList.add("fw-bold")
    precio.textContent='$'+producto.precio

    //detectando eventos, cuando pasa el mouse por la imagen muestra la siguiente
    foto.addEventListener("mouseover", function(){
        foto.src=producto.fotos[1]   
    })
    //cuando pasa el mouse vuelve a la imagen anterior
    foto.addEventListener("mouseleave", function(){
        foto.src=producto.fotos[0]   
    })

    //Padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})


let products2 = [
    {
        nombre:" Juego God of War I: Chains of Olympus ",
        precio:120000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/Pelicula1.jpg?alt=media&token=64f5c138-08ac-4f11-8c68-4c067c9825ef','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/Pelicula11.jpg?alt=media&token=41cc7ea2-d9d9-499f-9991-798563fa84f6']
    },
    {
        nombre: "Juego God of War II:  Ghost of Sparta",
        precio:120000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/Pelicula2.jpg?alt=media&token=952126fa-c03b-4a94-977d-badf9853776d','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/Pelicula22.jpg?alt=media&token=442d0a24-1eb7-4580-b70d-02872b643609']
    },
    {
        nombre: "Juego God of War III: Gods (2010)",
        precio:200000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/pelicula3.jpg?alt=media&token=88602351-cf10-48f4-ada5-45379822121a','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/pelicula33.jpg?alt=media&token=511cc59c-460e-48d9-8fa5-f8fea79e88ab']
    },
    {
        nombre: "juego God of War IV: Ascension (2013)",
        precio:250000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/pelicula4.jpg?alt=media&token=b9289f19-3b32-4ad0-887b-3ee35bc6d514','https://firebasestorage.googleapis.com/v0/b/tienda-god-of-war.appspot.com/o/pelicula44.jpg?alt=media&token=f4f42c08-9c7c-48b3-bef8-17a65d45f742']
    }
]
let fila2=document.getElementById("fila2")

//recorrer el arreglo
products2.forEach(function(producto){
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "h-100", "text-center","w-100","p-3")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid", "w-100", "h-100")
    foto.src=producto.fotos[0]

    let nombre=document.createElement("h5")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h5")
    precio.classList.add("fw-bold")
    precio.textContent='$'+producto.precio

    //detectando eventos, cuando pasa el mouse por la imagen muestra la siguiente
    foto.addEventListener("mouseover", function(){
        foto.src=producto.fotos[1]   
    })
    //cuando pasa el mouse vuelve a la imagen anterior
    foto.addEventListener("mouseleave", function(){
        foto.src=producto.fotos[0]   
    })

    //Padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)

    columna.appendChild(tarjeta)
    fila2.appendChild(columna)



})