import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DataGridRow from "./data-grid-row";
import DataGridHeader from "./data-grid-header";
import { Loader } from "../display/loader";
import { twMerge } from "tailwind-merge";

function useElementSize(ref, { box = "content-box" } = {}) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  // rAF to coalesce many rapid updates during transitions
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const cr = entry.contentRect;
      const borderBoxSize = entry.borderBoxSize?.[0];
      const contentBoxSize = entry.contentBoxSize?.[0];

      const width =
        box === "border-box"
          ? (borderBoxSize?.inlineSize ?? ref.current.offsetWidth)
          : (contentBoxSize?.inlineSize ?? cr.width);

      const height =
        box === "border-box"
          ? (borderBoxSize?.blockSize ?? ref.current.offsetHeight)
          : (contentBoxSize?.blockSize ?? cr.height);

      // throttle via rAF
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => setSize({ width, height }));
    });

    ro.observe(ref.current, { box });
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      ro.disconnect();
    };
  }, [ref, box]);

  return size;
}

function calculateColumnWidths({
  columns,
  parentWidth,
  enableSelect,
  enableToggle,
}) {
  let flexTotal = 0;
  let staticWidthTotal = 0;

  if (enableSelect) staticWidthTotal += 32;
  if (enableToggle) staticWidthTotal += 48;

  columns.forEach((col) => {
    if (col?.width && col?.flex)
      throw new Error("A column cannot have both width and flex attributes");
    staticWidthTotal += col?.width || 0;
    flexTotal += col?.flex || 0;
  });

  const widthLeftOver = parentWidth - staticWidthTotal;
  const widthPerFlex = Math.floor(widthLeftOver / flexTotal);
  const remainder = parentWidth - staticWidthTotal - flexTotal * widthPerFlex;

  const widths = columns.map((col, i) => {
    return col.width || col.flex * widthPerFlex;
  });

  widths[widths.length - 1] = widths[widths.length - 1] + remainder;

  return widths;
}

function DataGrid({
  data,
  columns,
  border = true,
  sortedBy = null,
  sortedDir = null,
  selectByField = "id",
  selectedIds = new Set(),
  onSelect = null,
  onSelectAll = null,
  onSort = null,
  showHeader = true,
  enableSelect = false,
  enableToggle = false,
  isLoading = false,
}) {
  const el = useRef();
  const { width } = useElementSize(el, { box: "border-box" });
  const [columnWidths, setColumnWidths] = useState(null);

  if (enableSelect && enableToggle)
    throw new Error(
      "Data-grid error: Cannot enable select and toggle at the same time.",
    );

  useLayoutEffect(() => {
    if (!width) return;
    setColumnWidths(
      calculateColumnWidths({
        columns: columns,
        parentWidth: width,
        enableSelect: enableSelect,
        enableToggle: enableToggle,
      }),
    );
  }, [width, columns]);

  return (
    <div ref={el} className="gw:h-full gw:overflow-auto">
      {width && columnWidths ? (
        <>
          {showHeader ? (
            <DataGridHeader
              sortedBy={sortedBy}
              sortedDir={sortedDir}
              selected={data.length === selectedIds.size}
              onSelectAll={onSelectAll}
              onSort={onSort}
              columns={columns}
              columnWidths={columnWidths}
              enableSelect={enableSelect}
              enableToggle={enableToggle}
            />
          ) : null}
          {isLoading ? (
            <Loader />
          ) : (
            <div className="gw:h-full gw:flex gw:flex-col gw:overflow-y-scroll">
              {data.map((row, i) => {
                const rowId = row?.id !== undefined ? row.id : i;
                return (
                  <DataGridRow
                    id={rowId}
                    key={rowId}
                    selected={selectedIds.has(row[selectByField])}
                    onSelect={(e) => {
                      onSelect &&
                        onSelect({
                          id: row[selectByField],
                          idx: i,
                          shiftKey: e.nativeEvent.shiftKey,
                          row: row,
                        });
                    }}
                    row={row}
                    columns={columns}
                    columnWidths={columnWidths}
                    enableSelect={enableSelect}
                    enableToggle={enableToggle}
                  />
                );
              })}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

export default DataGrid;
export { DataGrid };
