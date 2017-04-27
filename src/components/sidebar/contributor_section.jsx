import React from 'react';
import SidebarItem from './sidebar_item';
import { shortenString } from 'helpers';

class ContributorSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-section">
        <div className='sidebar-header'>
          CONTRIBUTORS
        </div>

        <div className={`sidebar-item`}>
          <a href='https://www.github.com/davidhu2000'>
            <img src='https://avatars2.githubusercontent.com/u/15827041?v=3&s=200' />
            <span>{shortenString('David Hu', 19)}</span>
          </a>
        </div>

        <div className={`sidebar-item`}>
          <a href='https://github.com/asherman-ca'>
            <img src='https://avatars0.githubusercontent.com/u/19175984?v=3&s=200' />
            <span>{shortenString('Alex Sherman', 19)}</span>
          </a>
        </div>

        <div className={`sidebar-item`}>
          <a href='https://www.github.com/cjudge1337'>
            <img src='https://avatars3.githubusercontent.com/u/22506482?v=3&s=200' />
            <span>{shortenString('Carson Judge', 19)}</span>
          </a>
        </div>

        <div className={`sidebar-item`}>
          <a href='https://www.github.com/nguyenkevin16'>
            <img src='https://avatars0.githubusercontent.com/u/15253174?v=3&s=200' />
            <span>{shortenString('Kevin Nyugen', 19)}</span>
          </a>
        </div>

        <div className={`sidebar-item`}>
          <a href='https://www.github.com/rlee0525'>
            <img src='https://avatars3.githubusercontent.com/u/20022799?v=3&s=200' />
            <span>{shortenString('Raymond Lee', 19)}</span>
          </a>
        </div>

        <div className={`sidebar-item`}>
          <a href='https://www.github.com/davidhu2000'>
            <img src='https://avatars2.githubusercontent.com/u/18646575?v=3&s=200' />
            <span>{shortenString('Katarina Rossi', 19)}</span>
          </a>
        </div>

      </div>
    );
  }
}

export default ContributorSection;