import { useNavigate } from "react-router";
import { GenericTable } from "../components/GenericTable";
import { reportMockData } from "../constants/mockdata";


export default function Reports() {
 const navigate = useNavigate();
  const columns = [
    { header: "Report ID", accessor: "reportId" },
    { header: "Title", accessor: "title" },
    { header: "Created On", accessor: "createdOn" },
    { header: "Created By", accessor: "createdBy" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <GenericTable
      title="Reports Summary"
      columns={columns}
      data={reportMockData}
      onRowClick={(report) => navigate(`/reports/${report.reportId}`)}
    />
  );
}
