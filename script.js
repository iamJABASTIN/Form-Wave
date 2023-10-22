const lables = document.querySelectorAll('.form-control label')

lables.forEach( label => {
    label.innerHTML = label.innerText.split('').map((letter,idx) => `<span style=transition-delay:${idx *100}ms>${letter}</span>`).join(' ')
})