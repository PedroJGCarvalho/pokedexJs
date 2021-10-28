function getPokemon() {
  // forma dinâmica para pegar cada pokemon
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []

  for (i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i))
        .then(response => response.json())
        .then(data => {
          //console.log(data)
          let listName = document.createElement('li')
          let name = document.createElement('h1')
          let type = document.createElement('p')
          let pokemonImg = document.createElement('img')

          name.textContent += data.name.toUpperCase()
          pokemonImg.src += data.sprites.front_default
          type.textContent += data.types
            .map(item => ' ' + item.type.name.toUpperCase())
            .toString()
            .replace(',', ' ')

          listName.appendChild(name)
          listName.appendChild(pokemonImg)
          listName.appendChild(type)
          pokemonInfos.appendChild(listName)
          console.log(type)

          if (type.textContent.includes('FIRE')) {
            listName.style.backgroundColor = 'hsl(22, 100%, 66%)'
            //type.style.color = '#ff4040'
          } else if (type.textContent.includes('GRASS')) {
            listName.style.backgroundColor = 'hsl(106, 100%, 66%)'
            //type.style.color = '#7CFC00'
          } else if (type.textContent.includes('WATER')) {
            listName.style.backgroundColor = 'hsl(197, 100%, 66%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('ELECTRIC')) {
            listName.style.backgroundColor = 'hsl(61, 100%, 66%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('FIGHTING')) {
            listName.style.backgroundColor = 'hsl(0, 100%, 66%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('ICE')) {
            listName.style.backgroundColor = 'hsl(172, 100%, 66%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('POISON')) {
            listName.style.backgroundColor = 'hsl(278, 100%, 66%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('BUG')) {
            listName.style.backgroundColor = 'hsl(78, 100%, 66%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('NORMAL')) {
            listName.style.backgroundColor = 'rgb(152, 161, 120)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('ROCK')) {
            listName.style.backgroundColor = 'rgb(138, 129, 129)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('GROUND')) {
            listName.style.backgroundColor = 'hsl(49, 65%, 56%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('FAIRY')) {
            listName.style.backgroundColor = 'hsl(313, 100%, 78%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('PSYCHIC')) {
            listName.style.backgroundColor = 'hsl(342, 92%, 61%)'
            //type.style.color = '#4169e1'
          } else if (type.textContent.includes('DRAGON')) {
            listName.style.backgroundColor = 'hsl(261, 92%, 61%)'
            //type.style.color = '#4169e1'
          }
        })
    )
  }
}

getPokemon()
