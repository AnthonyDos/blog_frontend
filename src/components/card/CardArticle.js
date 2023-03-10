import { useEffect, useState } from "react";
import FormatDate from "./FormatDate";
import WordCount from "./WordCount";
import { 
    TiArrowUpOutline, 
    TiArrowDownOutline, 
    TiArrowForwardOutline 
} from "react-icons/ti";

import { BiCommentDetail } from "react-icons/bi";

const CardArticle = () => {
    const [ newComment, setNewComment ] = useState("");
    const [ showTextArea, setShowTextArea ] = useState(false);
    const article = JSON.parse(localStorage.getItem("oneArticle"));
    console.log(article)
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn)
    const cancelComment = () => {
        setShowTextArea(!showTextArea)
        setNewComment("")
    }

    useEffect(()=> {

    },[article, newComment])

    console.log(newComment)
    return(
        <section>
            <div>
                <div>
                    <img 
                        crossorigin="anonymous"  
                        src={article?.user?.image} 
                        alt="photo de profil" 
                    />
                </div>
                <p>Auteur :</p>
                <p>{article?.user?.lastName}</p>
                <p>{article?.user?.firstName}</p>
            </div>
            <div>
                <div>
                    <img 
                        crossorigin="anonymous"  
                        src={article?.image} 
                        alt="photo de l'article" 
                    />
                </div>
                <p>{article.name}</p>
                <div>
                    <div>
                        <p>Date de l'article :</p>
                        <p>{FormatDate(article?.date)}</p>
                    </div>
                    <div>
                        <p>Temps de lecture :</p>
                        <p>{WordCount(article.content)}</p>
                    </div>
                    <div>
                        <TiArrowUpOutline />
                        <TiArrowDownOutline />
                        <TiArrowForwardOutline />
                    </div>
                </div>
                <section>
                    <p>{article.content}</p>
                </section>
                <p>
                    <BiCommentDetail />
                    <button onClick={()=> setShowTextArea(!showTextArea)}>Ajouter un commentaire</button>
                </p>
                {
                    showTextArea === true ? 
                    <form>
                        <textarea name="comment" id="" cols="30" rows="10" value={newComment} onChange={(e)=> setNewComment(e.target.value)}></textarea>
                        <div>
                            <button onClick={()=>{cancelComment()}}>annuler</button>
                            <button >publier</button>
                        </div>
                    </form>
                    : null
                }
                <section>
                    {
                        article?.comments?.map((comment, index) => {
                            return(
                                <div key={index}>
                                    <div>
                                        <div>
                                            <img 
                                                crossorigin="anonymous" 
                                                src={comment.user.image} 
                                                alt="photo de profil" 
                                            />
                                        </div>
                                        <p>Auteur : {comment.user.lastName} {comment.user.firstName}</p>
                                    </div>
                                    <p>{comment.content}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default CardArticle