import PaymentForm from "../components/Paymentform";
import Summary from "../components/Summary";
export default function Checkout() {
  return (
    <div style={{ display: "flex" }}>
      <Summary />
      <PaymentForm />
    </div>
  );
}
