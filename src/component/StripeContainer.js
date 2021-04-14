import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import '../../src/App.css';

const PUBLIC_KEY = "pk_test_51IeyckKraXYgLPWBXRnkbl3hjmzeTeY83uB7F4T0s4Nt7uQ0nYczEZxSCoBrLavCg3NkBNW8ABnVAh06wIjb7WfS00nCjWo9RS"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return ( 
        <Elements stripe={stripeTestPromise}>
            < PaymentForm />
        </Elements >
     );
}
 
export default StripeContainer;