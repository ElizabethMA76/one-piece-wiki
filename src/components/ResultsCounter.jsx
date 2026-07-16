function ResultsCounter({ visibleCount, totalCount }) {
  return (
    <p className="results-counter">
      Mostrando {visibleCount} de {totalCount} personajes
    </p>
  );
}

export default ResultsCounter;