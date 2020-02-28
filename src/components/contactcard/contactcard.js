import React, {useState} from "react";
import {Form, FormGroup, Label, Input,Card, Button} from 'reactstrap';

const ContactCard=()=>{
    let [email,setEmail] = useState('');
    let[message,setMessage] = useState('');
    let[feedback,setFeedback] = useState('');

    const postEmail=()=>{
        //nothing yet
    }
    
    const handleChange=(e, type)=>{
        e.preventDefault();
        if(type===email){
            setEmail(e.target.type.value);
            return;
        }
        setMessage(e.target.type.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        postEmail();
        setEmail('');
        setMessage('');
        setFeedback('Sent!');
    }

    return(
        <Card className="neucard">
            <Form>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter your email." onChange={(e) => handleChange(e,"email")}/>
                </FormGroup>

                <FormGroup>
                <Label for="exampleEmail">Message</Label>
                <Input type="textarea" name="message" id="message" placeholder="Enter your message." onChange={(e) => handleChange(e)}/>               
                </FormGroup>
                <a><Button type="submit" onClick={handleSubmit} style={{
                     background:`#5B53B9`,
                     marginLeft:`auto`,
                     border:`#5B53B9`,
                }}>Submit</Button></a>
                <br/> <br/>
                {feedback}
            </Form>
        </Card>
    )
}

export default ContactCard;