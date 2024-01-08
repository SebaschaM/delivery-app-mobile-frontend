import { useState } from 'react'

const ViewModel = () => {

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const onChange = (property: string, value: any) => {
        setValues({
            ...values,
            [property]: value
        })
    }
    
    const register = () => {
        console.log(JSON.stringify(values))
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default ViewModel