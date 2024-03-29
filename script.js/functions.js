import { postDelId } from './fetch-files.js';
//import { buttonAddTask, btnDeleteAllTask } from './variables.js';


//TODO/*--------------функция для удаления task'ов-------------------------------*/
export function delData(targets) {
   const id = targets.attributes[1].nodeValue //получили ID-шник, который хранится в записи.
   fetch(`http://24api.ru/rest-todo/${id}`, {
      method: 'DELETE',
   }).then(() => {
      targets.parentElement.remove() // удаляем div 
   })
}

//TODO/*------------функция для обращения к ID элементам---------------------*/
export function sortOut() {
   const elements = document.querySelectorAll('.check__box-content')
   const array = []
   for (let k of elements) {
      if (k.childNodes[0].checked == true) {
         const sort = k.childNodes[2]
         const sortSplit = sort.dataset.id
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

/*------------*/
//function addOrDel() {
//   if (document.querySelector('.main__content-footer').style = 'display: none') {
//      document.querySelector('.main__content-footer').classList.remove('main-invisible')
//   }
//   else {
//      document.querySelector('.main__content-footer').classList.add()
//   }
//   if (document.querySelector('.main__content-main').style = 'display: none') {
//      document.querySelector('.main__content-main').classList.remove('main-invisible')
//   }
//   else {
//      document.querySelector('.main__content-main').classList.add()
//   }

//}
//buttonAddTask.addEventListener('click', addOrDel(document.querySelector('.main__content-main').classList.add('main-invisible')))