scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console
  }
  
  document.getElementById("nav-button_1").addEventListener('click', () => {
    scrollTo(document.getElementById("1"));
  });
  
  document.getElementById("nav-button_2").addEventListener('click', () => {
    scrollTo(document.getElementById("2"));
  });
  
  document.getElementById("nav-button_3").addEventListener('click', () => {
    scrollTo(document.getElementById("3"));
  });

