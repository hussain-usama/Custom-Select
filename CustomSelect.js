*****JSX****
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const [expanded,setExpanded]=useState(false)
 <div className={expanded ? 'p-1 category-custom-checkbox-active' : 'p-1 category-custom-checkbox'}
                                 onClick={()=>setExpanded(!expanded)}>
                                <p className="select-category-head" style={{color: expanded && '#2ADC65'}}>Select Category</p>
                                <KeyboardArrowDownIcon style={{transform: expanded && 'rotate(180deg)', color: expanded && '#2ADC65'}}/>
                            </div>
                            {expanded &&
                                <div className='custom-select-option'>
                                <label className='my-2 checkbox-label'>
                                    <input type="checkbox" checked={true} /> 
                                    <span className='upcoming-checkboix-label'>Select All</span>
                                </label><br />
                                <label className='my-2 checkbox-label'>
                                    <input type="checkbox" checked={true} /> 
                                    <span className='upcoming-checkboix-label'>Select All</span>
                                </label>
         </div>}
         
         ******css******
         .category-custom-checkbox{
    display: flex;
    justify-content:space-between;
    background: #FFFFFF;
    border: 1px solid #C2C9CC;
    box-sizing: border-box;
    border-radius: 6px;
    width:170px;
    height:38px;
    cursor: pointer;
    position: relative;
}
.category-custom-checkbox-active{
    display: flex;
    justify-content:space-between;
    background: #FFFFFF;
    border: 1px solid #2ADC65;
    box-sizing: border-box;
    border-radius: 6px;
    width:170px;
    height:38px;
    cursor: pointer;
    position: relative; 
}
.select-category-head{
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #3D484D;
}
.custom-select-option{
    background: #FFFFFF;
    border: 1px solid #C2C9CC;
    box-sizing: border-box;
    box-shadow: 0px 15px 12px -5px rgba(92, 99, 102, 0.22), 0px 15px 38px -5px rgba(69, 74, 77, 0.3);
    border-radius: 6px;
    padding: 0.5rem 2rem;
    width:170px;
    position: absolute;
    left: 6.3rem;
    top: 2.3rem;
}
