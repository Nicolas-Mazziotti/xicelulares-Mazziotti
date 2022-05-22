export const ProductsData = 

[
    {   id: 1, 
        modelo: 'Xiaomi Redmi Note 9t', 
        precio: 200, 
        img: '/assets/redmi-note9t.png',
        category: 'celular',
        home: 'top',
        descripcion: 'DIMENSIONES Y PESO 161,96 x 77,25 x 9,05 mm 199 gramos PANTALLA IPS/LCD de 6,53 pulgadas Resolución FullHD+ Formato 19,5:9 TÜV Rheinland PROCESADOR MediaTek Dimensity 800U GPU Mali-G57 MEMORIA RAM 4 GB LPDDR4x ALMACENAMIENTO INTERNO 128 GB UFS 2.2 CÁMARA TRASERA 48 MP f/1.79 Sensor de profundidad 2 MP f/2.4 Macro 2 MP F/2.25 CÁMARA DELANTERA 13 MP f/2.25 BATERÍA 5.000 mAh Carga rápida 18W SISTEMA OPERATIVO Android con MIUI CONECTIVIDAD 5G NSA y SA WiFi Dual SIM NFC USB tipo C OTROS Sensor infrarrojos Jack de auriculares Lector de huellas lateral'
    },
    {   id: 2, 
        modelo: 'Xiaomi Redmi Note 10', 
        precio: 300, 
        img: '/assets/redmi-note10s.png',
        category: 'celular',
        home: 'top',
        descripcion: 'Ultra Rápido. La conectividad 5G no es rápida, es ultrarrápida. Al conectarse a una red 5G, Redmi Note 10 5G te permite disfrutar de juegos fluidos en tiempo real y video llamadas sin interrupciones, ofreciendo una experiencia de uso mucho más envolvente y fluida para ver series, películas o jugar sin que se trabe y sin pausas. Es compatible con la avanzada tecnología de dual SIM o doble SIM (5G+5G). Excelente rendimiento. Redmi Note 10 5G es tres veces más rápido que sus competidores. El procesador MediaTek Dimensity 700 se creó utilizando un proceso distintivo de 7 nanómetros. Está equipado con un CPU (procesador) de 8 núcleos cuya velocidad de procesamiento es de hasta 2,2 GHz, además de un potente GPU (procesador gráfico) ARM Mali G57, lo que garantiza un funcionamiento fluido del equipo y proporciona una experiencia de usuario impecable y extraordinaria. Poderoso. Vas a estar siempre un paso adelante al cargar juegos, al ver películas y demás, gracias a UFS 2.2. La tecnología de memoria flash UFS 2.2, es una tarjeta de memoria o memoria de almacenamiento que sirve para almacenar todo lo que te imagines (juegos, películas, fotos, archivos) y que cuenta, como agregado, con la función WriteBooster, que es un acelerador de escritura secuencial que mejora en un 100% la velocidad de todo lo que hagas o ejecutes en tu dispositivo y asegura un mejor comportamiento en la experiencia de navegación por internet.'
    },
    {   id: 3, 
        modelo: 'Xiaomi Mi Lite 11', 
        precio: 350, 
        img: '/assets/mi-lite.png',
        category: 'celular',
        home: 'top',
        descripcion: 'Xiaomi Mi Lite 11 6GB/128GB Características Marca: Xiaomi Modelo: Redmi Note 10s Memoria interna: 128 GB Memoria RAM: 6 GB Dual SIM: si Compañía telefónica: Liberado Sistema operativo: Android Tamaño de la pantalla: 6.43" Resolución de la cámara: 64 Mpx Resolución de la cámara frontal: 13 Mpx Red: 5G Con pantalla táctil: Si Cámara digital: si Tipos de tarjeta de memoria: Micro Sd Capacidad de tarjeta de memoria: 512 GB USB: USB-C Wi-Fi: SI Con GPS: SI Radio: SI Reproductor de música: SI MP3: SI Grabador de voz: SI Resolución de video: 1920 px x 1080 px Sintonizador de TV: NO Versión del sistema operativo: 11 Tamaño de SIM: DUAL SIM Resolución de la pantalla: 2400 px x 1080 px Procesador: MediaTek Helio G95 Núcleos del procesador: 8 Velocidad del procesador: 2.05 GHz Tipo de batería: Polímero de litio Capacidad de la batería: 5000 mAh Sensor de movimiento: SI Brillo: SI Resolución de video frontal: 1920 px x 1080 px Cámara lenta: SI Con Bluetooth: SI Mini HDMI: NO Zoom óptico: SI Zoom digital: SI Tipo de pantalla: Dot Display Linterna: SI Es a prueba de agua: SI Giroscopio: SI Lector de huella digital: SI Sensor de proximidad: SI'
    },
    {
        id: "4",
        modelo: "Xiaomi Mi Band Smartwatch",
        precio: 350,
        img: "/assets/smart-watch.png",
        category: 'accesorio',
        home: 'top',
        descripcion:''
    },
    {
        id: "5",
        modelo: "Xiaomi Redmi Airdots",
        precio: 350,
        img: "/assets/airpods.png",
        category: 'accesorio',
        home: 'top',
        descripcion:''
    },
    {
        id: "6",
        modelo: "Xiaomi Mi Robot Vacuum",
        precio: 350,
        img: "/assets/mi-robot.png",
        category: 'accesorio',
        home: 'top',
        descripcion:''
    },
]


  
//promise para ItemListContainer
  export const traerProductos = (categoryId) => {
      return new Promise((resolve, reject) => {
          const productosFiltrados = ProductsData.filter((prod) => prod.category === categoryId)
    setTimeout(() => {
        if(categoryId === undefined){
            resolve(ProductsData)
        } else {
            resolve(productosFiltrados)
        }     
    }, 3000)
})
}

//promise para ItemDetailContainer

export const productosDetail = (id) => {
    return new Promise ((resolve, reject) => {
        const productosLinkeados = ProductsData.filter ((prod) => prod.id === id)
        setTimeout(() =>{
            resolve (productosLinkeados)
        },1000)  
    })
}




