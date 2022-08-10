import React, {useState} from 'react'
import { Box, Button, Title} from '@mantine/core';
import First from "../component/First/index";
import Second from "../component/Second/index";
import Third from "../component/Third/index";

function Form() 
{
   const [page, setPage] = useState(0)
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    employment_status: null
   });


   const ConditionalComponent = () => {
    switch (page) {
        case 0:
            return <First formData={formData} setFormData={setFormData}/>
        case 1:
            return <Second formData={formData} setFormData={setFormData} />
        case 2:
            return <Third formData={formData} setFormData={setFormData}/>
        default:
            return <first  formData={formData} setFormData={setFormData}/>         
            
        }
   };

   function  handleSubmit () {
    if (page === 0){
        if (formData.name === ''  || formData.name.length <=1 ){
            return alert("please enter your name");

        }
        else {
            setPage(page + 1)
    
        }
    }
    else if (page === 1) {
        if (formData.email === '' || !formData.email.includes('@')) {
          return alert('Please enter a valid email');
        } else if (!formData.employment_status) {
          return alert('Please select your employment status');
        } else {
          setPage(page + 1);
          console.log(formData);
        }
      }
      else if (page === 2) {
        setPage(0);
        console.log(formData);
        setFormData({
           name: '',
           email: '',
           employment_status: null,
        });
      }
   }

    return (
    <div>
    <Box >
    {ConditionalComponent()}
    <Button onClick={handleSubmit}>
    {page === 0 || page === 1 ? "Next " : "Submit" }
    </Button> 
    
   {
    page > 0 && <Button onClick={() => setPage(page-1)}>Back</Button>
   }


    </Box>    
    
    </div>
  )
}

export default Form;