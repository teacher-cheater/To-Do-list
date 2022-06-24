
//адрес для получения задач
const creatingATask = 'http://24api.ru/rest-todo'

// кнопка для добавления задач
const buttonAddTask = document.querySelector('.header-block__btn')

//переменная для введенных значений в input
const input = document.querySelector('input');

//
//'http://24api.ru/rest-todo'

//переменная для добавления задач в div
const addCheckbox = document.querySelector('main__content-main')

//div с checkbox для добавления
const items = document.querySelector('.main__items')

//переменная для обращения к "удаление Х"
const deleteTask = document.querySelector('.main__item-del')

//
const getTask = 'http://24api.ru/rest-todo/items-by-id?id=132'
function getData() {
   fetch(getTask, {
      method: 'GET',
   })
      .then((resp) => {
         return resp.json()
      })
      .then((data) => {
         let out = ''
         for (let k in data) {
            out = data[k]
            console.log(data[k].name)
            showTask(data[k].id, data[k].name, data[k].isDone)
         }
      })
}
getData()

function addTask() {
   const dataTask = {
      "name": input.value,
      "isDone": 0,
      "user_id": 132,
   }
   fetch(creatingATask, {
      method: "POST",
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataTask)
   })
      .then((answerTask) => answerTask.json())
      .then((data) => console.log(data))
}
buttonAddTask.addEventListener('click', addTask)//нужна функция, которая будет добавлять событие из функции)

function showTask(idTask, nameTask, isDoneTask) {
   let label = document.createElement('label') //label для содержимого
   label.setAttribute('for', "check__choice_" + idTask)
   label.classList = "check__choice"
   items.append(label) //добавлен в блок 'main__item-del'
   let checkbox = document.createElement('input') // checkbox для выбора задач
   checkbox.setAttribute('type', 'checkbox')
   checkbox.id = "check__choice_" + idTask;
   checkbox.classList = "check__input"
   label.append(checkbox) //добавлен в label
   let span = document.createElement('span') // span для кастомного checkbox'a
   span.className = 'check__box';
   span.setAttribute('class', 'check__box')
   label.append(span) //добавлен в label
   let spanText = document.createElement('span') //введенные задачи
   spanText.classList = "check__notes"
   spanText.innerText = nameTask //вывод из input.value
   label.append(spanText)
   let div = document.createElement('div') //блок для картинки 'X'
   div.classList = 'main__item-del'
   div.dataset.id = idTask // создали аттрибут(понимать, какую запись мы удаляем)
   items.append(div) //добавлен в блок 'main__item-del'

   if (isDoneTask === 1) {
      checkbox.checked = true
   }
   else {
      checkbox.checked = false
   }


}
showTask()


//функция для получения синхронности
//async function toDoList() {
//   let response = await fetch(creatingATask, {
//      method: '',

//   })
//нужно дождаться, чтобы задачи ждали загрузки json file
//}
