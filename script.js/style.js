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
document.querySelector('.authorization__enter').addEventListener('click', () => { console.log('enter') })//вход
document.querySelector('.authorization__reg').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))//регистрация
//TODO---------окно регистрации---------------------
//section registration
//document.querySelector('.header__rigistr').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))
//!!----------------------------------------------
//document.querySelector('body').classList.toggle('lock')
//   ('click', () => document.querySelector('.main__content-main').classList.toggle('lock'))

//-------------------------------------------------


//TODO ------ local storage. получение данных. запись ----------
//for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(`${key}: ${localStorage.getItem(key)}`);
//}
//console.log(localStorage.getItem(data.id));

//console.log(localStorage.getItem('dataUser'))



//btn to back
document.querySelector('.registration__back').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))

//TODO----------регистрация--------------------------
//отправка формы с данными
document.querySelector('.registration__sent').addEventListener('click', () => createUser())



/*------функция для добавления класса active в checkbox----------*/
//console.log(document.querySelector('.check__input'))
//document.querySelector('.check__input').addEventListener('click', (event) => document.querySelector('.check__choice').classList.toggle('active')(event)) //обращение через DOM

/*-----------------функция для отрисовки задач---------*/
//export function showTask(idTask, nameTask, isDoneTask) {
//   //блок для checkbox'ов
//   let checkBoxContent = document.createElement('div')
//   checkBoxContent.classList = 'check__box-content'

//   let textP = document.createElement('label') //label для содержимого

//   textP.setAttribute('for', "check__choice_" + idTask)//добавление ID к задаче
//   textP.classList = "check__choice"
//   items.append(textP) //добавлен в блок 'main__item-del'

//   let checkbox = document.createElement('input') // checkbox для выбора задач
//   checkbox.setAttribute('type', 'checkbox')
//   checkbox.id = "check__choice_" + idTask
//   checkbox.classList = "check__input"
//   textP.append(checkbox) //добавлен в label

//   textP.innerText = nameTask
//   checkBoxContent.append(checkbox)

//   let div = document.createElement('div') //блок для картинки 'X'
//   div.classList = 'main__item-del'
//   div.dataset.id = idTask // создали аттрибут(понимать, какую запись мы удаляем)
//   div.textContent = '❌'
//   items.append(checkBoxContent) //добавлен в блок 'main__item-del'
//   checkBoxContent.append(textP)
//   checkBoxContent.append(div)
//   if (isDoneTask === 1) {//проверка на checked
//      checkbox.checked = true
//   }
//   else {
//      checkbox.checked = false
//   }
////оставить прослушки и вынести их чере документ.querySelector
//div.addEventListener('click', (event) => delData(event.target)) //передали целый элемент (Х)

///*------функция для добавления класса active в checkbox----------*/
//const checkAddDel = () => textP.classList.toggle('active')
//checkbox.addEventListener('click', (event) => checkAddDel(event))


///*------функция для добавления класса active в checkbox----------*/
//checkbox.addEventListener('click', (event) => textP.classList.toggle('active')(event))

//   ///*------- удалениe завершенных задач---------*/
//   btnDelTaskComplete.addEventListener('click', sortOut)
//}





