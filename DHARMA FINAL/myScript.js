const btnPresencial = document.getElementById('presencial')
const btnOnline = document.getElementById('online')
const desaparecer = document.getElementById('modalidades-dissapear')
const aparecer = document.getElementById('aparecer-presencial')
const aparecerTwo = document.getElementById('aparecer-presencial-2')
const aparecerOnline = document.getElementById('aparecer-online')
const aparecerOnlineTwo = document.getElementById('aparecer-online-2')
const clickOnline = document.getElementById('click-online')
const onlineDiv = document.getElementById('online-div')
const presencialDiv = document.getElementById('presencial-div')


btnPresencial.addEventListener('click', function(){
    desaparecer.style.display = 'none'
    aparecer.style.display = 'block'
    aparecerTwo.style.display = 'block'

})

btnOnline.addEventListener('click', function(){
    desaparecer.style.display = 'none'
    aparecerOnline.style.display = 'block'
    aparecerOnlineTwo.style.display = 'block'
})

clickOnline.addEventListener('click', function(){
    aparecer.style.display = 'none'
    aparecerTwo.style.display = 'none'
    aparecerOnline.style.display = 'block'
    aparecerOnlineTwo.style.display = 'block'
})