import React, { Component } from 'react';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons';

class TreeViewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.node.childs && props.node.childs.length
    };
  }

  setOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const { label, childs, deep } = this.props.node;

    return (
      <div className="tree-view-item">
        <div
          className="d-flex align-items-center node-text"
          style={{ paddingLeft: 20 * deep }}
          onClick={() => this.setOpen()}
        >
          <div className="icon_wrapper mr-1">
            {childs ? open ? <ArrowDropDown size={12} /> : <ArrowRight size={12} /> : ''}
          </div>
          <span>{label}</span>
        </div>
        {open ? (
          <div className="">
            {childs && childs.length ? childs.map((item, index) => <TreeViewItem key={index} node={item} />) : ''}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default TreeViewItem;
