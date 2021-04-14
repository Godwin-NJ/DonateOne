import {useState} from 'react'
// import { css, jsx } from '@emotion/react'
import {GiCircle} from "react-icons/gi";
import { IconContext } from "react-icons";


const Donate = () => {
        const[color, setColor] = useState('');
        // const[iconColor, setIconColor] = useState('')
        // this code {changeColor} used to color the border when clicked but its not working 
        const changeColor = () => {
            let borderColor = `${color} ? 'firstBorderColor' : 'secondBorderColor'`;
            setColor({color : !borderColor});
            // setColor({color : !color})
             console.log('btn clicked')
        }
        
        // const selectBtn =()=> {
        //     const clickColor= '#09090B'
        //     setColor(clickColor);
        //     console.log('btn clicked')
        // }
    

    return ( 
        <section className="container w-50 p-3 h-75" onSubmit={() => console.log('confirm payment')}>
            <div className="card " >
            <h4 className="text-start" style={{paddingTop:'20px', paddingLeft:'40px'}}>How much do you want to donate?</h4>
             {/* Styling of the card body */}
            <div className="card-body w-100">
                <article className="cardBorder "  onClick={changeColor} >
                    <div className="row" >   
                        {/* iconcontext is used to style the icon  */}
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                        <div className="col col-lg-2 ">
                           < GiCircle size={35} style={{marginLeft:"5px", marginTop:"10px" }} /> 
                        </div>   
                        </IconContext.Provider>                
                        <div className="col col-lg-15" >
                            <h5>Feed a child for 1 day</h5>
                            <p>Nok 6.65</p>
                        </div>
                    </div>
                </article>
                  {/* <article className="cardBorder">
                    <div className="row">   
                        <div className="col col-lg-2">
                           < GiCircle size={35} style={{marginLeft:"10px", marginTop:"10px"}}/> 
                        </div>                   
                        <div className="col col-lg-15" >
                            <h5>Feed a child for 3 days</h5>
                            <p>Nok 16.65</p>
                        </div>
                    </div>
                </article>
                      <article className="cardBorder">
                    <div className="row">   
                        <div className="col col-lg-2">
                           < GiCircle size={35} style={{marginLeft:"10px", marginTop:"10px"}}/> 
                        </div>                   
                        <div className="col col-lg-15" >
                            <h5>Feed a child for 7 days</h5>
                            <p>Nok 30.65</p>
                        </div>
                    </div>
                </article> */}
            </div>
            {/*end of Styling of the card body */}
               <button type="button" className="btn btn-dark confirmBtn">Select a donation</button>
            </div>
            {/* pop up when donate type is selected */}
            {/* <Payment /> */}
        </section>
     );
}
 
export default Donate;


// payment original format
<>
         {show  ? <section className="container w-100 p-3 h-75" >
            <div className="card " >
            <h4 className="text-start" style={{paddingTop:'20px', paddingLeft:'40px'}}>
               Feed a child for 3 days
            </h4>
            <p>Nok 6.65</p>
            <div className="card-body w-100 row">
                    <div className="form-check form-check-inline cardBorder ">
                        <h6>VISA</h6><br/>
                        
                            <div className="txtConfirm">****412536</div>
                            <div className="txtConfirm">Exp  11/22/23</div>
                       
                    </div>   
                    <a href="#">Use a new card</a>   
                          
            </div>
            {/*end of Styling of the card body */}
            <button type="button" className="btn btn-dark confirmBtn" >
                Confirm Donation
            </button>
            <p style={{textAlign:'center'}}>By making a donation you agree to our<br/> non refundable donation policy</p>
            </div>
        </section> : null}
        
        </>
        // end here