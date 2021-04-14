import StripeContainer from './StripeContainer'


const Payment = ({show,clicked}) => {
    return ( 
        <div  className="paymentForm">
         {show  ? <section className="container w-100 p-3 h-75" >
            <div className="card " >
            <h4 className="text-start" style={{paddingTop:'20px', paddingLeft:'40px'}}>
               Feed a child for 3 days
            </h4>
            <div>
               < StripeContainer/>
            </div>
            <p style={{textAlign:'center', paddingTop:"50px"}}>By making a donation you agree to our<br/> non refundable donation policy</p>
            </div>
        </section> 
        : null}
        
        </div>
     );
}
 
export default Payment;