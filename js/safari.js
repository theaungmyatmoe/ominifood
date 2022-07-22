////////////////////////////////////////
// Fixing flex box gap in safari browser

const checkFlexGap = () => {
    const flex = document.createElement('div')
    flex.style.flex = 'flex'
    flex.style.flexDirection = 'column'
    flex.style.rowGap = '1px'

    flex.appendChild(document.createElement('div'))
    flex.appendChild(document.createElement('div'))

    document.body.appendChild(flex)
    const isSupported = flex.scrollHeight === 1
    flex.parentNode.removeChild(flex)
    console.log(isSupported)

    if (!isSupported) document.body.classList.add('no-flexbox-gap')
}

export {checkFlexGap}