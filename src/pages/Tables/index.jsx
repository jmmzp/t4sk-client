import { Divider } from '@mui/material'
import { useParams } from 'react-router-dom'
import CustomTables from '../../components/CustomTables'
import LayoutHeader from '../../components/LayoutHeader'
import { dividerStyle } from '../../styles'
import './style.css'

export default function Tables() {
  const { tableId } = useParams()
  return (
    <section className="container">
      <LayoutHeader />

      <Divider sx={dividerStyle} />

      <h1>{tableId}</h1>

      <section className="main">
        <h1 className="main__title">
          Olá <span>nome_user</span>, Aqui estão suas tasks.
        </h1>

        <CustomTables />
      </section>
    </section>
  )
}
