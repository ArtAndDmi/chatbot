import React from 'react'
import classes from './FileMessage.module.css'


interface props {
    size: string | undefined,
    name: string | undefined,
    type: string | undefined
}

const FileMessage = ({size, name, type}: props) => {
    return (
        <a className={classes.container} href='../../assets/test.html' download>
            <div className={classes.preview}>{type}</div>
            <div className={classes.infoContainer}>
                <p className={classes.fileName}>{name}</p>
                <p className={classes.fileSize}>{size}</p>
            </div>
        </a>
    )
}

export default FileMessage