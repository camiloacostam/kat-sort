import Tree from 'react-d3-tree'
import propTypes from 'prop-types'

const Dendrogram = ({ dendrogramData }) => {
  if (!dendrogramData) {
    return <div>Cargando...</div>
  }

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Tree data={dendrogramData} orientation="horizontal" />
    </div>
  )
}

Dendrogram.propTypes = {
  dendrogramData: propTypes.object
}

export default Dendrogram
