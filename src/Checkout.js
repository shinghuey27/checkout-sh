import { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import "./App.scss";
const Checkout = () => {
  const [error, setError] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    city: "",
    postal: "",
    country: "",
    number: false,
  });

  const checkError = (event) => {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let postal = document.getElementById("postal").value;

    var n1 = false;
    var n2 = false;
    var n3 = false;
    var n4 = false;
    var n5 = false;
    var n6 = false;
    var n7 = false;

    var validate = false;
    if (!email.trim()) {
      n1 = true;
      validate = true;
    }
    if (!phone.trim()) {
      n2 = true;
      validate = true;
    }
    if (!name.trim()) {
      n3 = true;
      validate = true;
    }
    if (country === "") {
      n4 = true;
      validate = true;
    }
    if (city === "") {
      n5 = true;
      validate = true;
    }
    if (address === "") {
      n6 = true;
      validate = true;
    }
    if (postal === "") {
      n7 = true;
      validate = true;
    }
    if (validate === false) {
      alert("success");
    } else {
      setError({
        email: n1,
        phone: n2,
        name: n3,
        country: n4,
        city: n5,
        address: n6,
        postal: n7,

      });
    }
  };

  const [itemAmt, setItemAmt] = useState(1);
  const [itemAmt1, setItemAmt1] = useState(1);
  const [error1, setError1] = useState(false);
  const [price, setPrice] = useState({
    bagPrice: 54.99,
    shoePrice: 74.99,
    shipping: 19.0,
  });

  useEffect(() => {
    setPrice({
      bagPrice: 54.99 * itemAmt,
      shoePrice: 74.99 * itemAmt1,
      shipping: 19.0,
    });
  }, [itemAmt, itemAmt1]);
  const total = price.shoePrice + price.shipping + price.bagPrice;

  function handleChange(e) {
    const x = Number(e.target.value);
    if (isNaN(x) || x < 0 || x > 10 || x % 1 !== 0) {
      setError({ number: true });
      setItemAmt(x);
      console.log(x);
    } else {
      setError({ number: false });
      setItemAmt(x);
      console.log(x);
    }
  }
  function increase(e) {
    const x = Number(itemAmt);
    if (isNaN(x - 1) || x - 1 < -2 || x - 1 > 8 || (x - 1) % 1 !== 0) {
      setError({ number: true });
      setItemAmt(x + 1);
      console.log(x + 1);
    } else {
      setError({ number: false });
      setItemAmt(x + 1);
      console.log(x + 1);
    }
  }
  function decrease(e) {
    const x = Number(itemAmt);
    if (x === 0) {
      setItemAmt(0);
    } else if (isNaN(x - 1) || x - 1 < 0 || x - 1 > 10 || (x - 1) % 1 !== 0) {
      setError({ number: true });
      setItemAmt(x - 1);
      console.log(x - 1);
    } else {
      setError({ number: false });
      setItemAmt(x - 1);
      console.log(x - 1);
    }
  }

  function handleChange1(e) {
    const y = Number(e.target.value);
    if (isNaN(y) || y < 0 || y > 10 || y % 1 !== 0) {
      setError1(true);
      setItemAmt1(y);
    } else {
      setError1(false);
      setItemAmt1(y);
    }
  }
  function increase1(e) {
    const y = Number(itemAmt1);
    if (isNaN(y - 1) || y - 1 < -2 || y - 1 > 8 || (y - 1) % 1 !== 0) {
      setError1(true);

      setItemAmt1(y + 1);
    } else {
      setError1(false);
      setItemAmt1(y + 1);
      console.log(y + 1);
    }
  }
  function decrease1(e) {
    const y = Number(itemAmt1);
    if (y === 0) {
      setItemAmt1(0);
    } else if (isNaN(y - 1) || y - 1 < 0 || y - 1 > 10 || (y - 1) % 1 !== 0) {
      setError1(true);
      setItemAmt1(y - 1);
      console.log(y - 1);
    } else {
      setError1(false);
      setItemAmt1(y - 1);
      console.log(y - 1);
    }
  }
  return (
    <main>
    <h1 className={styles.checkoutTitle}>Checkout</h1>

    <body>

      <section>
        <div className={styles.calcContainer}>
          <div className={`${styles.item} ${styles.itemTop}`}>
            <img src="photo1.png" className={styles.itemImg} alt="photo1" />
            <div className={styles.itemList}>
              <div className={styles.itemName}>Vintage Backbag</div>
              <div className={styles.itemPriceList}>
                <div className={styles.itemPromoPrice}>$54.99</div>
                <div className={styles.itemOriPrice}>$94.99</div>
              </div>

              <div className={styles.itemAmtContainer}>
                <button onClick={decrease} className={styles.itemAmtButton}>
                  <span className="material-icons button">remove</span>
                </button>
                <input
                  text="text"
                  value={itemAmt}
                  min="0"
                  className={styles.itemAmt}
                  onChange={handleChange}
                />
                <button onClick={increase} className={styles.itemAmtButton}>
                  <span className="material-icons button">add</span>
                </button>
              </div>
              <span
                className={
                  error.number === true ? styles.error : styles.noError
                }
              >
                Invalid Amount
              </span>
            </div>
          </div>

          <div className={`${styles.item} ${styles.itemBottom}`}>
            <img src="photo2.png" className={styles.itemImg} alt="photo2" />
            <div className={styles.itemList}>
              <div className={styles.itemName}>Levi Shoes</div>
              <div className={styles.itemPriceList}>
                <div className={styles.itemPromoPrice}>$74.99</div>
                <div className={styles.itemOriPrice}>$124.99</div>
              </div>

              <div className={styles.itemAmtContainer}>
                <button onClick={decrease1} className={styles.itemAmtButton}>
                  <span className="material-icons button">remove</span>
                </button>
                <input
                  text="text"
                  value={itemAmt1}
                  min="0"
                  className={styles.itemAmt}
                  onChange={handleChange1}
                />
                <button onClick={increase1} className={styles.itemAmtButton}>
                  <span className="material-icons button">add</span>
                </button>
              </div>
              <span className={error1 === true ? styles.error : styles.noError}>
                Invalid Amount
              </span>
            </div>
          </div>

          <hr className={styles.line} />
          <div className={styles.shippingTotal}>
            <div className={styles.shippingTitle}>Shipping</div>
            <div className={styles.shippingPrice}>${price.shipping}</div>
          </div>
          <hr className={styles.line} />
          <div className={styles.shippingTotal}>
            <div style ={{marginTop:"0.5rem"}} className={styles.shippingTitle}>Total</div>
            <div style ={{marginTop:"0.5rem"}} className={styles.shippingPrice}>${total.toFixed(2)}</div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>

        <h1 className={styles.checkoutContact}>Contact information</h1>

        <div className={styles.checkoutInfo}>
          <label className={styles.checkoutInfoLabel} htmlFor="email">
            E-mail
          </label>
          <div className={styles.checkInputOverview}>
            <input
              className={styles.checkoutInfoInput}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email..."
              autoComplete="none"
            />
            <span className="material-icons normal">email</span>
          </div>
          <span
            className={error.email === true ? styles.error : styles.noError}
          >
            Please enter your e-mail.
          </span>
        </div>

        <div className={styles.checkoutInfo}>
          <label className={styles.checkoutInfoLabel} htmlFor="phone">
            Phone
          </label>
          <div className={styles.checkInputOverview}>
            <input
              className={styles.checkoutInfoInput}
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone..."
              autoComplete="none"
            />
            <span className="material-icons normal">phone</span>
          </div>
          <span
            className={error.phone === true ? styles.error : styles.noError}
          >
            Please enter your phone.
          </span>
        </div>

        <h1 className={styles.checkoutShipping}>Shipping address</h1>

        <div className={styles.checkoutInfo}>
          <label className={styles.checkoutInfoLabel} htmlFor="name">
            Full name
          </label>
          <div className={styles.checkInputOverview}>
            <input
              className={styles.checkoutInfoInput}
              type="text"
              name="name"
              id="name"
              placeholder="Your name.."
              autoComplete="none"
            />
            <span className="material-icons normal">account_circle</span>
          </div>
          <span className={error.name === true ? styles.error : styles.noError}>
            Please enter your full name.
          </span>
        </div>

        <div className={styles.checkoutInfo}>
          <label className={styles.checkoutInfoLabel} htmlFor="address">
            Address
          </label>
          <div className={styles.checkInputOverview}>
            <input
              className={styles.checkoutInfoInput}
              type="text"
              name="address"
              id="address"
              placeholder="Your address.."
              autoComplete="none"
            />
            <span className="material-icons normal">home</span>
          </div>
          <span className={error.address === true ? styles.error : styles.noError}>
            Please enter your address.
          </span>
        </div>

        <div className={styles.checkoutInfo}>
          <label className={styles.checkoutInfoLabel} htmlFor="city">
            City
          </label>
          <div className={styles.checkInputOverview}>
            <input
              className={styles.checkoutInfoInput}
              type="text"
              name="city"
              id="city"
              placeholder="Your city.."
              autoComplete="none"
            />
            <span className="material-icons normal">location_city</span>
          </div>
          <span className={error.city === true ? styles.error : styles.noError}>
            Please enter your city.
          </span>
        </div>
        <div className={styles.countryPostal}>
          <div className={styles.checkoutInfo}>
            <label className={styles.checkoutInfoLabel} htmlFor="country">
              Country
            </label>

            <div className={styles.checkInputOverview}>
              <div className={styles.select}>
                <span className="material-icons expand">expand_more</span>

                <input
                  type="text"
                  list="country"
                  className={styles.datalist}
                  placeholder="Your country.."
                />
                <datalist
                  className={`${styles.customSelect} ${styles.checkoutInfoInput}`}
                  name="country"
                  id="country"
                >
                  <option value="Malaysia">Malaysia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Taiwan">Taiwan</option>
                </datalist>
              </div>
              <span
                className={
                  error.country === true ? styles.error : styles.noError
                }
              >
                Please select a country.
              </span>
              <span className="material-icons normal">public</span>
            </div>
          </div>
          <span className={error === 4 ? styles.error : styles.noError}>
            Please select country.
          </span>
          <div className={styles.postal}>
            <label className={styles.checkoutInfoLabel} htmlFor="postal">
              Postal code
            </label>
            <div className={styles.checkInputOverview}>
              <input
                className={styles.postalInput}
                type="text"
                name="postal"
                id="postal"
                placeholder="Your postal code.."
                autoComplete="none"
              />
              <span className="material-icons normal">markunread_mailbox</span>
            </div>
            <span className={error.postal === true ? styles.error : styles.noError}>
              Please enter postal.
            </span>
          </div>
        </div>
        <div className={styles.checkboxItem}>
          <input type="checkbox" id="3" className={styles.checkbox} />
          <label htmlFor="3" className={styles.checkboxDesc}>
            Save this information for next time
          </label>
        </div>
        <div className={styles.buttonDisplay}>
          <button className={styles.button} onClick={checkError}>
            Continue
          </button>
        </div>
      </section>

     
    </body>
    <footer className={styles.footer}>
        created by <b className={styles.username}>shinghuey27</b> -
        devChallenges.io
      </footer>
    </main>
  );
};

export default Checkout;
