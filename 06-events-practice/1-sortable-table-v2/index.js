export default class SortableTable {
  element;
  subElements = {};
  headersConfig = [];
  data = [];

  onSortClick = event => {
<<<<<<< HEAD
=======
    // console.error('onSortClick');

>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
    const column = event.target.closest('[data-sortable="true"]');
    const toggleOrder = order => {
      const orders = {
        asc: 'desc',
        desc: 'asc'
      };

      return orders[order];
    };

    if (column) {
<<<<<<< HEAD
      const {id, order} = column.dataset;
=======
      const { id, order } = column.dataset;
>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
      const sortedData = this.sortData(id, toggleOrder(order));
      const arrow = column.querySelector('.sortable-table__sort-arrow');

      column.dataset.order = order === 'asc' ? 'desc' : 'asc';

      if (!arrow) {
        column.append(this.subElements.arrow);
      }

<<<<<<< HEAD
=======
      // console.error(11111111);
      // console.error(column.dataset.order);

>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
      this.subElements.body.innerHTML = this.getTableRows(sortedData);
    }
  };

  constructor(headersConfig, {
    data = [],
    sorted = {
      id: headersConfig.find(item => item.sortable).id,
      order: 'asc'
    }
  } = {}) {
    this.headersConfig = headersConfig;
    this.data = data;
    this.sorted = sorted;

    this.render();
  }

  getTableHeader() {
    return `<div data-element="header" class="sortable-table__header sortable-table__row">
      ${this.headersConfig.map(item => this.getHeaderRow(item)).join('')}
    </div>`;
  }

<<<<<<< HEAD
  getHeaderRow({id, title, sortable}) {
=======
  getHeaderRow ({id, title, sortable}) {
>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
    const order = this.sorted.id === id ? this.sorted.order : 'asc';

    return `
      <div class="sortable-table__cell" data-id="${id}" data-sortable="${sortable}" data-order="${order}">
        <span>${title}</span>
        ${this.getHeaderSortingArrow(id)}
      </div>
    `;
  }

<<<<<<< HEAD
  getHeaderSortingArrow(id) {
=======
  getHeaderSortingArrow (id) {
>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
    const isOrderExist = this.sorted.id === id ? this.sorted.order : '';

    return isOrderExist
      ? `<span data-element="arrow" class="sortable-table__sort-arrow">
          <span class="sort-arrow"></span>
        </span>`
      : '';
  }

  getTableBody(data) {
    return `
      <div data-element="body" class="sortable-table__body">
        ${this.getTableRows(data)}
      </div>`;
  }

<<<<<<< HEAD
  getTableRows(data) {
=======
  getTableRows (data) {
>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
    return data.map(item => `
      <div class="sortable-table__row">
        ${this.getTableRow(item, data)}
      </div>`
    ).join('');
  }

<<<<<<< HEAD
  getTableRow(item) {
=======
  getTableRow (item) {
>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
    const cells = this.headersConfig.map(({id, template}) => {
      return {
        id,
        template
      };
    });

    return cells.map(({id, template}) => {
      return template
        ? template(item[id])
        : `<div class="sortable-table__cell">${item[id]}</div>`;
    }).join('');
  }

  getTable(data) {
    return `
      <div class="sortable-table">
        ${this.getTableHeader()}
        ${this.getTableBody(data)}
      </div>`;
  }

  render() {
    const {id, order} = this.sorted;
    const wrapper = document.createElement('div');
    const sortedData = this.sortData(id, order);

    wrapper.innerHTML = this.getTable(sortedData);

    const element = wrapper.firstElementChild;

    this.element = element;
    this.subElements = this.getSubElements(element);

    this.initEventListeners();
  }

  initEventListeners() {
    this.subElements.header.addEventListener('pointerdown', this.onSortClick);
  }

  sortData(id, order) {
    const arr = [...this.data];
    const column = this.headersConfig.find(item => item.id === id);
    const {sortType, customSorting} = column;
    const direction = order === 'asc' ? 1 : -1;

    return arr.sort((a, b) => {
      switch (sortType) {
<<<<<<< HEAD
        case 'number':
          return direction * (a[id] - b[id]);
        case 'string':
          return direction * a[id].localeCompare(b[id], 'ru');
        case 'custom':
          return direction * customSorting(a, b);
        default:
          return direction * (a[id] - b[id]);
=======
      case 'number':
        return direction * (a[id] - b[id]);
      case 'string':
        return direction * a[id].localeCompare(b[id], 'ru');
      case 'custom':
        return direction * customSorting(a, b);
      default:
        return direction * (a[id] - b[id]);
>>>>>>> b688b4f4d6148a543b423686a9f3c52ead8b7529
      }
    });
  }

  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');

    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;

      return accum;
    }, {});
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    this.subElements = {};
  }
}
