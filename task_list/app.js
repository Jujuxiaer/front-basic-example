const form = document.querySelector('#task-form')
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')

// 加载所有事件监听
loadEventListeners()

// 加载所有事件监听函数
function loadEventListeners() {
  // DOM内容加载关闭，执行
  document.addEventListener('DOMContentLoaded', getTasks)
  // 添加任务事件
  form.addEventListener('submit', addTask)
  // 清除任务事件（单个）
  taskList.addEventListener('click', removeTask)
  // 清除任务事件（所有）
  clearBtn.addEventListener('click', clearTasks)
  // 过滤任务
  filter.addEventListener('keyup', filterTasks)
}

//addTask
function addTask(e) {
  if (taskInput.value == '') {
    alert('Add a task')
  } else {
    // 创建li
    const li = document.createElement('li')
    // 添加 li 类名
    li.className = "collection-item"
    // 创建文本节点 将taskInput的值插入 li 中
    li.appendChild(document.createTextNode(taskInput.value))

    // 创建 a 标签
    const link = document.createElement('a')
    // 添加 a 标签的类名
    link.className = "delete-item secondary-content"
    // a标签中添加 字体图标
    link.innerHTML = '<i class="fa fa-times"></i>'

    // 将 a标签 插入到 li 中
    li.appendChild(link)

    // 将li 插入到 ul中
    taskList.appendChild(li)

    //  将添加任务 进行本地存储
    storeTaskInLocalStorage(taskInput.value)
    // 清除input
    taskInput.value = ''
  }
  e.preventDefault();
}

// 清除任务事件（单个）
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove()
      // 删除本地存储
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

// 删除本地存储
function removeTaskFromLocalStorage(taskItem) {
  let tasks
  if (localStorage.getItem('tasks') == null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach((task, index)=>{
    if (task === taskItem.textContent) {
      tasks.splice(index, 1)
      console.log('tasks', tasks);
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// 清除任务事件（所有）
function clearTasks(e) {
  // 方法1
  // taskList.innerHTML = ""

  // 方法2
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  // 清除所有 本地存储的tasks
  clearTasksFromLocalStorage()
}

// 清除所有 本地存储的tasks
function clearTasksFromLocalStorage() {
  localStorage.clear()
}

// 过滤任务
function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent
    console.log('item', item);
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}

// storeTaskInLocalStorage
function storeTaskInLocalStorage(task) {
  let tasks
  if (localStorage.getItem('tasks') == null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// getTasks 过去本地存储 数据
function getTasks() {
  let tasks
  if (localStorage.getItem('tasks') == null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach((task) => {
    // 创建li
    const li = document.createElement('li')
    // 添加 li 类名
    li.className = "collection-item"
    // 创建文本节点 将taskInput的值插入 li 中
    li.appendChild(document.createTextNode(task))

    // 创建 a 标签
    const link = document.createElement('a')
    // 添加 a 标签的类名
    link.className = "delete-item secondary-content"
    // a标签中添加 字体图标
    link.innerHTML = '<i class="fa fa-times"></i>'

    // 将 a标签 插入到 li 中
    li.appendChild(link)

    // 将li 插入到 ul中
    taskList.appendChild(li)
  })
}