import './App.css';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';

function App() {
  const [siteSearch, setSiteSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
      fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(res => res.json())
      .then(data => setData(data.map((item, index) => ({...item, id: index, location: item.showInfo[0].location, price: item.showInfo[0].price }))))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        Object.values(item).some(s => (""+s).toLowerCase().includes(siteSearch.toLowerCase()))
      )
    );
  }, [siteSearch, data]);

  const handleSearch = (event) => {
    setSiteSearch(event.target.value);
  };
  console.log(data);
  
  const columns = [
    {field: 'title', headerName: '名稱', width: 560},
    {field: 'location', headerName: '地點', width: 980},
    {field: 'price', headerName: '票價', width: 560},
  ];
  
  return (
  <div>
    <div>
      <h1>景點觀光展覽資訊 <input type="search" id="siteSearch" onChange={handleSearch} placeholder="搜索…"/></h1>
    </div>
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid rows={filteredData} columns={columns} pageSize={10} rowsPerPageOptions={[10]}/>
    </div>
    <div>

    </div>
  </div>
  );
};

export default App;