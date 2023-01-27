import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "blog no 1 kya", content: "yeah the first blog ya dig, how he comming from the tempa but he sounding like the jayz" },
    { id: 1, title: "it is wat it iss ", content: "lets goo dawg work hard do your best mann, okk okk wtf boy hell yeah" },
    { id: 1, title: "another one", content: "another one okk just for the sake of content i m writing shit here alright ? " },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer