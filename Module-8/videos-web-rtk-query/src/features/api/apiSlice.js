import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["videos", "video"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      providesTags: ["videos"],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, args) => [{ type: "video", id: args }],
    }),
    getRelatedVideos: builder.query({
      query: (title) => {
        const queryParams = title.split(" ").join("&");
        return `/videos?q=${queryParams}`;
      },
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/videos",
        body: data,
      }),
      invalidatesTags: ["videos"],
    }),

    editVideo: builder.mutation({
      query: ({ data, id }) => ({
        method: "put",
        url: `/videos/${id}`,
        body: data,
      }),

      invalidatesTags: (result, error, args) => [
        "videos",
        { type: "video", id: args.id },
      ],
    }),

    deleteVideo: builder.mutation({
      query: (id) => ({
        method: "delete",
        url: `/videos/${id}`,
      }),
      invalidatesTags: ["videos"],
    }),
  }),
});

export default apiSlice;
export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useAddVideoMutation,
  useGetRelatedVideosQuery,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
