const elements = document.querySelector('.elements');
const click = document.querySelector('.click');
let str = ''
let url = `https://api.unsplash.com/search/photos?query=spring&per_page=30&client_id=1C7GqsvHpAWsETF-3K9Qo7zzYs_M52JcTaPnThwl10c`;


// функция получения значения от строки ввода
function inputor (event) {
    ((event.target.classList.contains('click') && document.getElementById('input').value!==''))? str = document.getElementById('input').value : str = 'spring';
        
      console.log(str)
}
click.addEventListener('click', inputor);



// функция изменения url после нажатия на лупу
function changeUrl (event) {
    if(event.target.classList.contains('click')) {
        url = `https://api.unsplash.com/search/photos?query=${str}&per_page=30&client_id=1C7GqsvHpAWsETF-3K9Qo7zzYs_M52JcTaPnThwl10c`;
      }
}
click.addEventListener('click', changeUrl);

console.log(url)

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data)
    // console.log(data.urls.regular)
    
  }
  getData();
  click.addEventListener('click', getData);
  


function showData(data) {
    while(elements.firstChild) {
        elements.firstChild.remove()
    }
    data.results.map( el => {
        console.log(el)
        const div = document.createElement('div');
        div.classList.add('gallery-img')
        div.style.backgroundImage = `url(${el.urls.regular})`;
        elements.append(div);
       })
     } 
     click.addEventListener('click', showData);
 
     //функция ввода значения при нажатии на Enter
function inputEnter () {
    document.querySelector('input').addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
         (document.getElementById('input').value!=='')? str = document.getElementById('input').value : str = 'spring';
          url = `https://api.unsplash.com/search/photos?query=${str}&per_page=30&client_id=1C7GqsvHpAWsETF-3K9Qo7zzYs_M52JcTaPnThwl10c`; 
          getData()
            showData()
          }
        })
    } 
    inputEnter ()


//функция добавляет курсор по умолчанию в input
    
    function moveCaretToStart() {
       document.getElementById('input').focus()
}
moveCaretToStart()

// функция добавления часов 
const hours  = document.getElementById("id_H");
const minutes = document.getElementById("id_M");
                        function time () {
                   const date = new Date();
                   let h = date.getHours();
                   let m = date.getMinutes();        
                          h = (h < 10) ? '0' + h : h;
                          m = (m < 10) ? '0' + m : m;                             
                          hours.innerHTML = h;   
                          minutes.innerHTML = m;
                        };  
                        
                        setInterval(time, 1000)