import React, {useState} from 'react';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons'

function TreeViewItem (props) {
  const [open, setOpen] = useState(false);
  const { label, childs } = props.node;

  return (
    <div className="tree-view-item">
      <div className="d-flex align-items-center node-text" onClick={() => setOpen(!open)}>
        <div className="icon_wrapper mr-1">
          {
            childs.length ? (open ? <ArrowDropDown size={12} /> : <ArrowRight size={12} />) : ''
          }
        </div>
        <span>{ label }</span>
      </div>
      {
        open &&
        <div className=''>
          {
            childs
              ?
              childs.map((item, index) => <TreeViewItem key={index} node={item} />)
              : ''
          }
        </div>
      }
    </div>
  );
}

export default TreeViewItem;
