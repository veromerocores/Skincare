import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Calendar from '../components/calendar';
import { Helmet } from 'react-helmet';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import PlannerImages from '../components/plannerimages';
import NoteToSelf from '../components/notetoself';

const TITLE = 'Planner';

export default function Planner() {
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
                            value={75}
                            startAngle={-110}
                            endAngle={110}
                            sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 40,
                                transform: 'translate(0px, 0px)',
                            },
                            }}
                            text={
                                ({ value }) => `${value}%`
                            }
                        />
                    </div>
                    <div className='productcalendar'>
                        <PlannerImages />
                        <div>
                            <Calendar />
                            <NoteToSelf />
                        </div>                      
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
