function myFunction() {
    var div = document.createElement('div');
    div.className = "main";
    var maincontentTag = document.createElement('div');
    maincontentTag.className = "maincontent";
    var textnode = document.createTextNode("Note: Using margin:auto will not work in IE8, unless a !DOCTYPE is declared.Note: Using margin:auto will not work in IE8, unless a !DOCTYPE is declared.");         // Create a text node
    maincontentTag.appendChild(textnode);
    div.appendChild(maincontentTag);
    document.getElementsByClassName("container")[0].appendChild(div);

    setNewHeight();
  }

  function setNewHeight() {
      var container = document.getElementsByClassName("container")[0];
      var childNodes = container.children;
      var count = container.childElementCount;

      var height = 0;
      for ( var i = 0 ; i < count; i++ ) {
          if (childNodes[i].style) {
            height = height + childNodes[i].clientHeight;
          }
     }

     container.style.maxHeight =  height;
  }