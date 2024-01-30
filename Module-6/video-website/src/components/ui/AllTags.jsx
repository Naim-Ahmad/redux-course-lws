
export default function AllTags({tags}) {

  return tags?.map((tag, ind, tags) => <span key={tag}>#{tag} {tags.length - 1 !== ind && ', '}</span>)
  
}