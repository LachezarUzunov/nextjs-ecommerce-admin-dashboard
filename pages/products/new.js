import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const createProduct = async () => {
        const data = {title, description, price};
        await axios.post('/api/products', data);
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product name</label>
                <input 
                    type="text" 
                    placeholder="product name" 
                    value={title} 
                    onChange={ev => setTitle(ev.target.value)}/>
                <label>Description</label>
                <textarea 
                    placeholder="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}>      
                </textarea>
                <label>Price (in USD)</label>
                <input 
                    type="number" 
                    placeholder="price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}/>
                <button className="btn-primary" type="submit">Save</button>
            </form>
        </Layout>
    )
   
}