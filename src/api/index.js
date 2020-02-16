function getDogImages(count) {
  return fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
    .then(res => res.json())
    .then(res => res.message)
}

export { getDogImages }
