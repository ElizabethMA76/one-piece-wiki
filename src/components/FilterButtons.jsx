function FilterButtons({ filterType, onFilterChange }) {
  return (
    <div className="filter-buttons">
      <button
        className={filterType === "all" ? "active-filter" : ""}
        onClick={() => onFilterChange("all")}
      >
        Todos
      </button>

      <button
        className={filterType === "with-fruit" ? "active-filter" : ""}
        onClick={() => onFilterChange("with-fruit")}
      >
        Con fruta
      </button>

      <button
        className={filterType === "without-fruit" ? "active-filter" : ""}
        onClick={() => onFilterChange("without-fruit")}
      >
        Sin fruta
      </button>
    </div>
  );
}

export default FilterButtons;