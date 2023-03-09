import { useEffect, useState } from "react";
import "../../assets/css/cardHome.css";
import { allArticlesService } from "../../services/ArticleService";
import { 
    TiArrowUpOutline, 
    TiArrowDownOutline, 
    TiArrowForwardOutline 
} from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";

const Card = () => {
    //const [ listArticles, setListArticle ] = useState("");
    
    const listArticles = JSON.parse(localStorage.getItem("articles"))

    useEffect(()=> {
        allArticlesService();
    }, [listArticles])

    console.log(listArticles)

    const WordCount = (text) => {
        const MILLISECONDS = 60000;
        let number = 0;
        let split = text.split(" ");
        let currentTimeReading = parseFloat(0.4);
        let read = 0;

        for(let i = 0; i < split.length; i++) {
            if (split[i] != "") {
                number ++;
            }
        }
        const readingTime = currentTimeReading * number / 60
        const multipliTotal = readingTime * 60 * 1000

        if (multipliTotal < MILLISECONDS) {
            const changeFormat = readingTime.toString()
            const newTimeSeconds = changeFormat.substring(2,4) 
            return newTimeSeconds + " sec"
        }else{
            const format = readingTime.toString();
            read = format.substring(0,1)
            return parseInt(read) + " minutes";
        }
    }
  
    return(
        <div className="container_card">
            {
                listArticles?.map((list, index)=> {
                    const infoUser =list.user
                    const eventDate = new Date (list.date)
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
                    const date = eventDate.toLocaleDateString(undefined, options)
                    
                    return(
                        <div className="card" key={index}>
                            <div className="card_userImage">
                                <img 
                                    className="image" 
                                    src={infoUser.image} 
                                    crossorigin="anonymous"    
                                    alt="photo de l'utilisateur" 
                                />
                            </div>
                            <h1 className="card_title">{list.name}</h1>
                            <div className="card_date_time">
                                <p>{date}</p>
                                <span>.</span>
                                <p> {WordCount(list.content)} read time</p>
                            </div>
                            <div className="card_image">
                                <img 
                                    className="image_article"
                                    src={list.image} 
                                    crossorigin="anonymous" 
                                    alt="image de l'article" 
                                />
                            </div>
                            <div className="container_icones">
                                <TiArrowUpOutline />
                                <TiArrowDownOutline />
                                <BiCommentDetail />
                                <TiArrowForwardOutline />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;