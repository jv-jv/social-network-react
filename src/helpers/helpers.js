export function isPlural(num, word) {
  return `${num} ${num === 1 ? word : word + "s"}`
}

export function sortDesc(posts) {
  return posts.sort((a, b) => b.timestamp - a.timestamp)
}
