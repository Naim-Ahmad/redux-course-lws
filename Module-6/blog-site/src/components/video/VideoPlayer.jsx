
export default function VideoPlayer({video}) {
// console.log(Object.keys(video).join(','))
const {title,link} = video
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}