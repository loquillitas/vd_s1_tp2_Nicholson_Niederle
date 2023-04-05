d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.areaY(data,
          Plot.groupX({ y: "count" }, { x: "anio_mision" ,
           y: "mision_hs", fill: "#E6E1E0"})
        )
      ],
      marginLeft: 20,
      y:{
        label: "cantidad de horas",
        },
        x:{
          label: "año",
          },

    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart_02').append(() => chart)
  })
  
