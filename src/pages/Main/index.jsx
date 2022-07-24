import { Divider } from '@mui/material'
import HeaderMain from '../../components/HeaderMain'
import { dividerStyle } from '../../styles'
import './style.css'

export default function Main() {
  return (
    <section className="container">
      <HeaderMain />

      <Divider sx={dividerStyle} />

      <main className="container__projects"></main>
    </section>
  )
}
