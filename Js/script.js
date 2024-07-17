$(document).ready(function() {
    const currentPath = window.location.pathname;
    const menuItems = $('#menu a');
    menuItems.each(function() {
      let linkPath = $(this).attr('href');
      if (!linkPath.startsWith('http')) {
        linkPath = new URL(linkPath, window.location.href).pathname;
      }
      if (currentPath === linkPath) {
        $(this).addClass('active');
      }
    });
  });