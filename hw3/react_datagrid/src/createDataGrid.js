<<<<<<< HEAD
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';

const [data, setData] = useState([]);
useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    .then(res => res.json())
    .then(data => setData(data));
}, []);

const columns = [
    {field: 'name', headerName: '名稱', width: 230, height: 50},
    {field: 'local', headerName: '地點', width: 140, height: 50},
    {field: 'price', headerName: '票價', width: 2160, height: 50},
];

DataGrid=(num)=>{
    return (<div>
        <DataGrid rows={data} columns={columns} pageSize={10}/>
    </div>)
=======
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';

const [data, setData] = useState([]);
useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    .then(res => res.json())
    .then(data => setData(data));
}, []);

const columns = [
    {field: 'name', headerName: '名稱', width: 230, height: 50},
    {field: 'local', headerName: '地點', width: 140, height: 50},
    {field: 'price', headerName: '票價', width: 2160, height: 50},
];

DataGrid=(num)=>{
    return (<div>
        <DataGrid rows={data} columns={columns} pageSize={10}/>
    </div>)
>>>>>>> 3680f706ada8e5acb32800876466090b99a19726
};