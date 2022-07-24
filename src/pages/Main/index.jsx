import { Divider } from '@mui/material'
import { dividerStyle } from '../../styles'
import './style.css'

export default function Main() {
  return (
    <section className="container">
      <Divider sx={dividerStyle} />
      <section className="container__projects"></section>
    </section>
  )
}
