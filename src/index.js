import './style.scss';
import {buttons} from './data'
const container = document.querySelector('#root')
const btn = document.querySelector('#btn')
const text = document.querySelector('#text');
btn.addEventListener('click', ()=> {
  console.log('ds');
  change ()
})
class KeyBoard {
  constructor() {

  }
  changeLang () {

  }
}

document.addEventListener('click', (e) =>{
  if(e.target.closest('.btn-body')){
    console.log(e.target.innerHTML);
  }
})
class Key {
  constructor(data_code,data_ru,data_en,data_ru_shift,data_en_shift,data_no_type = false) {
    this.data_code = data_code,
    this.data_ru = data_ru,
    this.data_en = data_en,
    this.data_ru_shift = data_ru_shift,
    this.data_en_shift = data_en_shift,
    this.data_no_type = data_no_type
  }
  create () {
    const el = document.createElement('div');
    const enLang = document.createElement('div')
    el.setAttribute("data-code",this.data_code);
    el.innerHTML = this.data_ru;
    el.classList.add('btn-body')
    return el
  }
}

document.addEventListener('keydown', (e) => {
  console.log(e);

  if(document.querySelector(`[data-code=${e.code}]`)){
    const el = document.querySelector(`[data-code=${e.code}]`)
    el.style.backgroundColor = 'red'
    text.innerHTML += el.innerText
  }
  // при клике на стереть получаем в арею undefined
})
document.addEventListener('keyup', (e) => {
  console.log(e);
  if(document.querySelector(`[data-code=${e.code}]`)) {
    document.querySelector(`[data-code=${e.code}]`).style.backgroundColor = 'white'
  }
})
function createButtons () {
  buttons.forEach(item => {
    const node = new Key(item.data_code,item.data_ru,item.data_en,item.data_ru_shift,item.data_en_shift,item.data_no_type);
    container.append(node.create())
  })
}
createButtons ()