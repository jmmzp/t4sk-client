import './style.css'
import HeaderMain from '../../components/HeaderMain'
import Tables from '../../components/Tables'

export default function Main() {
  return (
    <div className="container">
      <HeaderMain />

      <div className="divider"></div>

      <div className="main">
        <h1 className="main__title">
          Olá <span>nome_user</span>, Aqui estão suas tasks.
        </h1>

        <Tables />
      </div>
    </div>
  )
}
