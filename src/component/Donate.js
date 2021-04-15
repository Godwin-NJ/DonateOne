import {useState} from 'react'
import Payment from './Payment'
import data from './kiddata'


function Donate () {
        const[show, setShow] = useState(false);
        const [count, setCount] = useState(0);
        const[selectedRadioBtn, setSelectedRadioBtn] = useState('option1')
        const[feedDays, setFeedDays] = useState(data)
  

        const RadioBtnValue = (e) => {
            setSelectedRadioBtn(e.target.value)
            // setClicked(true)
            setShow(false)
            console.log('>>>>>>>>',e)
        //    setClicked(e.target.value)
           
        }
        // console.log(RadioBtnValue);

        const ClickDonate = (e) => {
            e.preventDefault();
            
            // setClicked(true)
            setShow(true)

            // if i sent it as !show , it toggles 
            // setSelectedRadioBtn(selectedRadioBtn)
            console.log('You have selected:',selectedRadioBtn)
            // if(RadioBtnValue){
            //     setShow(true);
            // }
        }
        // console.log(ClickDonate);

       return(
          <section className="container " >
            <div className="card w-100" >
            <h4 className="text-start" style={{paddingTop:'20px', paddingLeft:'40px'}}>
                How much do you want to donate?
            </h4>
            <form className="card-body w-90" onSubmit={ClickDonate}>
                    <div className="form-check form-check-inline cardBorder row w-100">
                        <input className="form-check-input col-4" type="radio" name="inlineRadioOptions" 
                        id="inlineRadio1" 
                        value="option1"
                        checked={selectedRadioBtn === 'option1'}
                        style={{width:'30px' , height:'35px',marginLeft:'-5px'}} 
                        onChange={RadioBtnValue}
                        />
                        <label className="form-check-label col-10" htmlFor="inlineRadio1" 
                        // style={{marginLeft:'10px'}}
                        >
                            <h5>Feed a child for 1 day</h5>
                            <h3 style={{textAlign:'left'}}>$10</h3>
                        </label>
                    </div>   

                     <div className="form-check form-check-inline cardBorder row w-100">
                        <input className="form-check-input col-4" type="radio" name="inlineRadioOptions" 
                        id="inlineRadio2" 
                        value="option2"
                        checked={selectedRadioBtn === 'option2'}
                        style={{width:'30px' , height:'35px',marginLeft:'-5px'} }
                        onChange={RadioBtnValue}
                        />
                        <label className="form-check-label col-10" htmlFor="inlineRadio2" 
                        style={{marginLeft:'10px'}}>
                            <h5>Feed a child for 3 day</h5>
                            <h3 style={{textAlign:'left'}}>$20</h3>
                        </label>
                    </div>  

                     <div className="form-check form-check-inline cardBorder row w-100">
                        <input className="form-check-input col-4" type="radio" name="inlineRadioOptions" 
                        id="inlineRadio3" 
                        value="option3"
                        checked={selectedRadioBtn === 'option3'}
                        style={{width:'30px' , height:'35px',marginLeft:'-5px'}}
                        onChange={RadioBtnValue}
                        />
                        <label className="form-check-label col-10" htmlFor="inlineRadio3" 
                        style={{marginLeft:'10px'}}>
                            <h5>Feed a child for 3 day</h5>
                            <h3 style={{textAlign:'left'}}>$30</h3>
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
             < Payment show={show} feedDays={feedDays} selectedRadioBtn={selectedRadioBtn} RadioBtnValue={RadioBtnValue}/>
{/* When You see Val in maotech
             I want the amount stated in the donate box to also appear 
            in the pop up modal dynamically when selected and confirmation done and to ensure the selected donation is what 
            is going to be debitted from the customer accts */}
        </section>
       )
}
 
export default Donate;