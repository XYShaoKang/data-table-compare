import { useEffect, useLayoutEffect } from 'react'
import { TabulatorFull } from 'tabulator-tables'

import 'tabulator-tables/dist/css/tabulator.min.css'
import { DataProps } from '../demo/DataTable.stories'

export const Tabulator = ({ data }: DataProps) => {
  useLayoutEffect(() => {
    const columnDefs = Object.keys(data[0]).map((field) => ({
      title: field,
      field,
    }))
    const table = new TabulatorFull('#example-table', {
      height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
      data, //assign data to table
      layout: 'fitColumns', //fit columns to width of table (optional)
      columns: [
        //define the table columns
        { title: 'Name', field: 'name', editor: 'input' },
        {
          title: 'Task Progress',
          field: 'progress',
          hozAlign: 'left',
          formatter: 'progress',
          editor: true,
        },
        {
          title: 'Gender',
          field: 'gender',
          width: 95,
          editor: 'select',
          editorParams: { values: ['male', 'female'] },
        },
        {
          title: 'Rating',
          field: 'rating',
          formatter: 'star',
          hozAlign: 'center',
          width: 100,
          editor: true,
        },
        { title: 'Color', field: 'col', width: 130, editor: 'input' },
        {
          title: 'Date Of Birth',
          field: 'dob',
          width: 130,
          sorter: 'date',
          hozAlign: 'center',
        },
        {
          title: 'Driver',
          field: 'car',
          width: 90,
          hozAlign: 'center',
          formatter: 'tickCross',
          sorter: 'boolean',
          editor: true,
        },
      ],
    })
  }, [data])

  return <div id="example-table"></div>
}
