
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
   return fetch('http://24api.ru/rest-todo/delete-items', { // return для использования функции в другом файле
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
//export function createUser() {
//   let oldForm = document.forms.dataUser;
//   let formData = new FormData(oldForm);
//   fetch('http://24api.ru/rest-user', {
//      method: 'POST',
//      mode: 'cors',
//      body: formData
//   })
//      .then((answerTask) => answerTask.json())
//      .then((data) => {
//         localStorage.setItem('dataUser', data.id);
//         console.log(
//            formData.get("username")//вывод данных о пользователе
//         );
//         document.getElementById('log').textContent = formData.get("username")
//      })
//      .then(() => document.querySelector('.authorization').style = "display: none")//скрытие pop-up авторизации
//      .then(() => document.querySelector('.registration').style = "display: none")//скрытие pop-up регистрации
//}

//TODO----------функция для проверки пользователя и регистрации ---------------------
export function enterAk() {
   let oldForm = document.forms.dataUser;
   let formData = new FormData(oldForm);
   if (!localStorage.getItem('dataUser')) {
      console.log('Error')
   }
   fetch('http://24api.ru/rest-user', {
      method: 'POST',
      mode: 'cors',
      body: formData
   })
      .then((answerTask) => {
         if (answerTask.status === 500) {
            alert('Пользователь с таким именем существует!')
         }
         return answerTask.json()
      })
      .then((data) => {
         localStorage.setItem('dataUser', data.id);
         console.log(
            formData.get("username")//вывод данных о пользователе
         );
         document.getElementById('log').textContent = formData.get("username")
      })
      .then(() => document.querySelector('.authorization').style = "display: none")//скрытие pop-up авторизации
      .then(() => document.querySelector('.registration').style = "display: none")//скрытие pop-up регистрации
   //.then(() => document.querySelector('.sign-it').style = "display: none")//скрытие pop-up окна входа
}
