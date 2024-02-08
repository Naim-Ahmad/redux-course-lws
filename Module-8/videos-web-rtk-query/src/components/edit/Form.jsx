import { useEditVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({ video }) {
    // console.log(Object.keys(video).join(','))
    const { id, title, description, author, date, duration, views, link, thumbnail } = video;

    const [editVideo] = useEditVideoMutation()

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

        editVideo({ id, data: videoInfo })
    }

   
    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput name="title"  defaultValue={title} title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput name="author"  defaultValue={author} title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea  name="description" defaultValue={description} title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput name="link"  defaultValue={link} title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput name="thumbnail"  defaultValue={thumbnail} title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput name="date" title="Upload Date" defaultValue={date} />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput name="duration" title="Video Duration" defaultValue={duration} />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput name="views"  title="Video no of views" defaultValue={views} />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </form>
    );
}
