"use client"
import React, { useEffect, useState } from 'react';
import styles from "./writePage.module.css";
import Image from 'next/image';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "walmikee-app.firebaseapp.com",
  projectId: "walmikee-app",
  storageBucket: "walmikee-app.appspot.com",
  messagingSenderId: "962828256815",
  appId: "1:962828256815:web:3c4c3721b14ad49f4a68da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const storage = getStorage(app);

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const {status} = useSession();

    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(()=>{
        const upload = ()=>{
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setMedia(downloadURL);
                });
            }
            );
            }
            file && upload();
    },[file])
  
  
  const slugify = (str) =>
    str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const handleSubmit = async ()=>{
    const res = await fetch("api/posts",{
        method : "POST",
        body : JSON.stringify({
            title,
            desc : value,
            img : media,
            slug : slugify(title),
            catSlug: catSlug || "style",

        })
    })
    if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
        
      }
  }


  if(status === "loading"){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status === "unauthenticated"){
    router.push("/");
  }
  return (
    <div className={styles.container}>
        <input type="text" placeholder='Title' className={styles.input} onChange={e=> setTitle(e.target.value)}/>
        <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
            <option value="style">style</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
        </select>
        <div className={styles.editor}>
            <button className={styles.button} onClick={()=>setOpen(!open)}>
                {/* <Image src="/plus.png" width={16} height={16} alt=''/> */}
                Add
            </button>
            {open && (
                <div className={styles.add}>
                    <input type="file" name="image" id="image" 
                    onChange={(e)=> setFile(e.target.files[0])}
                    style={{display: "none"}}/>
                    
                    <button className={styles.addButton}>
                        {/* <Image src="/image.png" alt='' width={16} height={16}/> */}
                        <label htmlFor="image">
                            Image
                        </label>
                    </button>
                    <button className={styles.addButton}>
                        {/* <Image src="/external.png" alt='' width={16} height={16}/> */}
                        File
                    </button>
                    <button className={styles.addButton}>
                        {/* <Image src="/videos.png" alt='' width={16} height={16}/> */}
                        Video
                    </button>
                </div>
            )}
            <ReactQuill 
            className={styles.textArea}
            theme='bubble' 
            value={value} 
            onChange={setValue} 
            placeholder='Tell your story...'/>
        </div>
        <button className={styles.publish} onClick={handleSubmit}> Publish</button>
    </div>
  )
}

export default WritePage;