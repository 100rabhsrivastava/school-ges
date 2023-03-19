function openGallerying(id) {
  closeAll();
  const Gallerying = document.getElementById('Gallerying-' + id);
  const Carding = document.getElementById('Carding-' + id);
  Gallerying.classList.add('Gallerying--active');
  Carding.classList.add('Carding--active');
}

function closeAll() {
  const GalleryingActv = document.querySelector('.Gallerying--active');
  const CardingActv = document.querySelector('.Carding--active');
  if (GalleryingActv) {
    GalleryingActv.classList.remove('Gallerying--active');
  }
  if (CardingActv) {
    CardingActv.classList.remove('Carding--active');
  }
}