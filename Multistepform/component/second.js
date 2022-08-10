import {Box, Text, TextInput, Select} from '@mantine/core';

function Second({ formData, setFormData }) {

    return(
        <div>
        <Box >
        <Box sx={{margin: '1rem 0',}}>
        <TextInput onChange = {(e) => {setFormData({...formData, email: e.target.value,})
        }} value={formData.email}  placeholder="ambalika@gmail.com" required />
        <Select
        data={[
        { value: 'Student', label: 'Student' },
        { value: 'Employed', label: 'Employed' },
        { value: 'Business', label: 'Business' },
       ]}
        onChange={(e) => {
        console.log(e);
        setFormData({ ...formData, employment_status: e });
       }}
       value={formData.employment_status}
     
       label="Your emplyment status"
       placeholder="Choose one"
    />
        </Box>
        </Box>
        </div>
    )
}
export default Second;
