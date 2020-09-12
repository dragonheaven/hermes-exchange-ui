import React, { useState } from 'react';
import TreeViewItem from './TreeViewItem';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons';
import { treeData } from '../../../constant/mockData';

function TreeView() {
  const [open, setOpen] = useState(true);
  const { childs, label } = treeData;

  return (
    <div className="tz-exchange__inner flex-1 d-flex flex-column">
      <div className="tree-view">
        <div className="d-flex align-items-center node-text" onClick={() => setOpen(!open)}>
          <div className="icon_wrapper mr-1">
            {childs && childs.length ? open ? <ArrowDropDown size={12} /> : <ArrowRight size={12} /> : ''}
          </div>
          {label}
        </div>

        {open && (
          <div className="">
            {childs.map((item, index) => (
              <TreeViewItem key={index} node={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TreeView;
