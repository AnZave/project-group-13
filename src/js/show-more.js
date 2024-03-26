const catalog = document.querySelectorAll(['[data-catalog] li']);
const showMoreBtn = document.querySelector(['[data-catalog-btn]']);

if (catalog.length > 4) {
  catalog.forEach((item, idx) => {
    if (idx >= 4) {
      item.classList.add('hide');
    }
  });
}

showMoreBtn.addEventListener('click', changeVisible);

function changeVisible() {
  catalog.forEach((item, idx) => {
    if (idx >= 4) {
      item.classList.toggle('hide');
    }
  });

  showMoreBtn.classList.toggle('show');
  showMoreBtn.innerHTML = showMoreBtn.classList.contains('show')
    ? 'Show less'
    : 'Show more';
}

window.matchMedia('(max-width: 767px)').addEventListener('change', onResize);

function onResize(e) {
  if (
    e.matches &&
    catalog.length > 4 &&
    !showMoreBtn.classList.contains('show')
  ) {
    catalog.forEach((item, idx) => {
      if (idx >= 4) {
        item.classList.add('hide');
      }
    });
  } else {
    catalog.forEach(item => {
      item.classList.remove('hide');
    });
  }
}