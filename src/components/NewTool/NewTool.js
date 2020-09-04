import React, {useState} from 'react';

import './NewTool.css';
import close from '../../assets/close.svg'

const NewTool = ({handleAddTool, props, onClose = () => {}}) => {

  return (
    <div  className="modal-wrapper">
        <div onClick={onClose} className="modal-backdrop"/>
        <div className="modal-box">
        <div className="header-modal">
            <h3>Add new tool</h3>
            <button className="buttonDel" onClick={onClose}>
            <img src={close} />
            </button>
        </div>
        

        <form className="Form-box">
            <label>
                Tool Name:
                <input 
                type="text"
                placeholder="Tool name..."
                onChange={ e => props.setNameTool(e.target.value)}
                />
            </label>
            
            <label>
                Tool Link:
                <input 
                type="text"
                placeholder="Tool link..."
                onChange={ e => props.setLinkTool(e.target.value)}
                />
            </label>
            <label>
                Tool Description:
                <textarea 
                type="textArea"
                placeholder="Write something about tool.."
                rows="5" 
                onChange={ e => props.setDescriptionTool(e.target.value)}
                />
            </label>
            <label>
                Tool Tags:
                <input 
                type="text"
                placeholder="Something tool tags..."
                onChange={ e => props.setTagsTool(e.target.value)}
                />
            </label>

            <button className="btnAdd" onClick={handleAddTool}>
                <p>Add tool</p>
            </button>

        </form>
        
        </div>
    </div>
  );
}

export default NewTool;