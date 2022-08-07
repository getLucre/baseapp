# Payment Button

Create a fixed amount for things and donations.

## Detail

Pay buttons are great when you have a fixed amount for a product or a donation. In fact, it is advised to be used for a scenario of donations. 

The feature is HTML embeddable so that you can copy it and put on your website for fixed-amount donations. When the customer or a visitor clicks on the button, Lucre displays a checkout page and an invoice for them.

Also, note that this feature is customisable for users to type in any amount and pay with the button.

Test it here by copying the code below to any HTML Editor and run it, then make a Lightning or Bitcoin payment worth of $10 to test this feature.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <form method="POST" action="https://dashboard.getlucre.xyz/api/v1/invoices">
          <input type="hidden" name="storeId" value="6EBZZeAqSwDms5PVeHReJXfN4jctp3TeFJuvNrXnX3ME" />
          <input type="hidden" name="checkoutDesc" value="Testing" />
          <input type="hidden" name="price" value="10" />
          <input type="hidden" name="currency" value="USD" />
          <input type="image" class="submit" name="submit" src="https://dashboard.getlucre.xyz/img/paybutton/pay.svg" style="width:209px" alt="Pay with Lucre, Cryptocurrency Payment Processor">
      </form>
  </body>
</html>
```
