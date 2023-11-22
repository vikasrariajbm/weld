import './App.css';
import Chart from './charts/BarChart'
import Chart2 from './charts/Barchart2'
import PieChart from './charts/PieChart'
import PieChart2 from './charts/PieChart2'
import Cards from './charts/Cards';

function App() {
  return (
   <div className='Mainss'>

    <div className='BoxMain'>

      <div className='Box1'>
        <div className='Box1helper'>
          <p className='mx-3 fs-6 fw-bold' >Average Oee</p>
        </div>
      <Chart/>
      </div>

      <div className='Box2'>
        <div className='Box1helper'>
        <p className='mx-3 fs-6 fw-bold' >Planned Vs Actual</p>
        </div>
        
      <Chart2/>
      </div>
      {/* <PieChart/> */}
    </div>

    <div className='BoxMain2'>
     
    <div className='Box5'>
        <Cards>

        </Cards>
      </div>



      <div className='Box3'>
      <div className='Box1helper'>
          <p className='mx-3 fs-6 fw-bold' >Downtime</p>
        </div>
        <PieChart/>

      </div>
      <div className='Box4'>
      <div className='Box1helper'>
          <p className='mx-3 fs-6 fw-bold' >Quality</p>
        </div>
        <PieChart2 />
      </div>

      

    </div>

    </div>

  );
}

export default App;
