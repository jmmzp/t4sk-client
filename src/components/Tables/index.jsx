import './style.css'
import TableImportant from '../TableImportant'
import TableUrgent from '../TableUrgent'
import TableUrgentImportant from '../TableUrgentImportant'
import TableWhatever from '../TableWhatever'

export default function Tables() {
  return (
    <div className="tables">
      <TableUrgent />

      <TableUrgentImportant />

      <TableWhatever />

      <TableImportant />
    </div>
  )
}
