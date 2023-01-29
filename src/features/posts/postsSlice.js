import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    { id: 1, title: "blog no 1 kya", content: "yeah the first blog ya dig, how he comming from the tempa but he sounding like the jayz", date: sub(new Date(), { minutes: 20 }).toISOString() },
    { id: 2, title: "it is wat it iss ", content: "lets goo dawg work hard do your best mann, okk okk wtf boy hell yeah", date: sub(new Date(), { minutes: 13 }).toISOString() },
    { id: 3, title: "another one", content: "another one okk just for the sake of content i m writing shit here alright ? ", date: sub(new Date(), { minutes: 6 }).toISOString() },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer