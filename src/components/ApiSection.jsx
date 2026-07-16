import { useEffect, useState } from "react";

function ApiSection({ id, title, loadData }) {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");

        const data = await loadData();

        setItems(data);
      } catch (error) {
        console.error(`Error cargando ${title}:`, error);
        setError(`No se pudo cargar la información de ${title}.`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [loadData, title]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setVisibleCount(6);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setVisibleCount(6);
  };

  const filteredItems = items.filter((item) => {
    const textToSearch = `
      ${item.title || ""}
      ${item.subtitle || ""}
      ${item.description || ""}
      ${item.detailOne || ""}
      ${item.detailTwo || ""}
    `.toLowerCase();

    return textToSearch.includes(searchText.toLowerCase());
  });

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;
  const hasNoResults = !isLoading && !error && filteredItems.length === 0;
  const hasActiveSearch = searchText.trim() !== "";

  return (
    <section id={id} className="section">
      <h2>{title}</h2>

      {isLoading && (
        <p className="loading-message">
          Cargando {title.toLowerCase()}...
        </p>
      )}

      {error && <p className="no-results">{error}</p>}

      {!isLoading && !error && (
        <>
          <input
            className="search-input"
            type="text"
            placeholder={`Buscar en ${title.toLowerCase()}...`}
            value={searchText}
            onChange={handleSearchChange}
          />

          {hasActiveSearch && (
            <button
              className="clear-section-search-button"
              onClick={handleClearSearch}
            >
              Limpiar búsqueda
            </button>
          )}

          {hasNoResults ? (
            <p className="empty-results-message">
              No se encontraron resultados con esos criterios.
            </p>
          ) : (
            <>
              <p className="results-counter">
                Mostrando {visibleItems.length} de {filteredItems.length}
              </p>

              <div className="info-grid">
                {visibleItems.map((item) => (
                  <article className="info-card" key={item.id}>
                    <h3>{item.title}</h3>

                    <p className="info-subtitle">{item.subtitle}</p>

                    <p>{item.description}</p>

                    {item.detailOne && (
                      <p>
                        <strong>{item.detailOne}</strong>
                      </p>
                    )}

                    {item.detailTwo && (
                      <p>
                        <strong>{item.detailTwo}</strong>
                      </p>
                    )}
                  </article>
                ))}
              </div>

              {hasMoreItems && (
                <button
                  className="load-more-button"
                  onClick={() => setVisibleCount(visibleCount + 6)}
                >
                  Ver más
                </button>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default ApiSection;