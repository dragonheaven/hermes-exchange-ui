import React from 'react';
import Tree from '@naisutech/react-tree';
import { AutoSizer } from 'react-virtualized';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { treeData } from '../../../constant/mockData';

function TreeView() {
  return (
    <div className="tz-exchange__inner flex-1 d-flex flex-column">
      <div className="tree-view flex-1">
        <AutoSizer>
          {({ width, height }) => {
            return (
              <PerfectScrollbar
                option={{
                  suppressScrollX: true,
                  minScrollbarLength: 30
                }}
                style={{ width: width, height: height }}
              >
                <Tree
                  nodes={treeData}
                  onSelect={() => {}}
                  theme={'my-theme'}
                  iconSet={{
                    file: <></>
                  }}
                  customTheme={{
                    'my-theme': {
                      text: '#fff',
                      bg: '#18191B',
                      highlight: '#272727',
                      decal: '#fff'
                    }
                  }}
                />
              </PerfectScrollbar>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default TreeView;
