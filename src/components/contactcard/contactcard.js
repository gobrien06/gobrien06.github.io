import React, {useState} from "react";
import { FormGroup, Card, Label, Button} from 'reactstrap';
import './contactcard.css';

const ContactCard=()=>{
    /*let [email,setEmail] = useState('');
    let[message,setMessage] = useState('');*/
    let[feedback,setFeedback] = useState('');

    const postEmail=(e)=>{
        //nothing yet
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setFeedback('Success! Your message has been sent.');
          } else {
            setFeedback('Error! Your message could not be sent.');
          }
        };
        xhr.send(data);
      }
    
    const handleChange=(e, type)=>{
        setFeedback('');
        /*
        e.preventDefault();
        if(type===email){
            setEmail(e.target.type.value);
            return;
        }
        setMessage(e.target.type.value);
        */
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        postEmail(e);
    }
 
    return(
        <Card className='neucard'>
            <form   onSubmit={handleSubmit}
            action="https://formspree.io/mzbgvyqr"
            method="POST">
                <FormGroup>
                <Label for="exampleEmail" style={{fontWeight:`600`, fontSize:`1.3rem`,}}>Email</Label><br/>
                <input style={{
                    background:`#2C2F33`,
                    padding:`1vh`,
                    color:`white`,
                    marginBottom:`2vh`,
                    boxShadow:`inset 0.2vh 0.2vh 0.3vh #000000`,
                    border:`none`,
                }}type="email" name="email" id="email" placeholder="Enter your email." onChange={(e) => handleChange(e,"email")}/>
                </FormGroup>

                <FormGroup>
                <Label for="exampleEmail" style={{fontWeight:`600`,fontSize:`1.3rem`,}}>Message</Label><br/>
                <textarea style={{
                    background:`#2C2F33`,
                    padding:`1vh`,
                    color:`white`,
                    resize:`none`,
                    height:`15vh`,
                    width:`95%`,
                    marginBottom:`2vh`,
                    boxShadow:`inset 0.2vh 0.2vh 0.3vh #000000`,
                    border:`none`,
                }}type="text" name="message" id="message" placeholder="Enter your message." onChange={(e) => handleChange(e)}/>               
                </FormGroup>
                <a><Button type="submit" style={{
                     background:`#8BDDBD`,
                     marginLeft:`auto`,
                     color:`#2C2F33`,
                     fontWeight:`600`,
                     border:`#2C2F33`,
                }}>Submit</Button></a>
                <br/>
                {feedback}
            </form>
        </Card>
    )
}
//consider color A3D7E8 (blue) for the button as well

export default ContactCard;