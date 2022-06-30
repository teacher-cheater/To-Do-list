//импорт переменных const
import { buttonAddTask, btnDeleteAllTask, input } from './variables.js';
import { delData } from './functions.js'
import { showTask } from './draw-task.js'
import { getData } from './fetch-files.js'
/*-------------------------------------*/

/*---------------------------------------------------------------------------------------------*/
//showTask()
getData().then(() => {//вызвали функцию.перебрали все элементы и удаляем через функцию(сервер)
   document.querySelectorAll('.main__item-del').forEach(element => {
      element.addEventListener('click', (event) => delData(event.target))
   });
})



//buttonAddTask.onclick = () => 
//обращение через DOM
//document.querySelector('.main__item-del').addEventListener('click', (event) => delData(event.target)) //передали целый элемент (Х)
//document.querySelectorAll('.main__item-del').forEach(element => {
//   console.log(element)
//   element.addEventListener('click', (event) => delData(event.target))
//});

//TODO/*---------окно регистрации--------*/
//section registration
document.querySelector('.header__rigistr').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))
//отправка формы с данными
document.querySelector('.registration__sent').addEventListener('click', () => { console.log('sent') })
//btn to back
document.querySelector('.registration__back').addEventListener('click', () => document.querySelector('.registration').classList.toggle('reg-on-off'))


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





