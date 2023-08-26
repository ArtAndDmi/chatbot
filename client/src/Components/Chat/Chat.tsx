import React, {useEffect, useState} from 'react'
import classes from './Chat.module.css'
import MessageList from "../MessageList/MessageList"
import {SendIcon} from "../../assets/svg/SendIcon"
import axios from "axios"

const Chat = () => {

    const [messages, setMessages] = useState<{
        sender: 'user' | 'system',
        type: 'string' | 'file' | 'input'
        body: {
            value?: string,
            type?: string,
            size?: string,
            name?: string,
            params?: string[],
            reqType?: string
        }
    }[]>([
        {sender: 'system', type: 'string', body: {value: 'Enter code'}}
    ])
    const [inputValue, setInputValue] = useState('')

    function addMessage() {
        if (inputValue.trim() !== '') {
            messages.push({body: {value: inputValue}, sender: 'user', type: 'string'})
            if (inputValue === '666') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['TIN', 'number', 'filename'], reqType: 'org'}
                })
            } else if (inputValue === '1') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['name', 'surname', 'age'], reqType: 'test'}
                })
            } else if (inputValue === '575798') {
                messages.push({sender: 'system', type: 'string', body: {value: '4-8: cache'}})
                messages.push({sender: 'system', type: 'string', body: {value: '33_: allintext'}})
                messages.push({sender: 'system', type: 'string', body: {value: '76545678214181: filetype'}})
                messages.push({sender: 'system', type: 'string', body: {value: '64034665: allintitle'}})
                messages.push({sender: 'system', type: 'string', body: {value: '0477873744567834174: allinurl'}})
                messages.push({sender: 'system', type: 'string', body: {value: '576444567844174: site'}})
                messages.push({sender: 'system', type: 'string', body: {value: '756566: inposttitle'}})
                messages.push({
                    sender: 'system',
                    type: 'string',
                    body: {value: '4764657621456785764445678574567844173: @source'}
                })
                messages.push({sender: 'system', type: 'string', body: {value: '666: find info about organisation'}})
            } else if (inputValue === '4-8') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename'], reqType: 'cache'}
                })
            } else if (inputValue === '33_') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename'], reqType: 'allin'}
                })
            } else if (inputValue === '64034665') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename'], reqType: 'allintitle'}
                })
            } else if (inputValue === '0477873744567834174') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename'], reqType: 'allinurl'}
                })
            } else if (inputValue === '576444567844174') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename'], reqType: 'sitek'}
                })
            } else if (inputValue === '756566') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename'], reqType: 'title'}
                })
            } else if (inputValue === '4764657621456785764445678574567844173') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'filename', 'source'], reqType: 'sources'}
                })
            } else if (inputValue === '576444567879961') {
                messages.push({
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'counts', 'keywords', 'filename'], reqType: 'general'}
                })
            } else if (inputValue === '76545678214181') {
                messages.push({
                    sender: 'system',
                    type: 'string',
                    body: {value: 'types of files'}
                }, {
                    sender: 'system',
                    type: 'string',
                    body: {value: 'odt(0), pdf(1), xlsx(2), csv(3), docx(4), pptx(5), doc(6)'}
                }, {
                    sender: 'system',
                    type: 'input',
                    body: {params: ['topic', 'filetype', 'counts'], reqType: 'filetype'}
                })
            } else {
                messages.push({sender: 'system', type: 'string', body: {value: 'Wrong code'}})
            }
        }

        setInputValue('')
    }


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addMessage()
        }
    }

    return (
        <div className={classes.container}>

            <MessageList messages={messages}/>
            <div className={classes.bottom}>
                <input
                    className={classes.inputMessage}
                    type={'text'}
                    placeholder={'Сообщение...'}
                    value={inputValue}
                    onKeyDown={handleKeyPress}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button className={classes.sendButton} onClick={addMessage}>
                    <SendIcon/>
                </button>

            </div>
        </div>
    )
}

export default Chat

