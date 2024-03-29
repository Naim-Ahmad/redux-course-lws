import likeImg from '../../assets/like.svg';
import unlikeImg from '../../assets/unlike.svg';

export default function VideoDescription({ description }) {
  const { title, description: videoDescription, date, likes, unlikes } = description;
  // console.log(description)
  return (
    <div>
      <h1
        className="text-lg font-semibold tracking-tight text-slate-800"
      >
        {title}
      </h1>
      <div
        className="pb-4 flex items-center space-between border-b"
      >
        <h2
          className="text-sm leading-[1.7142857] text-slate-600 w-full"
        >
          Uploaded on {date}
        </h2>

        {/* <!-- like/unlike --> */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img
                className="w-5 block"
                src={likeImg}
                alt="Like"
              />
            </div>
            <div
              className="text-sm leading-[1.7142857] text-slate-600"
            >
              {likes}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <img
                className="w-5 block"
                src={unlikeImg}
                alt="Unlike"
              />
            </div>
            <div
              className="text-sm leading-[1.7142857] text-slate-600"
            >
              {unlikes}
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-4 text-sm text-[#334155] dark:text-slate-400"
      >
        {videoDescription}
      </div>
    </div>
  )
}