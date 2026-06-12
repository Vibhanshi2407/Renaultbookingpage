import DEALERS from "../../data/delearData.js";
import Pagination from "../../components/datatable/Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dtable.css";



function StatusBadge({ status }) {
  const isActive = status === "Active";
  return (
    <span className={`dealer-badge ${isActive ? "dealer-badge--active" : "dealer-badge--inactive"}`}>
      {status}
    </span>
  );
}
const HIGHLIGHTED_ROW=1;
const COLUMNS = [
  {
    key: "id",
    label: "Merchant ID",
    render: (val) => <span className="dealer-td-id">{val}</span>,
  },
  {
    key: "name",
    label: "Dealer Name",
  },
  {
    key: "mobile",
    label: "Mobile No.",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "city",
    label: "City",
  },
  {
    key: "status",
    label: "Status",
    render: (val) => <StatusBadge status={val} />,
  },
  {
    key: "__action",
    label: "Action",
    isAction: true,
    render: (_val, row, isHighlighted, navigate) => (
      <button className={`dealer-btn-view${isHighlighted ? " dealer-btn-view--dark" : ""}`}
              onClick={() => navigate(`/dealers/${row.id}`)}  
              >

        View Details
      </button>
    ),
  },
];

const ROWS_PER_PAGE = 10;

export default function DealerTable() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage]   = useState(1);
  const [rowsPerPage, setRowsPerPage]   = useState(ROWS_PER_PAGE);

  const totalPages    = Math.ceil(DEALERS.length / rowsPerPage);
  const paginatedData = DEALERS.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  }

  function handleRowsChange(n) {
    setRowsPerPage(n);
    setCurrentPage(1);
  }



  return (
    <div className="dealer-tablepage">


        <div className="dealer-scroll">
          <table className="dealer-table">

            <thead>
              <tr>
                {COLUMNS.map((col, i) => (
                  <th
                    key={`${col.key}-${i}`}
                    className={col.isAction ? "dealer-th-action" : ""}
                  >
                    {col.isAction
                      ? <span className="dealer-th-plus">+</span>
                      : col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginatedData.length === 0 ? (

                <tr>
                  <td colSpan={COLUMNS.length} className="dealer-empty">
                    No dealers found.
                  </td>
                </tr>

              ) : (

                paginatedData.map((row, rowIndex) => {
                  const isHighlighted = rowIndex === HIGHLIGHTED_ROW;
                  return (
                    <tr
                      key={row.id ?? rowIndex}
                      className={isHighlighted ? "dealer-row--highlighted" : ""}
                    >
                      {COLUMNS.map((col, i) => (
                        <td key={`${col.key}-${i}`}>
                          {col.render
                            ? col.render(row[col.key], row, isHighlighted, navigate)
                            : (row[col.key] ?? "—")}
                        </td>
                      ))}
                    </tr>
                  );
                })

              )}
            </tbody>

          </table>
        </div>

        {/* ── Pagination ── */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          totalItems={DEALERS.length}
          onPageChange={handlePageChange}
          onRowsChange={handleRowsChange}
        />

      </div>
    
  );
}
