import React from 'react'
import classes from './Message.module.css'
import FileMessage from "../FileMessage/FileMessage"
import InputMessage from "../InputMessage/InputMessage"

interface props {
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
}




const Message = ({sender, type, body}: props) => {


    return (
        <div className={classes.message}>
            {sender === 'user' ?
                <div className={classes.userMessageContainer}>
                    {type === 'string' && <div className={classes.userMessage}>{body.value}</div>}
                </div>
                :
                <div className={classes.systemMessageContainer}>
                    {type === 'string' && <div className={classes.systemMessage}>{body.value}</div>}
                    {type === 'file'   && <div className={classes.systemMessage}><FileMessage size={body.size} name={body.name} type={body.type}/> </div>}
                    {type === 'input'  && <div className={classes.systemMessage}><InputMessage params={body.params} reqType={body.reqType}/></div>}
                </div>
            }
        </div>
    )
}

export default Message