import { useState } from 'react'
import './style/homepage.css' 

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy fresh spinach', completed: false, tag: 'healthy' },
    { id: 2, text: 'Pay internet bill', completed: false, tag: 'time_sensitive' },
    { id: 3, text: 'Prepare presentation', completed: true, tag: 'important' }
  ])

  const [newTaskText, setNewTaskText] = useState('')
  const [listName, setListName] = useState('Groceries')
  const [isEditingListName, setIsEditingListName] = useState(false)

  const total = tasks.length
  const pending = tasks.filter(t => !t.completed).length
  const completed = tasks.filter(t => t.completed).length
  const important = tasks.filter(t => t.tag === 'important').length
  const healthy = tasks.filter(t => t.tag === 'healthy').length
  const timeSensitive = tasks.filter(t => t.tag === 'time_sensitive').length

  const handleAddTask = (e) => {
    e.preventDefault()
    if (!newTaskText.trim()) return
    
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
      tag: '' 
    }
    setTasks([...tasks, newTask])
    setNewTaskText('')
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleTagChange = (id, newTag) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, tag: newTag } : task
    ))
  }

  return (
    <div className="app-container">
      <aside id="left">
        <div className="user-profile">
          <h2>👤 Current User</h2>
        </div>

        <div className="task-lists-nav">
          <h3>My Lists</h3>
          <ul>
            <li className="active-list">🛒 {listName}</li>
          </ul>
          <button type="button" className="add-list-btn">➕ New List</button>
        </div>

        <div className="hero1">
          <h1>LIST STATISTICS</h1>
          <div className="stat-box">Total: <span>{total}</span></div>
          <div className="stat-box">Pending: <span>{pending}</span></div>
          <div className="stat-box">Completed: <span>{completed}</span></div>
          <div className="stat-box">🔥 Important: <span>{important}</span></div>
          <div className="stat-box">🥗 Healthy: <span>{healthy}</span></div>
          <div className="stat-box">⏰ Time-Sensitive: <span>{timeSensitive}</span></div>
        </div>
      </aside>

      <main id="center">
        <div className="hero">
          <div className="title-area">
            {isEditingListName ? (
              <input 
                type="text" 
                value={listName} 
                onChange={(e) => setListName(e.target.value)}
                onBlur={() => setIsEditingListName(false)}
                onKeyDown={(e) => e.key === 'Enter' && setIsEditingListName(false)}
                autoFocus
              />
            ) : (
              <h1>{listName}</h1>
            )}
            <button 
              type="button" 
              className="icon-btn" 
              onClick={() => setIsEditingListName(!isEditingListName)}
              title="Edit list name"
            >
              ✏️
            </button>
          </div>

          <form onSubmit={handleAddTask} className="new-task-input">
            <input 
              type="text" 
              placeholder="Add a new task..." 
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button type="submit" className="add-task-btn" title="Add task">➕</button>
          </form>

          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'is-completed' : ''}`}>
                <input 
                  type="checkbox" 
                  id={`task-${task.id}`} 
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <label htmlFor={`task-${task.id}`}>{task.text}</label>
                
                <div className="tag-selectors">
                  <select 
                    value={task.tag} 
                    onChange={(e) => handleTagChange(task.id, e.target.value)}
                  >
                    <option value="">No Tag</option>
                    <option value="important">🔥 Important</option>
                    <option value="healthy">🥗 Healthy</option>
                    <option value="time_sensitive">⏰ Time Sensitive</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>


      </main>
    </div>
  )
}

export default App
