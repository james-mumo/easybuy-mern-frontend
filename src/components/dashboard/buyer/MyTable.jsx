import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"

export default function MyTable({data, columns}) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/sellers/9900008`)
  }


  const [searchTerm, setSearchTerm] = React.useState("")
  const filteredRows = data.filter(
    (data) =>
      (data.firstName &&
        data.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (data.lastName &&
        data.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div style={{ height: 400, width: "100%", background: "green" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
        style={{ marginBottom: "1rem" }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        onCellDoubleClick={handleNavigate}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
