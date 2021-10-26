const preview = document.getElementById('preview-image')
preview.addEventListener("mouseenter", e => interact(e))

fetch('./images.json')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            option = document.createElement('div')
            option.classList.add("option")
            option.addEventListener('click', () => change(i+1))
            
            image = document.createElement('img')
            image.classList.add('img-option')

            image.src = data[i]

            option.appendChild(image)

            const og = document.getElementById('option-group')
            og.appendChild(option)
        }
    })
    .catch(error => console.log(error));


const change = i => {
    preview.src = `./images/example${i}.png`
    const selected = document.querySelector('.selected')
    if(selected != null)
        selected.classList.remove('selected')

    const gallery = document.getElementById("option-group")
    console.log(gallery);
    gallery.childNodes[i].classList.add('selected')
}

const interact = (e) => console.log(e.target);