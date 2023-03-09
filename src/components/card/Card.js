import { useEffect, useState } from "react";
import { allArticlesService } from "../../services/ArticleService";

const Card = () => {
    //const [ listArticles, setListArticle ] = useState("");
    
    const listArticles = JSON.parse(localStorage.getItem("articles"))

    useEffect(()=> {
        allArticlesService();
    }, [listArticles])

    console.log(listArticles)

    const WordCount = (text) => {
        let number = 0;
        let split = text.split(" ");
        let currentTimeReading = parseFloat(0.4); //0.4*300 mots et mot / 60 = 2 min
        let read = 0;
        // 4 min * 60 sec * 1000 millisec

        for(let i = 0; i < split.length; i++) {
            if (split[i] != "") {
                number ++;
            }
        }
        const readingTime = currentTimeReading * number / 60
        const multipliTotal = readingTime * 60 * 1000

        if (multipliTotal < 60000) {
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
        <div>
            {
                listArticles?.map((list, index)=> {
                    const infoUser =list.user
                    const eventDate = new Date (list.date)
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
                    const date = eventDate.toLocaleDateString(undefined, options)
                    
                    return(
                        <div key={index}>
                            <div>
                                <img src={infoUser.image} crossorigin="anonymous" alt="photo de l'utilisateur" />
                            </div>
                            <h1>{list.name}</h1>
                            <div>
                                <p>{date}</p>
                                {WordCount(list.content)}
                            </div>
                            <div>
                                <img src="" crossorigin="anonymous" alt="" />
                            </div>
                            <div>
                                <p>logo</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;