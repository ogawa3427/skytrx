import React, { useState } from 'react';
import ChildComponent from './Children';

const Dashboard = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
      e.preventDefault();
      setActiveTab(newActiveTab);
    };
  
    return (
      <div>
        <ul className="tab-list">
          {children.map((tab) => {
            const label = tab.props.label;
  
            return (
              <li
                className={label === activeTab ? 'active' : ''}
                key={label}
              >
                <a href="#" onClick={(e) => handleClick(e, label)}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="tab-content">
          {children.map((one) =>
            one.props.label === activeTab ? one : undefined
          )}
        </div>
      </div>
    );
  };

export default Dashboard;
