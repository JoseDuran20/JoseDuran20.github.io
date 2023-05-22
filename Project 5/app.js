const menu = {
    options: [
        {
            name: 'Home',
            sectionId: 'sectionOne'
        },
        {
            name: 'Contacto',
            sectionId: 'sectionTwo'
        },
        {
            name: 'Catálogos',
            sectionId: 'sectionThree'
        },
        {
            name: 'Reportes',
            sectionId: 'sectionFour'
        },
        {
            name: 'Tipos de cuentas',
            sectionId: 'sectionThree'
        }                     
    ]
}


window.addEventListener('load', (e) => {
    
    const menuDiv = document.getElementById('menu')

    menu.options.forEach(option => {
        let newOptionDiv = document.createElement('div')
        newOptionDiv.classList.add('menu-option')
        newOptionDiv.textContent = option.name
        menuDiv.appendChild(newOptionDiv)
    })

    document.querySelectorAll('.menu-option').forEach( (element, index) => {
       element.addEventListener('click', (e) => {
        console.log(e.srcElement);
        window.location = `#${menu.options[index].sectionId}`
    })
    } )

})
