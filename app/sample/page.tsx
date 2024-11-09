import React from "react";

function page() {
  const data = {
    key_id: "rzp_test_1W7hIh70rcJIVQ",
    amount: 49900,
    currency: "INR",
    order_id: "order_PJEQtdXRsudmnw",
    name: "Sourcesta",
    description: "",
    callback_url: "",
    cancel_url: "",
  };
  return (
    <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
      <input type="hidden" name="key_id" value={data.key_id} />
      <input type="hidden" name="amount" value={data.amount} />
      <input type="hidden" name="currency" value={data.currency} />
      <input type="hidden" name="order_id" value={data.order_id} />
      <input type="hidden" name="name" value="Acme Corp" />
      <input type="hidden" name="description" value="A Wild Sheep Chase" />
      <input
        type="hidden"
        name="image"
        value="https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg"
      />
      <input type="hidden" name="prefill[name]" value="Gaurav Kumar" />
      <input type="hidden" name="prefill[contact]" value="9123456780" />
      <input
        type="hidden"
        name="prefill[email]"
        value="gaurav.kumar@example.com"
      />
      <input
        type="hidden"
        name="notes[shipping address]"
        value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001"
      />
      <input
        type="hidden"
        name="callback_url"
        value="https://example.com/payment-callback"
      />
      <input
        type="hidden"
        name="cancel_url"
        value="https://example.com/payment-cancel"
      />
      <button>Submit</button>
    </form>
  );
}

export default page;
