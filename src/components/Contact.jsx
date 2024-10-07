import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact() {

  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "", email: "", subject: "", msg: ""
  })


 const handleSubmit=()=>{
    const {name,email,subject,msg}=input
    if(!name || !email || !subject || !msg){
      toast.error("Enter Valid Inputs")
    }else{
      const serviceId="service_ndcours"
      const templateId="template_wi605q7"
      const publicKey="ymntLL37bDQ5G3EY-"

      const templateParams={
        from_name:name,
        from_email:email,
        to_name:"Ajay",
        message:msg,
        sub:subject
      }

      emailjs.send(serviceId,templateId,templateParams,publicKey).then((res)=>{
        console.log("email sent",res)
        if(res.status==200){
          toast.success('Email Send Successfully')
          setInput({name: "", email: "", subject: "", msg: ""})
          navigate('/')
        }

      }).catch(err=>{
        console.log(err);
      })

    }
 }

  return (
    <>
      <div className='container contct' style={{ minHeight: "80vh" }} >
        <h1 className='text-center'>Contact</h1>
        <div className='d-flex justify-content-center'>
          <div action="" className='f1'>

            <FloatingLabel controlId="name" label="Your Name" className="mb-3" >
              <Form.Control type="text" placeholder="" onChange={(e)=>{setInput({...input,name:e.target.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="" onChange={(e)=>{setInput({...input,email:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="Subect" label="Subject" className="mb-3">
              <Form.Control type="text" placeholder=""  onChange={(e)=>{setInput({...input,subject:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="msg" label="Message" className="mb-3" >
              <Form.Control style={{ height: '100px' }} type="text" placeholder="Type Your Message Here" onChange={(e)=>{setInput({...input,msg:e.target.value})}}  />
            </FloatingLabel>

            <div className='d-grid'>
              <button className='btn btn-warning' onClick={(e) => { handleSubmit() }}>Submit</button>
            </div>
           

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact