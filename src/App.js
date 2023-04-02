import Calendar from "./Calendar";

function App() {
  const holidays = [
    {
      date: '4/9/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/10/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/11/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/12/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/13/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/14/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/15/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/16/2023',
      description: 'Maha Thingyan (Water Festival)',
    },
    {
      date: '4/17/2023',
      description: 'Maha Thingyan (Water Festival)',
    }
  ];

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-blue-400'>
      <Calendar
        holidays={true}
        holidaysName={holidays}
        controls={true}
        minYear={2020}
        maxYear={2024}
      />
    </div>
  );
}

export default App;
