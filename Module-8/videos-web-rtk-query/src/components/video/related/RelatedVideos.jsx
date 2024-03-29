import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import Error from "../../ui/Error";
import Success from "../../ui/Success";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ video }) {

    const { data: relatedVideos, isLoading, isError } = useGetRelatedVideosQuery(video?.title)

    console.log(relatedVideos)
    let content = null;

    if(isLoading) content = <RelatedVideoLoader/>;

    if(!isLoading && isError) content = <Error/>;

    if(!isLoading && !isError && relatedVideos.length === 0){
        content = <Success message="No video found"/>
    }

    if(!isLoading && !isError && relatedVideos.length > 0){
        content = relatedVideos.map(video=> <RelatedVideo key={video.id} video={video}/>)
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
