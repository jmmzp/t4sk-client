import './style.css'
import TableImportant from '../TableImportant'
import TableUrgent from '../TableUrgent'
import TableUrgentImportant from '../TableUrgentImportant'
import TableWhatever from '../TableWhatever'

export default function CustomTables() {
  return (
    <section className="tables">
      <TableUrgent />

      <TableUrgentImportant />

      <TableWhatever />

      <TableImportant />
    </section>
  )
}
