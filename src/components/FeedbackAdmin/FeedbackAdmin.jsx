import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import './FeedbackAdmin.css'


export default function FeedbackAdmin(){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { 
            field: 'feeling', 
            headerName: 'Feeling',
            type: 'number',
            width: 70 },
        { 
            field:'understanding', 
            headerName: 'Understanding', 
            type: 'number', 
            width: 90
        },
        { 
            field:'support', 
            headerName: 'Support', 
            type: 'number', 
            width: 90
        },
        {
            field: 'comments',
            headerName: 'Comments',
            sortable: false,
            width: 160
        }
    
    ];

    const feedback = useSelector(store => store.feedbackList)
     console.log(feedback);
    return (
        <div className='table' style={{ height: 400, width: '60%' }}>
            <h2>Feedback Result</h2>
            <DataGrid
                rows={feedback}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}