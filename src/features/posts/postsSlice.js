import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addPost, DeletePost } from "../../network/postsApis";
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(DeletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.meta.arg);
      });
  },
});
export { fetchPosts, addPost, DeletePost };
export default postsSlice.reducer;
