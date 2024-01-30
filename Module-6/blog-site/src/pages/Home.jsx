import VideoGrid from "../components/grid/VideoGrid";
import Pagination from "../components/pagination/Pagination";
import Tags from "../components/tags/Tags";

export default function Home() {

  return (
    <>
      <Tags/>
      <VideoGrid/>
      <Pagination/>
    </>
  )
}