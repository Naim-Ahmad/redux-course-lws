// import Success from "../ui/Success";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form() {

    const [addVideo, {data:video}] = useAddVideoMutation()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const author = e.target.author.value;
        const link = e.target.link.value;
        const thumbnail = e.target.thumbnail.value;
        const date = e.target.date.value;
        const duration = e.target.duration.value;
        const views = e.target.views.value;
        
        const videoInfo = {
            title,
            description,
            author,
            link,
            thumbnail,
            date,
            duration,
            views
        }

        addVideo(videoInfo)
    }

    useEffect(()=>{
        if(video?.id){
            navigate('/')
        }
    },[video, navigate])

    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Video Title" name="title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Author" name="author"/>
                        </div>

                        <div className="col-span-6">
                            <TextArea title="Description" name="description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="YouTube Video link" name="link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Thumbnail link" name="thumbnail" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput title="Upload Date" name="date"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video Duration" name="duration"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video no of views" name="views"/>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {/* <Success message="Video was added successfully" /> */}
            </div>
        </form>
    );
}
