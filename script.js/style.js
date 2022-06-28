
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

//получить все параграфы (p)
const allParag = document.querySelectorAll('p');

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

   //let textP = document.createElement('p') //paragraph для содержимого
   /*----------label--------*/
   let textP = document.createElement('label') //paragraph для содержимого

   textP.setAttribute('for', "check__choice_" + idTask)
   textP.classList = "check__choice"
   items.append(textP) //добавлен в блок 'main__item-del'

   let checkbox = document.createElement('input') // checkbox для выбора задач
   checkbox.setAttribute('type', 'checkbox')
   checkbox.id = "check__choice_" + idTask;
   checkbox.classList = "check__input"
   textP.append(checkbox) //добавлен в label

   textP.innerText = nameTask;
   checkBoxContent.append(checkbox);

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

   /*----*/
   //checkbox.addEventListener('click', (event) => addDel(event))//событие для checkbox (checked)

   /*------функция для добавления класса active в checkbox----------*/
   //const addDel = () => checkbox.click ? textP.classList.toggle('active') : '.check__choice'

   //нужно кликать по параграфу (р), чтобы отмечать checkbox(checked)
   //textP.addEventListener('click', (event) => { console.log('hi') })
   //textP.addEventListener('click', (event) => checkOrNot(event))
   //const checkOrNot = () => textP.click ? (textP.classList.toggle('active') + checkbox.checked) : '.check__choice'
   function checkAddDel() {

      textP.classList.toggle('active')
      console.log(checkbox.checked);
      //if (checkbox.checked === true) {
      //   console.log(123);
      //   checkbox.checked = false
      //} else {
      //   checkbox.checked = true
      //   console.log(1232);
      //}
      //checkbox.checked !== checkbox.checked
   }
   //textP.addEventListener('click', (event) => checkAddDel(event))
   checkbox.addEventListener('click', (event) => checkAddDel(event))
}

//переменная для удаления
const delTask = 'http://24api.ru/rest-todo/';
//функция для удаления task'ов
function delData(targets) {
   //console.log(targets)
   id = targets.attributes[1].nodeValue //получили ID-шник, который хранится в записи.
   fetch(delTask + id, {
      method: 'DELETE',
   }).then(() => {
      targets.parentElement.remove() // удаляем div 
   })
   //console.log(id)
}

//
const deleteAll = 'http://24api.ru/rest-todo/'
//функция "удалить всё"
function delAllTasks(elem) {
   let tasksDiv = document.querySelectorAll('.main__item-del')
   for (let k of tasksDiv) {
      //console.log([k][0].attributes[1].nodeValue)
      fetch(deleteAll + [k][0].attributes[1].nodeValue, {
         method: 'DELETE',
      }).then(() => {
         k.parentElement.remove()
      })
   }
}
btnDeleteAllTask.addEventListener('click', delAllTasks)

//при нажатии на р нужно отметить checkbox
//allParag.classList.toggle('.active')
//allParag.style.textDecoration = "line-through"

//allParag.addEventListener('click', 



