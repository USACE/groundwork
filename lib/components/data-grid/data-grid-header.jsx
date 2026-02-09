import { memo } from "react";
import gwMerge from "../../gw-merge";
import DataGridSelector from "./data-grid-selector";
import { BsSortDown, BsSortDownAlt } from "react-icons/bs";

const HeaderCell = memo(function ({ col, sortedBy, sortedDir, ...props }) {
  return (
    <div
      key={col.field}
      data-sorted-by={col.field === sortedBy}
      className="gw:pl-1 gw:pr-1 gw:flex gw:justify-between gw:items-center gw:data-[sorted-by=true]:font-bold gw:data-[sorted-by=true]:text-gray-800"
      {...props}
    >
      {col.header || `\u00A0`}
      {col.field === sortedBy && sortedDir === "asc" ? <BsSortDownAlt /> : null}
      {col.field === sortedBy && sortedDir === "desc" ? <BsSortDown /> : null}
    </div>
  );
});

function DataGridHeader({
  sortedBy,
  sortedDir,
  columns,
  columnWidths,
  enableSelect,
  enableToggle,
  selected,
  onSelectAll,
  onSort,
}) {
  return (
    <div className="gw:sticky gw:top-0 gw:z-10 gw:flex gw:flex-row gw:items-center gw:text-sm gw:shadow-md">
      {enableSelect ? (
        <DataGridSelector selected={selected} onSelect={onSelectAll} />
      ) : null}
      {enableToggle ? (
        <DataGridSelector selected={selected} onSelect={onSelectAll} toggle />
      ) : null}
      {columns.map((col, i) => {
        const Comp =
          typeof col.header === "function" ? memo(col.header) : HeaderCell;
        const style = {
          display: "flex",
          width: columnWidths[i] - 1, // account for the border-r below
        };
        return (
          <div
            key={`${col.field}-${i}`}
            className={gwMerge(
              "gw:box-border gw:border-r gw:border-r-gray-300 gw:last:border-r-0",
              col?.sortable ? "gw:cursor-pointer" : "",
            )}
          >
            <Comp
              style={style}
              col={col}
              sortedBy={sortedBy}
              sortedDir={sortedDir}
              onClick={() => {
                if (onSort && col?.field && col?.sortable) onSort(col.field);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DataGridHeader;
