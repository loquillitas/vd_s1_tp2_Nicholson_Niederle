d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barY(data,
          Plot.groupX({ y: "sum" }, { x: "anio_mision" , y: "mision_hs", fill: "anio_mision"})
        )
      ],

    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart_04').append(() => chart)
  })
  
