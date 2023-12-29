import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author , setAuthor ] = useState('yoshi');
    const [isPending , setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title , body , author};

         setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"} ,
            body: JSON.stringify(blog)

        }).then(() => {
            setIsPending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>add new blogs</h2>
            <form onSubmit={handleSubmit }>
                <label>Blog title:</label>
                <input
                type = "text"
                required value = {title} onChange={(e) => setTitle(e.target.value)}></input>
                <label> Blog body </label>
                <textarea required value = {body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author</label>
                <select
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value= "Mario">Mario</option>
                    <option value= "yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Add Blog....</button>}
            </form>
        </div>
    )
}

export default Create;