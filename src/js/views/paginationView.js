import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._nextPage(currentPage);
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._previousPage(currentPage);
    }
    // Other page
    if (currentPage < numPages && currentPage > 1) {
      return this._previousPage(currentPage) + this._nextPage(currentPage);
    }
    // Page 1, and there are NO pages
    return '';
  }

  _previousPage(currentPage) {
    return `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
      </button>
      `;
  }

  _nextPage(currentPage) {
    return `
      <button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
  }
}

export default new PaginationView();
