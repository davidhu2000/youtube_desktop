/* global window */
import React from 'react';
import { shortenString } from 'helpers';

const { ipcRenderer } = window.require('electron');

class ContributorSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      1: {
        name: 'David Hu',
        img: 'https://avatars2.githubusercontent.com/u/15827041?v=3&s=200',
        github: 'https://www.github.com/davidhu2000'
      },
      2: {
        name: 'Alex Sherman',
        img: 'https://avatars0.githubusercontent.com/u/19175984?v=3&s=200',
        github: 'https://www.github.com/asherman-ca'
      },
      3: {
        name: 'Carson Judge',
        img: 'https://avatars3.githubusercontent.com/u/22506482?v=3&s=200',
        github: 'https://www.github.com/cjudge1337'
      },
      4: {
        name: 'Kevin Nguyen',
        img: 'https://avatars0.githubusercontent.com/u/15253174?v=3&s=200',
        github: 'https://www.github.com/nguyenkevin16'
      },
      5: {
        name: 'Raymond Lee',
        img: 'https://avatars3.githubusercontent.com/u/20022799?v=3&s=200',
        github: 'https://www.github.com/rlee0525'
      },
      6: {
        name: 'Katarina Rossi',
        img: 'https://avatars2.githubusercontent.com/u/18646575?v=3&s=200',
        github: 'https://www.github.com/dischorde'
      }
    };
  }

  renderContributors() {
    return Object.keys(this.state).map(id => {
      let contributor = this.state[id];
      return (
        <div className={`sidebar-item`} key={id}>
          <a onClick={() => ipcRenderer.send('open-url', contributor.github)} role="presentation">
            <img src={contributor.img} alt={`${contributor.name}`} />
            <span>{shortenString(contributor.name, 19)}</span>
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="sidebar-section">
        <div className='sidebar-header'>
          CONTRIBUTORS
        </div>

        { this.renderContributors() }

      </div>
    );
  }
}

export default ContributorSection;
