import './App.css'
import CheckoutStepper from './components/checkoutStepper'
const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shippinh address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
]
function App() {

  return (
    <div>

      <h2 style={{ textAlign: "center", marginBottom: "70px", marginTop: "60px" }}>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default App
