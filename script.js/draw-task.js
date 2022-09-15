
import { sortOut, delData } from './functions.js'
import { items, btnDelTaskComplete } from './variables.js'

//TODO/*-----------------функция для отрисовки задач---------*/
export function showTask(idTask, nameTask, isDoneTask) {
   //блок для checkbox'ов
   const checkBoxContent = document.createElement('div')
   checkBoxContent.classList = 'check__box-content'

   const textP = document.createElement('label') //label для содержимого

   textP.setAttribute('for', "check__choice_" + idTask)//добавление ID к задаче
   textP.classList = "check__choice"
   items.append(textP) //добавлен в блок 'main__item-del'

   const checkbox = document.createElement('input') // checkbox для выбора задач
   checkbox.setAttribute('type', 'checkbox')
   checkbox.id = `check__choice_${idTask}`
   checkbox.classList = "check__input"
   textP.append(checkbox) //добавлен в label

   textP.innerText = nameTask
   checkBoxContent.append(checkbox)

   const div = document.createElement('div') //блок для картинки 'X'
   div.classList = 'main__item-del'
   div.dataset.id = idTask // создали аттрибут(понимать, какую запись мы удаляем)
   div.textContent = '❌'
   items.append(checkBoxContent) //добавлен в блок 'main__item-del'
   checkBoxContent.append(textP)
   checkBoxContent.append(div)
   checkbox.checked = isDoneTask === 1;
   //TODO/*------- удалениe завершенных задач---------*/
   btnDelTaskComplete.addEventListener('click', sortOut)

   //----------добавление----------
   div.addEventListener('click', (event) => delData(event.target))

   //TODO ----зачеркивание задач----------------------
   checkbox.addEventListener('click', () => textP.classList.toggle('active'))
   return checkBoxContent
}