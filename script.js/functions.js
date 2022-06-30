import { postDelId } from './fetch-files.js'

//TODO/*--------------функция для удаления task'ов-------------------------------*/
export function delData(targets) {
   let id = targets.attributes[1].nodeValue //получили ID-шник, который хранится в записи.
   fetch('http://24api.ru/rest-todo/' + id, {
      method: 'DELETE',
   }).then(() => {
      targets.parentElement.remove() // удаляем div 
   })
}

//TODO/*------------функция для обращения к ID элементам---------------------*/
export function sortOut() {
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

//TODO----------функция для отправки формы регистрации--------------------------

