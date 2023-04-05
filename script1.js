d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barY(data,
          Plot.groupX({ y: "sum" }, { x: "ocupacion" , y: "mision_hs", fill: "ocupacion"})
        ),
        Plot.text(data,
          Plot.groupX({ y: "sum", text: "sum" }, { x: "ocupacion" , y: "mision_hs", fill: "ocupacion", dy: -10})
        )
      ],
      marginLeft: 50,
      width: 1000,
      marginBottom: 70,
      x:{
        label: null,
      },
      y:{
        label: "horas de misión",
        },

    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart_01').append(() => chart)
  })
  