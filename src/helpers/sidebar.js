/* global document, window */
export const toggleSidebar = () => {
  let sidebar = document.getElementById('sidebar');
  let cover = document.getElementById('sidebar-cover');
  let channel = document.getElementsByClassName('channels-container')[0];

  if (window.innerWidth <= 1312 || channel) {
    sidebar.classList.remove('hidden', 'ondocument', 'absolute');
    sidebar.classList.add('fixed');

    if (sidebar.classList.contains('offscreen')) {
      sidebar.classList.add('onscreen');
      sidebar.classList.remove('offscreen');
      cover.classList.remove('hidden');
    } else {
      sidebar.classList.add('offscreen');
      sidebar.classList.remove('onscreen');
      cover.classList.add('hidden');
    }
  } else {
    sidebar.classList.remove('offscreen', 'onscreen', 'fixed');
    sidebar.classList.add('absolute');

    if (sidebar.classList.contains('hidden')) {
      sidebar.classList.add('ondocument');
      sidebar.classList.remove('hidden');
    } else {
      sidebar.classList.add('hidden');
      sidebar.classList.remove('ondocument');
    }
  }
};
