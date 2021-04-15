import StripeContainer from './StripeContainer'


const Payment = ({show,clicked,feedDays,selectedRadioBtn}) => {
    return ( 
        <div  className="paymentForm ">
         {show  ? <section  >
            <div className="card " >
            <h4 className="text-start" style={{paddingTop:'20px', paddingLeft:'40px'}}>
               {feedDays.map((info) => {
                  const{kid,amount,id} = info
                  console.log(info)
                     return(
                        <div key={id}>
                        <p>{kid} @ {amount}</p>
                     </div>
                     )
               })}
            </h4>
            <div>
               < StripeContainer />
            </div>
            <p style={{textAlign:'center', paddingTop:"50px"}}>By making a donation you agree to our<br/> non refundable donation policy</p>
            </div>
        </section> 
        : null}
        
        </div>
     );
}
 
export default Payment;