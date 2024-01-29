import RelatedVideos from '../components/relatedVideos/RelatedVideos.jsx'
import VideoDescription from '../components/video/VideoDescription.jsx'
import VideoPlayer from '../components/video/VideoPlayer'

export default function VideoPage() {

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <VideoPlayer/>

            {/* <!-- video description --> */}
            <VideoDescription/>
          </div>

          {/* <!-- related videos --> */}
          <RelatedVideos/>
        </div>
      </div>
    </section>
  )
}