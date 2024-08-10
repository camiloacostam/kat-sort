import './similarity-matrix.css'

export default function SimilarityMatrix({ similarityMatrix }) {
  return (
    <div>
      {similarityMatrix && (
        <table>
          <thead>
            <tr>
              <th></th>
              {Object.keys(similarityMatrix).map((card, index) => (
                <th key={index}>{card}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(similarityMatrix).map((card, index) => (
              <tr key={index}>
                <td>{card}</td>
                {Object.values(similarityMatrix[card]).map((value, idx) => (
                  <td
                    key={idx}
                    style={{
                      backgroundColor: `rgba(0, 0, 255, ${value / 100})`
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
