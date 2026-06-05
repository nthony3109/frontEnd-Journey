
let tasks = []
let currentFilter = "all"

//Selectors

const taskInput = document.querySelector("#taskInput")
const prioritySelect = document.querySelector("#prioritySelect")
const addBtn = document.querySelector("#addBtn")
const taskContainer = document.querySelector("#taskContainer")
const statsEl = document.querySelector("#stats")
const filterBtns = document.querySelectorAll(".filter-btn")


// FUNCTIONS

// To Create a task object using everything from Week 1!
const createTask = (title, priority) => ({
    id: Date.now(),           // unique id using timestamp
    title,                    // shorthand property
    priority,                 // shorthand property
    completed: false,
    createdAt: new Date().toLocaleTimeString()
})

// Filter tasks based on current filter
const getFilteredTasks = () => {
    if (currentFilter === "active")    return tasks.filter(t => !t.completed)
    if (currentFilter === "completed") return tasks.filter(t => t.completed)
    return tasks  // "all"
}

// Update stats display
const updateStats = () => {
    const total = tasks.length
    const completed = tasks.filter(t => t.completed).length
    statsEl.textContent = `${total} tasks — ${completed} completed`
}

// Render all tasks to the DOM
const renderTasks = () => {
    const filtered = getFilteredTasks()
    taskContainer.innerHTML = ""  // clear first

    if (filtered.length === 0) {
        taskContainer.innerHTML = `<p style="color:#999; text-align:center">No tasks here!</p>`
        return
    }

    filtered.forEach((task) => {
        const div = document.createElement("div")
        div.classList.add("task-item", task.priority)
        if (task.completed) div.classList.add("completed")

        div.innerHTML = `
            <div>
                <span class="task-title">${task.title}</span>
                <small style="display:block; color:#999">${task.priority} priority · ${task.createdAt}</small>
            </div>
            <div class="task-actions">
                <button class="complete-btn" data-id="${task.id}">
                    ${task.completed ? "Undo" : "Done"}
                </button>
                <button class="delete-btn" data-id="${task.id}">Delete</button>
            </div>
        `
        taskContainer.appendChild(div)
    })

    updateStats()
}

// Add a new task
const addTask = () => {
    const title = taskInput.value.trim()
    if (!title) {
        alert("Please enter a task!")
        return
    }

    const task = createTask(title, prioritySelect.value)
    tasks = [task, ...tasks]  // spread — you know this!

    taskInput.value = ""
    renderTasks()
}

// Toggle complete/incomplete
const toggleComplete = (id) => {
    tasks = tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
    )
    renderTasks()
}

// Delete a task
const deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id)
    renderTasks()
}

// EVENT LISTENERs Section

// Add button click
addBtn.addEventListener("click", addTask)

// Press Enter to add
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask()
})

// Complete and Delete buttons — event delegation
taskContainer.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id)

    if (e.target.classList.contains("complete-btn")) toggleComplete(id)
    if (e.target.classList.contains("delete-btn")) deleteTask(id)
})

// Filter buttons
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")
        currentFilter = btn.dataset.filter
        renderTasks()
    })
})

renderTasks()