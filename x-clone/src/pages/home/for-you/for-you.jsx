import { posts as postData } from '../../../mock/posts'
import Post from '../../../components/post/post'
import { WindowVirtualizer } from 'virtua'
import { useState } from 'react'
export default function ForYou() {

    const [posts, setPosts] = useState(postData);

    return (
        <WindowVirtualizer >
            {posts.map((post, key) => <Post post={post} id={post.id + key} />)}
        </WindowVirtualizer>
    )
}