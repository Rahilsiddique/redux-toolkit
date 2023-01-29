import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: "blog no 1 kya",
        content:
            "yeah the first blog ya dig, how he comming from the tempa but he sounding like the jayz",
        date: sub(new Date(), { minutes: 20 }).toISOString(),
        reactions: { thumbsUp: 0, wow: 0, coffee: 0, rocket: 0, heart: 0 }
    },
    {
        id: 2,
        title: "it is wat it iss ",
        content:
            "lets goo dawg work hard do your best mann, okk okk wtf boy hell yeah",
        date: sub(new Date(), { minutes: 13 }).toISOString(),
        reactions: { thumbsUp: 0, wow: 0, coffee: 0, rocket: 0, heart: 0 }
    },
    {
        id: 3,
        title: "another one",
        content:
            "another one okk just for the sake of content i m writing shit here alright ? ",
        date: sub(new Date(), { minutes: 6 }).toISOString(),
        reactions: { thumbsUp: 0, wow: 0, coffee: 0, rocket: 0, heart: 0 }

    }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reaction: { thumbsUp: 0, wow: 0, coffee: 0, rocket: 0, heart: 0 }
                    }
                };
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (!existingPost) return
            existingPost.reactions[reaction]++
        }
    }
});

export const selectAllPosts = state => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
