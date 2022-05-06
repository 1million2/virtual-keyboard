import './style.scss';
import {buttons} from './data'
const container = document.querySelector('#root')

const text = document.querySelector('#text');


class KeyBoard {
  constructor() {

  }
  changeLang () {

  }
}


class Key {
  constructor(data_code,data_ru,data_en,data_ru_shift,data_en_shift,data_no_type = false,data_content) {
    this.data_code = data_code,
    this.data_ru = data_ru,
    this.data_en = data_en,
    this.data_ru_shift = data_ru_shift,
    this.data_en_shift = data_en_shift,
    this.data_no_type = data_no_type
    this.data_content = data_content
  }
  create () {
    const el = document.createElement('div');
    const enLang = document.createElement('div')
    el.setAttribute("data-code",this.data_code);
    el.setAttribute("data-no-type",this.data_no_type);
    el.innerHTML = this.data_content ? this.data_content: this.data_ru;
    el.classList.add('btn-body')
    if(this.data_content) {
      el.classList.add('dark')
    }
    if(this.data_code === 'CapsLock' || this.data_code === 'Backspace' || this.data_code === 'Enter' || this.data_code === 'ShiftRight') {
      el.classList.add('large')
    }
    if(this.data_code === 'Tab') {
      el.classList.add('medium')
    }
    if(this.data_code === 'Space') {
      el.classList.add('xl')
    }
    if (this.data_code === 'ShiftLeft') {
      el.classList.add('left-shift')
    }
    return el
  }
}

function createButtons () {
  buttons.forEach(item => {
    const node = new Key(item.data_code,item.data_ru,item.data_en,item.data_ru_shift,item.data_en_shift,item.data_no_type,item.data_content);
    container.append(node.create())
  })
}


document.addEventListener('keydown', (e) => {
  
    console.log(e.code);
    

})



document.addEventListener('keydown', (e) => {
  e.preventDefault()
  if(document.querySelector(`[data-code=${e.code}]`)){
    const el = document.querySelector(`[data-code=${e.code}]`)
    el.classList.add('click')
    text.innerHTML += el.innerText
  }
  if (e.code === 'ShiftLeft') {
    container.innerHTML = ''
    
  }
})

document.addEventListener('keyup', (e) => {
  if(document.querySelector(`[data-code=${e.code}]`)) {
    const el = document.querySelector(`[data-code=${e.code}]`)
    el.classList.remove('click')
  }
})

document.addEventListener('mousedown', (e) => {

  if(e.target.classList.contains('btn-body')){
    e.target.classList.add('active')
    text.innerHTML += e.target.innerText
  }
})
document.addEventListener('mouseup', (e) => {
  if(e.target.classList.contains('btn-body')){
    e.target.classList.remove('active')
  }
})
createButtons ()