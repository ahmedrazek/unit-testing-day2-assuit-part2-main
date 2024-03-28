const User = require("../lab2");
describe("test set id", () => {
  let u1;
  beforeEach(() => {
    u1 = new User("ahmed", 123);
  });
  //mocking object
  it("that user  produce used in cart array", () => {
    let obj = jasmine.createSpyObj(["product"]);

    u1.addToCart(obj);
    expect(u1.cart.length).toBe > 1;
  });
});
describe("test calculate price in the cart", () => {
  let u1;
  beforeEach(() => {
    u1 = new User("ahmed", 123);
  });
  //mocking object

  it("that the calculateTotalCartPrice function ", () => {
    spyOn(u1.cart, "reduce");
    let obj = jasmine.createSpyObj(["product"]);

    u1.addToCart(obj);
    u1.calculateTotalCartPrice();
    expect(u1.cart.reduce).toHaveBeenCalled();
  });
});

describe("test the checkout functions in class user", () => {
  let u1;
  beforeEach(() => {
    u1 = new User("ahmed", 123);
  });

  it("that the checkout function ", () => {
    //mocking object
    let obj = jasmine.createSpyObj([
      "goToVerifyPage",
      "returnBack",
      "isVerify",
    ]);
    obj.goToVerifyPage.and.returnValue(123);
    obj.returnBack.and.returnValue(456);
    obj.isVerify.and.returnValue(false);
    let res = u1.checkout(obj);
    expect(res).toBe(false);
  });
});
