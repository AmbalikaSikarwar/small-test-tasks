import {Box, Text, TextInput, Select} from '@mantine/core';

function First({ formData, setFormData }) {

    return(
        <div>
        <Box >
        <Text>To start with, whats your beautiful name?</Text>
        <Box sx={{margin: '1rem 0',}}>
        <TextInput onChange = {(e) => {setFormData({...formData, name: e.target.value,})
        }} value={formData.name}  placeholder="Ambalika" required />
        
        </Box>
        </Box>
        </div>
    )
}
export default First;