import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const getEmojiForClickCount = (clickCount) => {
  switch (clickCount) {
    case 1:
      return '🌝';
    case 2:
      return '🌝 🌚';
    case 3:
      return '🌚';
    case 4:
      return ''; // No emoji
    default:
      return '';
  }
};

function ServerDay(props) {
  const { day, outsideCurrentMonth, clickCounts, onClickDay, ...other } = props;

  const clickCount = clickCounts[day.format('YYYY-MM-DD')] || 0;
  const emojiContent = !outsideCurrentMonth ? getEmojiForClickCount(clickCount) : undefined;

  const emojiArray = emojiContent ? emojiContent.split(' ') : [];

  return (
    <div style={{ position: 'relative' }}>
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} onClick={() => onClickDay(day)} />
      {emojiContent && (
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '0px',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.9rem', // Adjust the size as needed
            gap: '0px',
          }}>
            {emojiArray.map((emoji, index) => (
              <span key={index} style={{ fontSize: '0.9rem' }}>{emoji}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DateCalendarServerRequest() {
  const [clickCounts, setClickCounts] = React.useState({});

  const handleDayClick = (day) => {
    const dayStr = day.format('YYYY-MM-DD');
    setClickCounts((prev) => {
      const currentCount = prev[dayStr] || 0;
      const newCount = (currentCount + 1) % 4; // Toggle between 0, 1, 2, and 3
      return {
        ...prev,
        [dayStr]: newCount,
      };
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs()}  // Set today's date dynamically
        slots={{
          day: (dayProps) => (
            <ServerDay {...dayProps} clickCounts={clickCounts} onClickDay={handleDayClick} />
          ),
        }}
      />
    </LocalizationProvider>
  );
}
