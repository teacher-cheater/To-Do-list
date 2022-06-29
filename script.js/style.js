
//адрес для получения задач
const creatingATask = 'http://24api.ru/rest-todo'

// кнопка для добавления задач
const buttonAddTask = document.querySelector('.header-block__btn')

//переменная для введенных значений в input
const input = document.querySelector('input');

//переменная для добавления задач в div
const addCheckbox = document.querySelector('main__content-main')

//div с checkbox для добавления
const items = document.querySelector('.main__items')

//переменная для обращения к "удаление завершенных"
const btnDelTaskComplete = document.querySelector('.footer-block__delete-complete')

//переменная для обращения к "удалить всё"
const btnDeleteAllTask = document.querySelector('.footer-block__delete-all')

//получение с сервера task'ов
const getTask = 'http://24api.ru/rest-todo/items-by-id?id=132'
//const getTask = 'http://24api.ru/rest-todo'


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
            showTask(out.id, out.name, out.isDone)
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
      .then((data) => {
         showTask(data.id, data.name, data.isDone)
      })
}
buttonAddTask.addEventListener('click', addTask)//нужна функция, которая будет добавлять событие из функции)

//функция для отрисовки задач
function showTask(idTask, nameTask, isDoneTask) {
   //блок для checkbox'ов
   let checkBoxContent = document.createElement('div')
   checkBoxContent.classList = 'check__box-content'

   /*----------label--------*/
   let textP = document.createElement('label') //paragraph для содержимого

   textP.setAttribute('for', "check__choice_" + idTask)
   textP.classList = "check__choice"
   items.append(textP) //добавлен в блок 'main__item-del'

   let checkbox = document.createElement('input') // checkbox для выбора задач
   checkbox.setAttribute('type', 'checkbox')
   checkbox.id = "check__choice_" + idTask
   checkbox.classList = "check__input"
   textP.append(checkbox) //добавлен в label

   textP.innerText = nameTask
   checkBoxContent.append(checkbox)

   let div = document.createElement('div') //блок для картинки 'X'
   div.classList = 'main__item-del'
   div.dataset.id = idTask // создали аттрибут(понимать, какую запись мы удаляем)
   div.textContent = '❌'
   items.append(checkBoxContent) //добавлен в блок 'main__item-del'
   checkBoxContent.append(textP)
   checkBoxContent.append(div)
   if (isDoneTask === 1) {
      checkbox.checked = true
   }
   else {
      checkbox.checked = false
   }
   div.addEventListener('click', (event) => delData(event.target)) //передали целый элемент (Х)

   ///*------функция для добавления класса active в checkbox----------*/
   const checkAddDel = () => textP.classList.toggle('active')
   checkbox.addEventListener('click', (event) => checkAddDel(event))

   ///*------- удалениe завершенных задач---------*/
   btnDelTaskComplete.addEventListener('click', sortOut)
}

///*------------функция для обращения к ID элементам--------------*/
function sortOut() {
   let elements = document.querySelectorAll('.check__box-content')
   let array = []
   for (let k of elements) {
      if (k.childNodes[0].checked == true) {
         let sort = k.childNodes[2]
         let sortSplit = sort.dataset.id
         array.push(sortSplit)
      }
   }
   postDelId(array).then(() => { //вставленный .then, т.к функция postDelId волзвращает promise
      for (let k of elements) { //на сервере они уже удалились, а здесь мы их скрываем
         if (k.childNodes[0].checked == true) {
            k.remove()
         }
      }
   })
}

///*-------функция для отправки запроса на сервер. Удаление по ID--------*/
function postDelId(arr) {
   return fetch('http://24api.ru/rest-todo/delete-items', {
      method: 'POST',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "items": arr })//сформировали объект с массивом как в документации
   }) //перенесли .then в фукнцию 

}
///*------------- функция для перебора и фильтрации input----------------*/
function delAllTasks() {
   let tasksDiv = document.querySelectorAll('.main__item-del')
   for (let k of tasksDiv) {
      fetch(deleteAll + [k][0].attributes[1].nodeValue, {
         method: 'DELETE',
      }).then(() => {
         k.parentElement.remove()
      })
   }
}

///*------функция для удаления task'ов-----*/
function delData(targets) {
   id = targets.attributes[1].nodeValue //получили ID-шник, который хранится в записи.
   fetch('http://24api.ru/rest-todo/' + id, {
      method: 'DELETE',
   }).then(() => {
      targets.parentElement.remove() // удаляем div 
   })
}//вынести в отдельный файл


///*----------функция "удалить всё"-------*/
function delAllTasks() {
   let tasksDiv = document.querySelectorAll('.main__item-del')
   for (let k of tasksDiv) {
      fetch('http://24api.ru/rest-todo/' + [k][0].attributes[1].nodeValue, {
         method: 'DELETE',
      }).then(() => {
         k.parentElement.remove()
      })
   }
}
btnDeleteAllTask.addEventListener('click', delAllTasks)




