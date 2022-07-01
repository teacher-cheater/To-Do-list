
import { showTask } from './draw-task.js'

//TODO/*-----------функция для получения пользователя-----------------------------*/

export function getData() {
   return fetch('http://24api.ru/rest-todo/items-by-id?id=' + localStorage.getItem('dataUser'), {
      method: 'GET',
   })
      .then((resp) => {
         return resp.json()
      })
      .then((data) => {
         let out = ''
         for (let k in data) {
            out = data[k]
            showTask(out.id, out.name, out.isDone) //вывод задачи на экран(func)
         }
      })
}

//TODO/*---------------функция для добавления задач---------------------------*/
export function addTask() {
   let val = document.getElementById('inpt-main').value// получили input ввода задач 
   const dataTask = {
      "name": val,
      "isDone": 0,
      "user_id": localStorage.getItem('dataUser'),
   }
   fetch('http://24api.ru/rest-todo', {
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

//TODO/*-------------функция для отправки запроса на сервер. Удаление по ID------------------*/
export function postDelId(arr) {
   return fetch('http://24api.ru/rest-todo/delete-items', {
      method: 'POST',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "items": arr })//сформировали объект с массивом как в документации
   }) //перенесли .then в фукнцию 
}

//TODO/*----------------функция "удалить всё"----------------------------*/
export function delAllTasks() {
   let tasksDiv = document.querySelectorAll('.main__item-del')
   for (let k of tasksDiv) {
      fetch('http://24api.ru/rest-todo/' + [k][0].attributes[1].nodeValue, {
         method: 'DELETE',
      }).then(() => {
         k.parentElement.remove()
      })
   }
}

//TODO----------функция для отправки формы регистрации--------------------------
export function createUser() {
   let oldForm = document.forms.dataUser;
   let formData = new FormData(oldForm);
   fetch('http://24api.ru/rest-user', {
      method: 'POST',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
   })
      .then((answerTask) => answerTask.json())
      .then((data) => {
         localStorage.setItem('dataUser', data.id);
         console.log(
            formData.get("username")//вывод данных о пользователе
         );
      })
}
