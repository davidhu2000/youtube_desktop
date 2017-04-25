export const toggleSidebar = () => {
  let sidebar = document.getElementById('sidebar');
  
  if (window.innerWidth <= 1312) {
    sidebar.classList.remove('hidden', 'ondocument', 'absolute');
    sidebar.classList.add('fixed');

    if (sidebar.classList.contains('offscreen')) {
      sidebar.classList.add('onscreen');
      sidebar.classList.remove('offscreen');
    } else {
      sidebar.classList.add('offscreen');
      sidebar.classList.remove('onscreen');
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