import { Divider } from '@mui/material'
import { useParams } from 'react-router-dom'
import CustomTables from '../../components/CustomTables'
import { dividerStyle } from '../../styles'
import './style.css'
import { Typography } from '@mui/material'

export default function Tables() {
  const { tableId } = useParams()
  return (
    <section className="container">
      <Divider sx={dividerStyle} />

      <h1>{tableId}</h1>

      <section className="main">
        <Typography variant="h3">Olá , Aqui estão suas tasks.</Typography>

        <CustomTables />
      </section>
    </section>
  )
}
