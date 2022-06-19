import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/header'
import NavBar from '../../components/NavBar/navBar'
import "./style.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2"



function Metas() {
  const [tasks, setTasks] = useState([])
  const [metas, setMetas] = useState("")
  useEffect(() => {
    let loadedMetas = JSON.parse(localStorage.getItem('metas'))
    if (loadedMetas.length > 0) {
      setTasks(loadedMetas) 
    }
  }, [])

  useEffect(() => {
    let json = JSON.stringify(tasks)
    localStorage.setItem("metas", json)
  }, [tasks])


  function handleSubmit(e) {
    e.preventDefault()

    if(metas === "" || metas === null){
      Swal.fire({
        text: 'É necessario informar uma meta',
        timer: 2000,
        timerProgressBar: true,
        icon: 'warning',
        target: '#custom-target',
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
      })
    } else {
      Swal.fire({
        text: 'Meta adicionada',
        timer: 2000,
        timerProgressBar: true,
        icon: 'success',
        target: '#custom-target',
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
      })
      let newMetas = {
        id: new Date().getTime(),
        meta: metas
      }
      setTasks([...tasks].concat(newMetas))
      setMetas('')
    }
   
  }
  function apagarTasks(taskId) {
    Swal.fire({
      title: 'Deseja deleta essa meta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
      denyButtonText: 'Cancelar',
      confirmButtonColor: '#24506e'
    }).then((result) => {
      if (result.isConfirmed) {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks)
      }
    })
  }
  
  return (
    <div>
      <Header />
      <NavBar />
      <div className='geral'>
          <div className="container">
            <div>
            <h5>Metas:</h5>
            </div>
            <div className="buttons">
              <input type="text" value={metas} onChange={(e) => setMetas(e.target.value)} />
              <IoIosAddCircleOutline color='#24506e' size={25} onClick={handleSubmit}></IoIosAddCircleOutline>
            </div>
            <div className="table">
              <table>
                <tbody>
                {tasks.map(e => (
                  <tr key={e.id}>
                  <td>{e.meta}</td>
                  <td>
                    <BsFillTrashFill size={18} onClick={() => apagarTasks(e.id)} />
                  </td>
                </tr>
                 ))}
                </tbody>
              </table>
           
          </div>
        </div>
      </div>


    </div>
  );
}

export default Metas;