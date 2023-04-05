d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX({ y: "count" }, { x: "genero" , fill: "genero"})
      ),
      Plot.text(data,
        Plot.groupX({ y: "sum", text: "sum" }, { x: "genero", dy: -10})
      )
    ],
    color: {
      range  : ["#F77070", '#6EADD9'],
    },
    x: {
      line: true,
      tickPadding: 15,
      labelAnchor: "left",
      label: null,
    },
    y:{
      label: null,
      },
    marginLeft: 20,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart_04').append(() => chart)
})
  
