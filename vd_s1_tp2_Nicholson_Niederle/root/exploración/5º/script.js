d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "anio_nacimiento",
        y: "anio_mision",
      }),
    ],
    grid: true,
  });
  d3.select("#chart").append(() => chart);
});
