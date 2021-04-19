import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe('pk_test_51Ihc5WEYMJyLML2vFTNJrZdWxZpsiR68DpuNwaM3fhzIdQfDwkht76M6EGhug5SSPn2yiycBFoq9xmDAUen6KDTR00HNjvJB0D');

const Payment = ({handelPaymentSuccess}) => {
    return (
        <Elements  stripe={stripePromise} >
             <SimpleCardForm handelPaymentSuccess={handelPaymentSuccess}></SimpleCardForm>  
        </Elements>
    );
};

export default Payment;