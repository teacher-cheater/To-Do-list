//импорт переменных const
import { buttonAddTask, btnDeleteAllTask } from './variables.js';
import { addTask, delAllTasks, getData, createUser } from './fetch-files.js'

/*-------------------------------------*/

/*---------------------------------------------------------------------------------------------*/
getData()
//createUser()

//.then(() => {//вызвали функцию.перебрали все элементы и удаляем через функцию 
//   document.querySelectorAll('.main__item-del').forEach(element => {
//      element.addEventListener('click', (event) => delData(event.target))
//   });
//})


btnDeleteAllTask.addEventListener('click', delAllTasks)
buttonAddTask.addEventListener('click', addTask)//нужна функция, которая будет добавлять событие из функции)

//TODO---------события прослушки показать/скрыть---------------
btnDeleteAllTask.addEventListener('click', () => document.querySelector('.main__content-main').classList.toggle('main-invisible'))//скрывает блок с задачами main
btnDeleteAllTask.addEventListener('click', () => document.querySelector('.main__content-footer').classList.toggle('main-invisible'))//скрывает блок с задачами footer
buttonAddTask.addEventListener('click', () => {
   document.getElementById('inpt-main').value = "",
      document.querySelector('.main__content-footer').classList.remove('main-invisible')//показывает блок с задачами main
}) //очистить input после ввода задач

buttonAddTask.addEventListener('click', () => document.querySelector('.main__content-main').classList.remove('main-invisible'))//показывает блок с задачами footer

//TODO ------ прослушивание событий на кнопках авторизации/регистрации ----------
//document.querySelector('.authorization__enter').addEventListener('click', () => { console.log('enter') })//вход

document.querySelector('.authorization__reg').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))//регистрация

//TODO---------окно login'а с кнопкой (выход)---------------------
//document.querySelector('.header__exit').addEventListener('click', () => localStorage.removeItem('username'))
document.querySelector('.header__exit').addEventListener('click', () => {
   localStorage.clear(), //очистка localStorage
      document.getElementById('log').value = '' //очистка поля с именем
})
//!!----------------------------------------------
//document.querySelector('body').classList.toggle('lock')
//   ('click', () => document.querySelector('.main__content-main').classList.toggle('lock'))


//TODO ------ local storage. получение данных. запись ----------
//btn to back(закрыть окно авторизации)
document.querySelector('.registration__back').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))

//btn to back (закрыть окно входа в аккаунт)
document.querySelector('.sign-it__reg').addEventListener('click', () => document.querySelector('.sign-it').classList.toggle('sgn'))

//TODO----------регистрация--------------------------
//отправка формы с данными
document.querySelector('.registration__sent').addEventListener('click', () => createUser())

//TODO----------вход в аккаунт--------------------------
document.querySelector('.authorization__enter').addEventListener('click', () => document.querySelector('.sign-it').classList.toggle('sgn')) //регистрация




