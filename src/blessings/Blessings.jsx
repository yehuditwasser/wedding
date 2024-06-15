import React, { useState, useEffect } from 'react';
import StringDisplay from '../stringDisplay/StringDisplay';
import './Blessing.css';

// הברכות שברשותך
const BlessingData = [
    {
        title: 'עדינה הנדירה!!',
        content: 'זהו הזמן הולך ודועך ומתקרב אט אט לסיומה של תקופה. תקופה מטורפת שאנחנו מאחלות לכל בחורה שהגיע לפרקה. תקופה של סיפוק, צחוקים, תובנות, שיחות עומק שנוצרו רק השנה (כמה חבל שלא מי"ב). תקופה של צמיחה ובגירה רוחנית וגשמית קבלת החלטות, קבלות, חיזוקים. תקופה של קשר חדש שהתרקם לו לא מזמן וכמה היינו משלמות שזה יקרה המון לפני כן. תקופה שכל שעובר לו הזמן נופל לנו האסימון. שזה עומד לקרות בעוד 23 ימים - מרגש ומלחיץ כאחד. שימי❤️. מעכשיו עכיוזה בפעולה לגבי משפטים, תובנות, ברכות, איחולים, חיזוקים. כל יום ביומו',
        sender: 'אוהבות- - -',
    },

    {
        title: 'עדינה המהממת!',
        content: 'אדם חכם יכול לעשות את ההחלטות שלו בעצמו. אדם בור יעקוב אחרי דעת הציבור',
        sender: 'איתך---',
    },
    // הוספת עוד ברכות עד שיהיו 23 ברכות
    {
        title: '',
        content: 'החיים הם כמו ספר. חלק מהפרקים הם עצובים, חלק שמחים וחלק מרגשים. אבל עד שלא תמשיך לדף הבא, לא תדע מה הפרק הבא טומן בחובו.',
        sender: '',
    },
    {
        title: 'עדינה,',
        content: 'נושמות איתך את ריח הפריחה. רואות לבן מול העיניים. שומעות גם מנגינה בשקט. ובינתיים. מתפללות עליך ועל כולנו. לבית מהחלומות. ושהכל יהיה ממש - דבש.',
        sender: '',
    },
    {
        title: 'עדינה שלנו,',
        content: 'היום ה-19. ואתמול עוד היה ה-20. אבל בליבנו תשארי לעולמים. את 3% רווקה. ו-97% אישה. אוהבים אותך, עדינה. אוהבים אותך – "יחתיכה". (חרוז אחרון כבר לא היה לנו...). אין דברים כאלו!!!!!',
        sender: 'אוהבות- - -',
    },
    {
        title: '',
        content: '"אם תשאל, תהיה טיפש לשנייה. אם לא תשאל, תהיה טיפש לנצח"',
        sender: 'אוהבות- - -',
    },
    {
        title: '',
        content: 'עדינה שלנו. הנה עדינה אנחנו שלשה שבועות לפני החתונה אבל הפעם על אמת!!!!.והנה את חותמת לך איזה שהוא סיום של תקופה מרגשת, לחוצה, מאתגרת.ומחר הנך ניצבת מפני אירוע רב פעילים שכל כולו מבטא ריגושים אחרונים.ואת האמת: סוג של פרידה מהתקופה הקודמת, איזה שהוא אזכור לתאריך .הקרב ובא....עדינה! אנחנו לאט לאט מתחילות לקלוט שזה אמיתי, את באמת הולכת להיות כלה. אמיתית שרק דמינו אותה בסרטים....זהו זה מה שיש לנו להגיד עד כה. ביוש הדס ויהודית',
        sender: 'אוהבות- - -',
    },
    // הוספת עוד ברכות כך שהן יתמלאו בברכות מתאימות
];

const Blessings = () => {
    const [currentBlessing, setCurrentBlessing] = useState(null);

    useEffect(() => {
        const today = new Date();
        const weddingDate = new Date(2024, 6, 3); // תאריך החתונה ב-03/07/2024
        const daysUntilWedding = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
        const dayIndex = 23 - daysUntilWedding;

        if (dayIndex >= 0 && dayIndex < BlessingData.length) {
            setCurrentBlessing(BlessingData[dayIndex]);
        } else {
            setCurrentBlessing({
                title: 'אין ברכה להיום',
                content: 'נא לבדוק את התאריך או לוודא שיש ברכות מספיקות.',
                sender: ''
            });
        }
    }, []);

    return (
        <div className="blessingContainer">
            {currentBlessing && (
                <>
                    <div id="title"><StringDisplay longString={currentBlessing.title} /></div>
                    <div id="content"><StringDisplay longString={currentBlessing.content} /></div>
                    <div id="sender"><StringDisplay longString={currentBlessing.sender} /></div>
                </>
            )}
        </div>
    );
}

export default Blessings;