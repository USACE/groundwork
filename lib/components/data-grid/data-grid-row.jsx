import { memo } from "react";
import gwMerge from "../../gw-merge";
import DataGridSelector from "./data-grid-selector";

const DefaultCell = memo(function ({ val, className, style = {} }) {
  return (
    <div className={gwMerge("gw:truncate", className)} style={style}>
      {val}
    </div>
  );
});

const DataGridRow = memo(function ({
  row,
  columns,
  columnWidths,
  enableSelect,
  enableToggle,
  selected,
  onSelect,
}) {
  return (
    <div className="gw:flex gw:flex-row gw:items-center gw:text-sm gw:even:bg-gray-50">
      {enableSelect ? (
        <DataGridSelector selected={selected} onSelect={onSelect} row={row} />
      ) : null}
      {enableToggle ? (
        <DataGridSelector
          selected={selected}
          onSelect={onSelect}
          row={row}
          toggle
        />
      ) : null}
      {columns.map((col, i) => {
        const Comp = col?.component ? memo(col.component) : DefaultCell;
        const style = {
          display: "flex",
          width: columnWidths[i],
        };
        return (
          <Comp
            key={`${col.field}-${i}`}
            row={row}
            field={col.field}
            val={row[col.field]?.toString() || ""}
            className="gw:p-1 gw:truncate"
            style={style}
          />
        );
      })}
    </div>
  );
});

export default DataGridRow;
