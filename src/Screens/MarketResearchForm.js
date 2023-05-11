import React, {useState} from 'react';
import axios from 'axios';
//import Dropdown from 'react-dropdown';
import './Dropdown.css';


function MarketResearchForm(props) {
    


    const [contactFullName, setContactFullName] = useState();
    const [businessName, setBusinessName] = useState();
    const [businessType, setBusinessType] = useState();
    const [businessAddress, setBusinessAddress] = useState();
    const [email, setEmail] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const [revenue, setRevenue] = useState();
    const [numEmployees, setNumEmployees] = useState();
    const [contactedBy, setContactedBy] = useState();
    const [interest, setInterest] = useState(0);
    const [question1, setQuestion1] = useState();


    const handleSelectChange1 = (event) => {
        setBusinessType(event.target.value);
      };

      const handleSelectChange2 = (event) => {
        setInterest(event.target.value);
      };

    
    const Dropdown1 = () => {
        return (
          <div className="dropdown">
            <select className="dropdown-select" value={businessType} onChange={handleSelectChange1}>
            <option value="Food">Food</option>
              <option value="Retail">Retail</option>
              <option value="Service">Service</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
        );
      };


      const Dropdown2 = () => {
        return (
          <div className="dropdown">
            <select className="dropdown-select" value={interest} onChange={handleSelectChange2}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        );
      };
    const submitForm = async(e) => {
        e.preventDefault();
        //console.log(firstName,lastName,age,school,teamName);

        const data = {
            
            contactFullName,
            businessName,
            businessType,
            businessAddress,
            email,
            phoneNum,
            revenue,
            numEmployees,
            contactedBy,
            interest,
            question1

        }

        console.log(data);
        
        //https://sheet.best/api/sheets/1c582245-0efb-4679-b58c-e5ffe07734dd
       


        try {
            
            const response = await axios.post('https://sheet.best/api/sheets/c700e35c-7a01-40d7-be98-02b338c99541',data)
            console.log(response);
            if (response.status === 200){
                alert("Success!");
                setContactFullName("");
                setBusinessName("");
                setBusinessAddress("")
                setBusinessType("");
                setEmail("");
                setPhoneNum("");
                setRevenue("");
                setNumEmployees("");
                setContactedBy("");
                setInterest("");
                setQuestion1("");


            }

        } catch (error) {
            console.log(error)
            alert("failed")
        }


}

    
    
    return (
        <div>
             <form onSubmit={submitForm}>


                        <h5 style={{margin:10}}>Business Info</h5>
                        <label style ={{margin:10,}}>Contact Full Name: </label>
                        <input style={{
                            height:25,
                            border:'1px solid black',
                            borderRadius:5,
                            margin:5
                        }} type="text" placeholder='Enter name' 
                        onChange={(e)=>setContactFullName(e.target.value)} value={contactFullName}/>
                        <br></br>
                        <label style ={{margin:10,}}>Business Name: </label>
                        <input style={{
                            height:25,
                            border:'1px solid black',
                            borderRadius:5,
                            margin:5
                        }} type="text" placeholder='Business Name' 
                        onChange={(e)=>setBusinessName(e.target.value)} value={businessName}/>
                        <br></br>
                        <label style ={{margin:10,}}>Business Type</label>
                        <Dropdown1 
                        />;
                        <br></br>
                                <label style ={{margin:10,}}>Business Address</label>
                                <input style={{
                                    height:25,
                                    border:'1px solid black',
                                    borderRadius:5,
                                    margin:5
                                }} type="text" placeholder='Business Address' 
                                onChange={(e)=>setBusinessAddress(e.target.value)} value={businessAddress}/>
                        <br></br>
                        
                                <label style ={{margin:10,}}>Email:</label>
                                <input style={{
                                    height:25,
                                    border:'1px solid black',
                                    borderRadius:5,
                                    margin:5
                                }} type="text" placeholder='email' 
                                onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <br></br>

                    <br></br>
                        
                        <label style ={{margin:10,}}>Phone Number:</label>
                        <input style={{
                            height:25,
                            border:'1px solid black',
                            borderRadius:5,
                            margin:5
                        }} type="text" placeholder='Phone #' 
                        onChange={(e)=>setPhoneNum(e.target.value)} value={phoneNum}/>
                    <br></br>

                                <label style ={{margin:10,}}>Revenue: </label>
                                <input style={{
                                    height:25,
                                    border:'1px solid black',
                                    borderRadius:5,
                                    margin:5
                                }} type="text" placeholder='revenue' 
                                onChange={(e)=>setRevenue(e.target.value)} value={revenue}/>
                        <br></br>
                        <br></br>

                                <label style ={{margin:10,}}>Number of employees </label>
                                <input style={{
                                    height:25,
                                    border:'1px solid black',
                                    borderRadius:5,
                                    margin:5
                                }} type="text" placeholder='# employees' 
                                onChange={(e)=>setNumEmployees(e.target.value)} value={numEmployees}/>
                     


                    <br></br>

                            <label style ={{margin:10,}}>Contacted by</label>
                            <input style={{
                                height:25,
                                border:'1px solid black',
                                borderRadius:5,
                                margin:5
                            }} type="text" placeholder='Gang' 
                            onChange={(e)=>setContactedBy(e.target.value)} value={contactedBy}/>
                    <br></br>
                    <br></br>

                            <label style ={{margin:10,}}>Interest</label>
                        <Dropdown2 
                        />;
                    <br></br>
                   

                <br></br>

                            <label style ={{margin:10,}}>If no, explain why. if yes list positives</label>
                            <input style={{
                                height:25,
                                border:'1px solid black',
                                borderRadius:5,
                                margin:5
                            }} type="text" placeholder='no cause they wack...' 
                            onChange={(e)=>setQuestion1(e.target.value)} value={question1}/>
                    <br></br>
                    <div>
                    <button style={{color:"red", margin: 10}} type="submit">Submit</button>
                </div>

</form>
        </div>
    );
}

export default MarketResearchForm;