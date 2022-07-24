import { Divider } from '@mui/material'
import { useParams } from 'react-router-dom'
import CustomTables from '../../components/CustomTables'
import { dividerStyle } from '../../styles'
import './style.css'
import { Typography } from '@mui/material'
import HeaderMain from '../../components/HeaderMain'

export default function Tables() {
  const { tableId } = useParams()
  return (
    <section className="container">
      <HeaderMain />

      <Divider sx={dividerStyle} />

      <main className="container__tables"></main>
    </section>
  )
}
