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
                <main>
                    <div role="region" aria-labelledby="gauge-label" className='gauge'>
                        <Gauge 
                            width={800} 
                            height={200}
                            value={emojiPercentage}
                            startAngle={-110}
                            endAngle={110}
                            sx={{
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40,
                                    transform: 'translate(0px, 0px)',
                                },
                            }}
                            text={({ value }) => `${Math.round(value)}%`}
                            id="gauge-label"
                            aria-label={`Current emoji usage is ${Math.round(emojiPercentage)} percent`} // Accessible description
                        />
                    </div>
                    <div className='productcalendar'>
                        <PlannerImages aria-label="Images related to your planner" />
                        <div>
                            <Calendar onEmojiCountChange={handleEmojiCountChange} aria-label="Calendar for managing your planner" />
                            <NoteToSelf aria-label="Notes to self for the planner" />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
