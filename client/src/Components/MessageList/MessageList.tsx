import React, {useEffect, useRef} from 'react'
import classes from './MessageList.module.css'
import Message from "../Message/Message"

interface props {
    messages: {
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
    }[]
}

const MessageList = ({messages}: props) => {

    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div className={classes.container}>
            {messages.map((message, i) => <Message sender={message.sender} body={message.body} type={message.type} key={i}/>)}
            <div ref={messagesEndRef}/>
        </div>
    )
}

export default MessageList