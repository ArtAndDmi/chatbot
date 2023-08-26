import React, {useState} from 'react'
import classes from './InputMessage.module.css'
import axios from "axios"

interface props {
    params: string[] | undefined,
    reqType: string | undefined
}

const InputMessage = ({params, reqType}: props) => {
    const initialValues: { [k: string]: any } = {}
    params?.forEach(param => initialValues[param] = '')


    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const sendRequest = () => {
        if (reqType === 'general'){
            const data = JSON.parse(JSON.stringify(values))
            let keywords: string[] = data.keywords.split(',')
            keywords = keywords.map(i => i.trim())
            keywords = keywords.filter(n => n)
            data.keywords = keywords
            data.count = keywords.length.toString()
            data.r = []
            keywords.forEach(i => {
                data.r.push('-')
                data.r.push(i)
            })
            console.log(data)
            axios.post('/main', {func: reqType, params: data})
                .catch(err => console.log(err))
                .then(data => console.log(data))
        } else {
            axios.post('/main', {func: reqType, params: values})
                .catch(err => console.log(err))
                .then(data => console.log(data))
        }

    }

    console.log(values)


    return (
        <div className={classes.container}>
            <p className={classes.title}>Enter params</p>
            {params?.map((item, index) =>
                item === 'keywords' ?
                    <input
                        placeholder={`Enter ${item}:(separated by ,)`}
                        value={values[item]}
                        name={item}
                        className={classes.input}
                        key={index}
                        onChange={e => handleInputChange(e)}
                    />
                    :
                    <input
                        placeholder={`Enter ${item}:`}
                        value={values[item]}
                        name={item}
                        className={classes.input}
                        key={index}
                        onChange={e => handleInputChange(e)}
                    />
            )}
            <button className={classes.sendButton} onClick={sendRequest}>Ok</button>
        </div>
    )
}

export default InputMessage