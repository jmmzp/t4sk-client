import './style.css'

export default function Tables() {
  return (
    <div className="tables">
      <div className="card urgent">
        <h2>urgente - não importante</h2>
        <div></div>
      </div>

      <div className="card important-urgent">
        <h2>urgente - importante</h2>
        <div></div>
      </div>

      <div className="card not-urgent__not-important">
        <h2>não urgente - não importante</h2>
        <div></div>
      </div>

      <div className="card important">
        <h2>importante - não urgente</h2>
        <div className="saves__task">
          <div className="task">
            <h4>Título task</h4>

            <p>Sobre</p>

            <h5>Nível 2</h5>
          </div>

          <div className="task">
            <p>odiasd</p>
          </div>
        </div>
      </div>
    </div>
  )
}
