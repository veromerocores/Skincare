import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Calendar from '../components/calendar'; // Import your calendar component
import { Helmet } from 'react-helmet';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import PlannerImages from '../components/plannerimages';
import NoteToSelf from '../components/notetoself';

const TITLE = 'Planner';

export default function Planner() {
    const [emojiPercentage, setEmojiPercentage] = useState(0);

    const handleEmojiCountChange = (percentage) => {
        setEmojiPercentage(percentage);
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="planner">
                <Header />
                <div className='plannerhead'>
                    <div className='gauge'>
                        <Gauge width={800} height={200} 
                            value={emojiPercentage}
                            startAngle={-110}
                            endAngle={110}
                            sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 40,
                                transform: 'translate(0px, 0px)',
                            },
                            }}
                            text={
                                ({ value }) => `${Math.round(value)}%`
                            }
                        />
                    </div>
                    <div className='productcalendar'>
                        <PlannerImages />
                        <div>
                            <Calendar onEmojiCountChange={handleEmojiCountChange} />
                            <NoteToSelf />
                        </div>                      
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
