import React from 'react'

export const DashboardPage = () => {
  return (
    <div>
  <div>
    <h1 className='titulo'>Listado Tareas</h1>
    <form id="taskForm" className='container'>
      <label htmlFor="taskName">Nombre:</label>
      <input type="text" id="taskName" required />
      <label htmlFor="taskDescription">Descripción:</label>
      <textarea id="taskDescription" required defaultValue={""} />
      <label htmlFor="taskDueDate">Finalización:</label>
      <input type="date" id="taskDueDate" required />
      <button type="button" onclick="addTask()" className='button'>Agregar</button>
    </form>
    <ul id="taskList" />
  </div>
</div>

  )
}
