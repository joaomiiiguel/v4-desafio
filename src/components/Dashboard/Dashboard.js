import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Dashboard.css';
import Header from '../Header/header'

import plus from '../../assets/plus.svg'
import del from '../../assets/del.svg'
import close from '../../assets/close.svg'

function Dashboard() {
  const [tool, setTool] = useState([]); //Dados da API
  const [search, setSearch] = useState(''); //Variavel da busca
  const [visibleModal, setVisibleModal] = useState(false); //Estado do Modal - btn Add Tool

  //Variáveis para Add Tool
  const [nameTool, setNameTool] = useState()
  const [linkTool, setLinkTool] = useState()
  const [descriptionTool, setDescriptionTool] = useState()
  const [tagsTool, setTagsTool] = useState([])
  
  useEffect(() => {
    //Buscar os dados da API
    async function loadRepositories() {
      const response = await axios.get('http://localhost:3000/tools');//Diretório da API
      setTool(response.data);
    }
    loadRepositories();
  }, []);

  //Sistema de filtragem na busca 
  const filteredTools = tool.filter( tools =>{
    return tools.title.includes(search) //Busca realizada pelo título do card
  })


  //Cadastrar os nova Tool ao clicar no btn
  function handleAddTool(){
      return setTool([
        ... tool,
        { 
          id: Math.random(), //Gerar um ID para o novo card
          title:nameTool,
          link: linkTool,
          description:descriptionTool,
          tags:tagsTool
        }
      ]);
      setVisibleModal(false);

  }

  //Função para deletar Tools
  function handleDelTool(id){
    const newList = tool.filter((item) => item.id !== id);
    setTool(newList);
  }

  function handleBtnAdd(){
    handleAddTool();
    setVisibleModal(false);
  }
  
  
  return (
    
    <div className="container">
      <Header /> 
      <div className="content-Dash">
        <div className="content-navbar">
          <div className="content-searchBar">
            <div className="searchBar">
              <input 
              type="text"
              placeholder="Search…"
              className="search"
              onChange={ e => setSearch(e.target.value)}
              />
            </div>
            <div className="checkbox">
              <input
                name="buscartag"
                type="checkbox"/>
                <p>Search in tag only</p>
            </div>
          </div>
          <button className="buttonAdd" onClick={() => setVisibleModal(true)}>
            <img src={plus} className="iconPlus" />
            <p className="textAdd">Add</p>
          </button>
            
        </div>

        

        <div className="content-cards">
        {visibleModal ?
        <div className="modal-wrapper">
          <div className="modal-backdrop" onClick={() => setVisibleModal(false)}/>
          <div className="modal-box">
            <div className="header-modal">
                <h3>Add new tool</h3>
                <button className="buttonDel" onClick={() => setVisibleModal(false)}>
                  <img src={close} />
                </button>
            </div>
            <div className="Form-box">
              <div>
                  <p>Tool Name:</p>
                  <input 
                  type="text"
                  placeholder="Tool name..."
                  onChange={ e => setNameTool(e.target.value)}
                  />    
              </div>
              <div>
                  <p>Tool Link:</p>
                  <input 
                  type="text"
                  placeholder="Tool link..."
                  onChange={ e => setLinkTool(e.target.value)}
                  />
              </div>
              <div>
                  <p>Tool Description:</p>
                  <textarea 
                  type="textArea"
                  placeholder="Write something about tool.."
                  rows="5" 
                  onChange={ e => setDescriptionTool(e.target.value)}
                  />
              </div>
              <div>
                  <p>Tool Tags:</p>
                  <input 
                  type="text"
                  placeholder="Something tool tags..."
                  onChange={ e => setTagsTool(e.target.value)}
                  />
              </div>
              <button type="submit" className="btnAdd" onClick={handleBtnAdd}>
                <p>Add tool</p>
              </button>
              </div>
            </div>
          </div>
          : null
        }


            {filteredTools.reverse().map(item => (
              <div className="cards" key={item.id}>
                <div className="header-card">
                  <a href={item.link} target="_blank"><h3>{item.title}</h3></a>
                  <button className="buttonDel" onClick={() => handleDelTool(item.id)}>
                    <img src={del} className="iconDel" />
                  </button>
                </div>
                <p>{item.description}</p>
                <ul className="tags">{item.tags.toString()}</ul>
              </div>
                          
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;