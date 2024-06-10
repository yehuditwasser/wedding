import React, { useState, useEffect } from 'react';
import StringDisplay from '../stringDisplay/StringDisplay';
import './Blessing.css';

// הברכות שברשותך
const BlessingData = [
    {
        title: 'עדינה הנדירה!!',
        content: 'זהו הזמן הולך ודועך ומתקרב אט אט לסיומה של תקופה. תקופה מטורפת שאנחנו מאחלות לכל בחורה שהגיע לפרקה. תקופה של סיפוק, צחוקים, תובנות, שיחות עומק שנוצרו רק השנה (כמה חבל שלא מי"ב). תקופה של צמיחה ובגירה רוחנית וגשמית קבלת החלטות, קבלות, חיזוקים. תקופה של קשר חדש שהתרקם לו לא מזמן וכמה היינו משלמות שזה יקרה המון לפני כן. תקופה שכל שעובר לו הזמן נופל לנו האסימון. שזה עומד לקרות בעוד 25 ימים - מרגש ומלחיץ כאחד. שימי❤️. מעכשיו עכיוזה בפעולה לגבי משפטים, תובנות, ברכות, איחולים, חיזוקים. כל יום ביומו',
        sender: 'אוהבות- - -',
    },
    {
        title: 'שרי,',
        content: 'נושמות איתך את ריח הפריחה. רואות לבן מול העיניים. שומעות גם מנגינה בשקט. ובינתיים. מתפללות עליך ועל כולנו. לבית מהחלומות. ושהכל יהיה ממש - דבש.',
        sender: 'אוהבות- - -',
    },
    {
        title: 'שרי המהממת!',
        content: 'מזל טוב! שתזכו לבנות בית נאמן בישראל לתפארת! מתוך נחת בריאות ושמחה🤎 שתצליחי בעבודה ובכל דבר שתעשי! מעריכה ואוהבת מאד',
        sender: 'פלונית',
    },
    // הוספת עוד ברכות עד שיהיו 23 ברכות
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
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