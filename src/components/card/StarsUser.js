import { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
const StarsUser = (props) => {
    const { value } = props;
    
    const StarsFunction = () => {
        
        if(value <= 10) {
            return(
                <div>
                    <AiOutlineStar color="yellow"/>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            )
        }else if (value > 10 && value < 20 ) {
            return(
                <div>
                    <AiOutlineStar color="yellow"/>
                    <AiOutlineStar color="yellow"/>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            )
    }else if (value > 20 ) {
        return(
            <div>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
        )
    }else if (value > 50 ) {
        return(
            <div>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar />
            </div>
        )
    }else if (value > 80 )
        return(
            <div>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
                <AiOutlineStar color="yellow"/>
            </div>
        ) 
    }    
    
    useEffect(()=> {

    }, [value, StarsFunction])
    return(
        <div>
            <StarsFunction />
        </div>
    )


}

export default StarsUser;