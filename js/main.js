; (
  async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    // console.log(data)
    for (let td of data) {
      const newLi = document.createElement('LI')
      todosElement.appendChild(newLi)

      var completedaly = document.createElement('INPUT')
      completedaly.type = "checkbox"
      completedaly.classList.add('checkbox')
      completedaly.checked = (td.completed)
      newLi.appendChild(completedaly)

      const title = document.createElement('H4')
      title.textContent = `Work info: ${td.title}`
      newLi.appendChild(title)

      const emailElement = document.createElement('P')
      emailElement.textContent = `User ID: ${td.userId}`
      newLi.appendChild(emailElement)

      const id = document.createElement('P')
      id.textContent = `Work's ID: ${td.id}`
      newLi.appendChild(id)

      todosElement.appendChild(newLi)

    }
  }
)()