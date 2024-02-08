import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error.jsx";
import Success from "../ui/Success.jsx";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
    const {isError, isLoading, data:videos} = useGetVideosQuery()

    
    let content = null;

    if(isLoading) content = <>
    <VideoLoader/>
    <VideoLoader/>
    <VideoLoader/>
    <VideoLoader/>
    <VideoLoader/>
    </>

    if(!isLoading && isError) content = <Error />

    if(!isLoading && isError && videos.length === 0) content = <Success message="No Videos Found"/>
    
    if(!isLoading && !isError && videos.length > 0 ) content = videos.map(video=> <Video key={video.id} video={video}/>)

    return content;

}
