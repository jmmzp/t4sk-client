import { Divider } from '@mui/material'
import LayoutHeader from '../../components/LayoutHeader'
import { dividerStyle } from '../../styles'

export default function Main() {
  return (
    <section className="container">
      <LayoutHeader />

      <Divider sx={dividerStyle} />
      <section className="container__projects"></section>
    </section>
  )
}
