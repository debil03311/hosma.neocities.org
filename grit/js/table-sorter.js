/**
 * Adds sorting functionality to a `<table>`.
 * @param {HTMLTableElement} table 
 */
function makeTableSortable(table) {
  const tHead = table.tHead,
        tBody = table.tBodies[0] // shouldn't have more than one

  const headerCells = tHead.rows[0].cells // shouldn't have more than one
  const originalRows = [...tBody.rows] // cast to array

  let currentColumnIndex = null
  table.dataset.sort = 'DEFAULT'

  // Functions must be defined within loop as they are dependent
  // on their own specific <table> data

  /** 
   * Sorts a table of columns
   * @param {HTMLTableRowElement[]} rowArray Array of the `<th>` elements to be sorted
   * @param {Boolean} isDescending Sorting direction
   * @returns {HTMLTableRowElement[]} Sorted array of `<th>` elements
   */
  function sortRows(rowArray=[], isDescending=true) {
    console.log(rowArray)
    return rowArray.toSorted((a, b) => {
      const aValue = a.children[currentColumnIndex].textContent
      const bValue = b.children[currentColumnIndex].textContent

      return (isDescending)
        ? bValue.localeCompare(aValue)
        : aValue.localeCompare(bValue)
    })
  }

  /** 
   * Sorts a table by the specified column index
   * @param {Number} sortingColumnIndex The column index to sort by
   */
  function sortTable(sortingColumnIndex) {
    // If the clicked sorting column is a different one, then change the
    // table metadata accordingly and reset to default sorting
    if (currentColumnIndex !== sortingColumnIndex) {
      // Remove .sorting class from old header, if any
      headerCells[currentColumnIndex]?.classList.remove('sorting')
      // Add it to the new header
      headerCells[sortingColumnIndex].classList.add('sorting')
      // Reset sorting order
      table.dataset.sort = 'DEFAULT'
    }

    // Make new column index the current one
    currentColumnIndex = sortingColumnIndex

    switch (table.dataset.sort) {
      case 'DEFAULT': // change to descending
        tBody.append(...sortRows(originalRows, false))
        table.dataset.sort = 'DESCENDING'
        break

      case 'DESCENDING': // change to ascending
        tBody.append(...sortRows(originalRows, true))
        table.dataset.sort = 'ASCENDING'
        break

      case 'ASCENDING': // change to default
        tBody.append(...originalRows)
        table.dataset.sort = 'DEFAULT'
        break
    }
  }

  // Add [onclick] listener to every <th>
  for (const th of headerCells) {
    th.addEventListener('click', () => sortTable(th.cellIndex), { passive: true })
  }
}

for (const Table of document.querySelectorAll('table.sortable')) {
  makeTableSortable(Table)
}