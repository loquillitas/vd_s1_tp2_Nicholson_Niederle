d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX({ y: "sum" }, { x: "nacionalidad" , y: "mision_hs", fill: data=> (data.nacionalidad== "EE.UU."|| data.nacionalidad=="U.S.S.R/Rusia") ? "#F77070" : "#E6E1E0",})
        
      )
    ],
    grid: true,
    marginLeft: 50,
    
    x: {
      tickRotate: -45,
      label: null,
    },
    y:{
      label: "cantidad de horas",
      },
    marginBottom: 100,

  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart_03').append(() => chart)
})
  
  
  