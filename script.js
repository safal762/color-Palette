// inilitize vaariables
const generate = document.querySelector('#generateNew')
let box = document.querySelectorAll('.color')
let colorHex = document.querySelectorAll('.hex p span')
let copy = document.querySelectorAll('p')
let sucessCopy = document.querySelector('.screen span')
let copiedTxt = document.querySelector('.screen')

// event listiners 

generate.addEventListener('click', function () {
    let colorCollection = []

    hex = '0123456789ABCDEF'

    for (i = 0; i <= 4; i++) {
        color = '#'
        for (j = 0; j < 6; j++) {
            color += `${hex[Math.floor(Math.random() * 16)]}`
        }
        colorCollection.push(color)
    }
    colorPallet(colorCollection)
})



copy.forEach(function (e) {
    e.addEventListener('click', function (item) {
        navigator.clipboard.writeText(`${item.target.textContent}`) // copies then text of the value passed inside writeText
            .then(function () {
                sucessCopy.textContent = `${item.target.textContent}`

                copiedTxt.classList.remove('hide')
                copiedTxt.classList.add('active')
                setTimeout(function () {
                    copiedTxt.classList.remove('active')
                    copiedTxt.classList.add('hide')
                }, 2000)
            })
            .catch(function (error) {
                console.log('e:', error)
            })
    })
})


// function 
function colorPallet(colorCollection) {
    box.forEach(function (e, index) {
        e.style.backgroundColor = colorCollection[index]
        colorHex[index].textContent = colorCollection[index]
    })
}
