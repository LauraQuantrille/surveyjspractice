import React, {useState, useCallback} from 'react';
import MySurvey from '../surveyTypes/surveyTypeOne';

const SurveyOne = () => {
    const [showPage, setShowPage] = useState(true);
    const onCompletePage = useCallback((data)=>{
    console.log(data)
    setShowPage(!showPage);
    })
    const setFinalPage = ()=>{
        return (
            <main>
                <h1>Thank you for taking this survey! We'll be in touch.</h1>
            </main>
        )
    }
    return(
        <div>
            <MySurvey
            showCompletedPage={data=>onCompletePage(data)}  
            />
        </div>
    )
}
export default SurveyOne