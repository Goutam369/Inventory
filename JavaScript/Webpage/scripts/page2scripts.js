// pageId = $('body').pagecontainer('getActivePage').prop("id");
document.getElementById("Dbutton").addEventListener("click", function() {
  const id=1;
  history.pushState({id},`Selected`,`./page2.html`);
  alert("Hello World");
  });