function Checkbox({ checked = false, onChange }) {
  return (
    <div className="gw:flex gw:h-6 gw:shrink-0 gw:items-center">
      <div className="gw:group gw:grid gw:size-4 gw:grid-cols-1">
        <input
          id="rowselect"
          name="selected"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-describedby="select a row"
          className="gw:col-start-1 gw:row-start-1 gw:appearance-none gw:rounded-sm gw:border gw:border-gray-300 gw:bg-white gw:checked:border-indigo-600 gw:checked:bg-indigo-600 gw:indeterminate:border-indigo-600 gw:indeterminate:bg-indigo-600 gw:focus-visible:outline-2 gw:focus-visible:outline-offset-2 gw:focus-visible:outline-indigo-600 gw:disabled:border-gray-300 gw:disabled:bg-gray-100 gw:disabled:checked:bg-gray-100 gw:forced-colors:appearance-auto"
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          className="gw:pointer-events-none gw:col-start-1 gw:row-start-1 gw:size-3.5 gw:self-center gw:justify-self-center gw:stroke-white gw:group-has-disabled:stroke-gray-950/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="gw:opacity-0 gw:group-has-checked:opacity-100"
          />
          <path
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="gw:opacity-0 gw:group-has-indeterminate:opacity-100"
          />
        </svg>
      </div>
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <div className="gw:group gw:relative gw:inline-flex gw:h-5 gw:w-10 gw:shrink-0 gw:items-center gw:justify-center gw:rounded-full gw:outline-offset-2 gw:outline-indigo-600 gw:has-focus-visible:outline-2">
      <span className="gw:absolute gw:mx-auto gw:h-4 gw:w-9 gw:rounded-full gw:bg-gray-200 gw:inset-ring gw:inset-ring-gray-900/5 gw:transition-colors gw:duration-200 gw:ease-in-out gw:group-has-checked:bg-indigo-600" />
      <span className="gw:absolute gw:left-0 gw:size-5 gw:rounded-full gw:border gw:border-gray-300 gw:bg-white gw:shadow-xs gw:transition-transform gw:duration-200 gw:ease-in-out gw:group-has-checked:translate-x-5" />
      <input
        name="toggle-select"
        type="checkbox"
        aria-label="toggle selected"
        checked={checked}
        onChange={onChange}
        className="gw:absolute gw:inset-0 gw:appearance-none gw:focus:outline-hidden"
      />
    </div>
  );
}

function DataGridSelector({ selected, onSelect, row, toggle = false }) {
  return (
    <div className="gw:p-1 gw:flex gw:items-center">
      {toggle ? (
        <Toggle checked={selected} onChange={onSelect} row={row} />
      ) : (
        <Checkbox checked={selected} onChange={onSelect} row={row} />
      )}
    </div>
  );
}

export default DataGridSelector;
