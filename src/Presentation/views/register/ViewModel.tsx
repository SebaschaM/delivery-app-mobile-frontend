import { useState } from 'react'
import { AppDelivery} from '../../../Data/sources/remote/api/ApiDelivery'

const ViewModel = () => {

    const [values, setValues] = useState({
        email: '',
        name: '',
        last_name: '',
        phone: '',
        password: '',
        passwordConfirm: ''
    })

    const onChange = (property: string, value: any) => {
        setValues({
            ...values,
            [property]: value
        })
    }

    const register = async () => {
        try {
            const response = await AppDelivery.post('/users/create', values)
            console.log(JSON.stringify(response.data))
            //console.log(JSON.stringify(values))

        } catch (error) {
            console.log(error)
        }
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default ViewModel