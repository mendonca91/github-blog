import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog } from './src/modules/Blog'
import { Post } from "./src/modules/Post/Post";
import { DefaultLayout } from "./src/styles/layout/DefaultLayout";

export function Router(){
    return (
         <Routes>
            <Route path="/" element= {<DefaultLayout />}>
            <Route path="/" element={<Blog/>} />
            <Route path="/post/:id" element={<Post />} />
            </Route>
         </Routes>
    )
}