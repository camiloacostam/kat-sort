import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default function Dendrogram({ data }) {
  const ref = useRef()
  useEffect(() => {
    if (data) {
      const { cardNames, matrix } = data

      // Crear un nuevo root con una jerarquía
      const root = d3.hierarchy({
        name: 'root',
        children: cardNames.map((name, i) => ({
          name,
          size: d3.sum(matrix[i]),
          children: matrix[i]
            .map((size, j) => ({
              name: cardNames[j],
              size
            }))
            .filter((d) => d.size > 0)
        }))
      })

      // Crear un layout de cluster horizontal
      const cluster = d3.cluster().size([600, 800])

      cluster(root)

      const svg = d3
        .select(ref.current)
        .attr('width', 1600)
        .attr('height', 1600)

      // Limpiar el renderizado anterior
      svg.selectAll('*').remove()

      // Crear enlaces
      svg
        .selectAll('path')
        .data(root.links())
        .enter()
        .append('path')
        .attr(
          'd',
          d3
            .linkHorizontal() // Cambiar a linkHorizontal para orientación horizontal
            .x((d) => d.y) // Intercambiar x e y para orientación horizontal
            .y((d) => d.x)
        )
        .attr('stroke', '#ccc')
        .attr('fill', 'none')

      // Crear nodos
      svg
        .selectAll('circle')
        .data(root.descendants())
        .enter()
        .append('circle')
        .attr('cx', (d) => d.y) // Intercambiar x e y para orientación horizontal
        .attr('cy', (d) => d.x)
        .attr('r', 4)
        .attr('fill', '#999')

      // Agregar labels
      svg
        .selectAll('text')
        .data(root.descendants())
        .enter()
        .append('text')
        .attr('x', (d) => d.y) // Intercambiar x e y para orientación horizontal
        .attr('y', (d) => d.x)
        .attr('dy', '0.31em')
        .attr('dx', (d) => (d.children ? -10 : 10))
        .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
        .text((d) => d.data.name)
    }
  }, [data])
  return <svg ref={ref}></svg>
}
