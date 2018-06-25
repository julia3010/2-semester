window.onload = function() {

  function dnd(e) {
    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }

    let index = e.target.getAttribute('id').substr(-1);
    let cart = document.getElementById('cart');
    let cartfull = document.getElementById('cartFull');

    let tempLT = document.getElementById('templt');
    let tempRT = document.getElementById('temprt');
    let coords;

    if ((e.target.getAttribute('id').substr(0, 2) != 'lt') && (e.target.getAttribute('id').substr(0, 2) != 'rt')) {
      tempLT.innerHTML = e.target.children[0].innerHTML;
      tempRT.innerHTML = e.target.children[1].innerHTML;
      coords = getCoords(e.target);
    } else {
      tempLT.innerHTML = e.target.parentNode.children[0].innerHTML;
      tempRT.innerHTML = e.target.parentNode.children[1].innerHTML;
      coords = getCoords(e.target.parentNode);
    }

    let tempItem = document.getElementById('temp');
    tempItem.setAttribute('id', 'temp');
    tempItem.style.display = 'block';

    document.body.appendChild(tempItem);

    tempItem.style.position = 'absolute';
    //let coords = getCoords(e.target);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    moveAt(e);

    function moveAt(e) {
      tempItem.style.left = e.pageX - shiftX + 'px';
      tempItem.style.top = e.pageY - shiftY + 'px';
    }

    // слежение за переносом
    document.onmousemove = function(e) {
      moveAt(e);
    }

    // окончание переноса
    tempItem.onmouseup = function(e) {

      document.onmousemove = null;
      tempItem.onmouseup = null;
      //document.getElementById('tempItem').remove();
      tempItem.style.display = 'none';

      let oldZ = cart.style.zIndex;
      let oldD = cart.style.display;

      cart.style.display = "table-cell";
      cartfull.style.display = "none";

      if (document.elementFromPoint(e.clientX, e.clientY) == cart) {
        vm.addItem(index);
      }

      if (!vm.cartIsEmpty()) {
        cart.style.display = "none";
        cartfull.style.display = "block";
      }
    }
  }

  let item0 = document.getElementById('itemR0');
  let item1 = document.getElementById('itemR1');
  let item2 = document.getElementById('itemR2');
  let item3 = document.getElementById('itemR3');

  item0.onmousedown = dnd;
  item1.onmousedown = dnd;
  item2.onmousedown = dnd;
  item3.onmousedown = dnd;

};
