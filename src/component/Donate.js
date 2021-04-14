import {useState} from 'react'
import Payment from './Payment'


function Donate () {
        const[show, setShow] = useState(false);
        const [clicked, setClicked] = useState(false);
        const[selectedRadioBtn, setSelectedRadioBtn] = useState('')
  

        const RadioBtnValue = (e) => {
            setSelectedRadioBtn(e.target.value)
            // setClicked(true)
            setShow(false)
            console.log('>>>>>>>>',e)
        //    setClicked(e.target.value)
           e.preventDefault()
        }
        // console.log(RadioBtnValue);

        const ClickDonate = (e) => {
            e.preventDefault();
            
            // setClicked(true)
            setShow(true)
            // if i sent it as !show , it toggles 
            // setSelectedRadioBtn(selectedRadioBtn)
            console.log('You have selected:',{RadioBtnValue})
            // if(RadioBtnValue){
            //     setShow(true);
            // }
        }
        // console.log(ClickDonate);

       return(
          <section className="container w-50 p-3 h-75" >
            <div className="card " >
            <h4 className="text-start" style={{paddingTop:'20px', paddingLeft:'40px'}}>
                How much do you want to donate?
            </h4>
            <form className="card-body w-100 row" onSubmit={ClickDonate}>
                    <div className="form-check form-check-inline cardBorder ">
                        <input className="form-check-input " type="radio" name="inlineRadioOptions" 
                        id="inlineRadio1" 
                        value={selectedRadioBtn === 'option1'}
                        style={{width:'30px' , height:'35px',marginLeft:'-15px'}} 
                        onChange={RadioBtnValue}
                        />
                        <label className="form-check-label " htmlFor="inlineRadio1" 
                        style={{marginLeft:'10px'}}>
                            <h5>Feed a child for 1 day</h5>
                            <p>Nok 6.65</p>
                        </label>
                    </div>   

                     <div className="form-check form-check-inline cardBorder">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" 
                        id="inlineRadio2" 
                        value={selectedRadioBtn === 'option2'}
                        style={{width:'30px' , height:'35px',marginLeft:'-15px'} }
                        onChange={RadioBtnValue}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2" 
                        style={{marginLeft:'10px'}}>
                            <h5>Feed a child for 3 day</h5>
                            <p>Nok 6.65</p>
                        </label>
                    </div>  

                     <div className="form-check form-check-inline cardBorder">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" 
                        id="inlineRadio3" 
                        value={selectedRadioBtn === 'option3'}
                        style={{width:'30px' , height:'35px',marginLeft:'-15px'}}
                        onChange={RadioBtnValue}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio3" 
                        style={{marginLeft:'10px'}}>
                            <h5>Feed a child for 3 day</h5>
                            <p>Nok 6.65</p>
                        </label>
                    </div>   
                     <button type="submit" className="btn btn-dark confirmBtn" >
                        Select a donation
                        {/* create an array and use map(method) in here and loop thru it,use conditions ( if-else) when a particular
                         input is selected display information as regards  */}
                    </button>      
            </form>
            {/*end of Styling of the card body */}
                
            </div>
             < Payment show={show} />
{/* When You see Val in maotech
             I want the amount stated in the donate box to also appear 
            in the pop up modal dynamically when selected and confirmation done and to ensure the selected donation is what 
            is going to be debitted from the customer accts */}
        </section>
       )
}
 
export default Donate;