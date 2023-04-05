import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { DataProps } from '../demo/DataTable.stories'

export const AGGrid = ({ data }: DataProps) => {
  const columnDefs = Object.keys(data[0]).map((field) => ({ field }))

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={data} columnDefs={columnDefs}></AgGridReact>
    </div>
  )
}
