function Vm() {
  let self = this;
  self.cartIsEmpty = ko.observable(true);

  self.itemList = ko.observableArray([
    {itemName: 'Торт "Наполеон"', price: 560},
    {itemName: 'Торт "Ле Сантье"', price: 725},
    {itemName: 'Тарт "Лесная Ягода"', price: 415},
    {itemName: 'Торт "Фрамбузье"', price: 264}
  ]);

  self.cartList = ko.observableArray(
    [
      [{itemName: ko.observable(null), price: 0}, ko.observable(0)],
      [{itemName: ko.observable(null), price: 0}, ko.observable(0)],
      [{itemName: ko.observable(null), price: 0}, ko.observable(0)],
      [{itemName: ko.observable(null), price: 0}, ko.observable(0)]
    ]
  );

  self.itemIsUsed = function(itemName) {
    if (!self.cartList()[0]) { return false };
    let iiu = false;
    self.cartList().forEach(function(im, a, arr) {
      if ( im[0].itemName == itemName ) { iiu = true; }
    });
    return iiu;
  };

  self.countInc = function() {
    self.cartList()[0][1](self.cartList()[0][1]() + 1);
  }

  self.test = function() {
    alert('test');
  }

  self.addItem = function(itemIndex) {
    if (self.cartList()[itemIndex][0].itemName() == null) {
      self.cartList()[itemIndex][0].itemName(self.itemList()[itemIndex].itemName);
      self.cartList()[itemIndex][0].price = self.itemList()[itemIndex].price;
      self.cartList()[itemIndex][1](1);
      console.log('item added');
    } else {
      self.cartList()[itemIndex][1]( self.cartList()[itemIndex][1]() + 1);
      console.log('item plus');
    }

    self.cartIsEmpty(false);
  };

  self.rmItem = function(index) {
    if ( self.cartList()[index][1]() == 1) {
      self.cartList()[index][0].itemName(null);
      self.cartList()[index][0].price = 0;
      self.cartList()[index][1](0);
    } else {
      self.cartList()[index][1]( self.cartList()[index][1]() - 1 );
    }
    if (
      (self.cartList()[0][0].itemName()==null) &&
      (self.cartList()[1][0].itemName()==null) &&
      (self.cartList()[2][0].itemName()==null) &&
      (self.cartList()[3][0].itemName()==null)
    ) {
      self.cartIsEmpty(true);
    }
  }

  self.totalPrice = ko.computed(function() {
    if (!self.cartList()[0]) {
      return 0;
    } else {
      let sum = 0;
      self.cartList().forEach(function(im, a, arr) {
        sum += self.cartList()[a][1]() * self.cartList()[a][0].price;
      });
      return sum;
    }
  }, self);

}

let vm = new Vm;

ko.applyBindings(vm);
