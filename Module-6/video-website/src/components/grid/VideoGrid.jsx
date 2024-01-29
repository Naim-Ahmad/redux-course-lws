import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideos } from '../../redux/features/videos/videosSlice.js'
import Loading from '../ui/Loading.jsx'
import VideoCard from './VideoCard.jsx'

export default function VideoGrid() {
const dispatch = useDispatch()

const videos = useSelector(state => state.videos)

// console.log(videos)

  useEffect(()=> {
    dispatch(getVideos())
  },[])

  let content;

  if(videos.loading){
    content = <Loading/>
  }

  if(videos.isError){
    content = <div className="col-span-12">{videos.error?.message}</div>
  }

  if(videos.videos.length > 0){
    content = videos?.videos?.map(video=> <VideoCard video={video} key={video.id}/>)
  }else{
    content =  <div className="col-span-12">No content here</div>
  }


  return (
    <section className="pt-12">
    <section className="pt-12">
        <div
            className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
        >
           {content}
            
            {/* <!-- error section
            <div class="col-span-12">some error happened</div> --> */}
        </div>
    </section>
</section>
  )
}