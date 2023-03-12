import { useEffect, useState } from "react";
import HomeComponent from "../../components/home/HomeComponent";

const Home = () => {
    
    const [ listArticles, setListArticle ] = useState(JSON.parse(localStorage.getItem("articles")))
    useEffect(()=> {
        if (listArticles === null) {
            setListArticle(JSON.parse(localStorage.getItem("articles")))
        }
    },[listArticles])

    return(
        <div>
            <HomeComponent listArticles={listArticles} setListArticle={setListArticle}/>
        </div>
    )
}

export default Home;