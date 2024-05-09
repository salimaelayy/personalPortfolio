"use client"
import React, { useState } from 'react';
import { FaLaptopCode, FaDatabase, FaCode, FaPalette, FaGlobe } from 'react-icons/fa';

type TabName = 'frameworks' | 'databases' | 'languages' | 'design' | 'web';

const  TechnologyTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('frameworks');

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-0 font-medium text-center text-2xl shadow-md my-4 rounded-md p-6">
      <div className="mb-4 border  border-background  rounded-lg ">
        <ul className="flex justify-center flex-wrap -mb-px  p-1 shadow-lg "  id="myTab" role="tablist">

          <li className="mr-2" role="presentation">
            <button
              className={` flex-1 inline-block rounded-lg  py-4 px-4 font-bold text-xl text-center border-transparent  ${activeTab === 'frameworks' ? ' border-accent text-background bg-accent' : 'text-background  border-secondary hover:text-accent hover:border-accent'}`}
              onClick={() => handleTabClick('frameworks')}
              role="tab"
              aria-controls="frameworks"
              aria-selected={activeTab === 'frameworks' ? 'true' : 'false'}
            >
              <FaCode className="inline-block mr-2" />
              Frameworks & Libraries
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`flex-1 inline-block rounded-lg  py-4 px-4 font-bold text-xl text-center border-transparent  ${activeTab === 'databases' ? ' border-accent text-background bg-accent' : 'text-background  border-secondary hover:text-accent hover:border-accent'}`}
              onClick={() => handleTabClick('databases')}
              role="tab"
              aria-controls="databases"
              aria-selected={activeTab === 'databases' ? 'true' : 'false'}
            >
              <FaDatabase className="inline-block mr-2" />
              Databases
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`flex-1 inline-block rounded-lg  py-4 px-4 font-bold text-xl text-center border-transparent  ${activeTab === 'languages' ? ' border-accent text-background bg-accent' : 'text-background  border-secondary hover:text-accent hover:border-accent'}`}
              onClick={() => handleTabClick('languages')}
              role="tab"
              aria-controls="languages"
              aria-selected={activeTab === 'languages' ? 'true' : 'false'}
            >
              <FaLaptopCode className="inline-block mr-2" />
              Programming Languages
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`flex-1 inline-block rounded-lg  py-4 px-4 font-bold text-xl text-center border-transparent  ${activeTab === 'design' ? ' border-accent text-background bg-accent' : 'text-background  border-secondary hover:text-accent hover:border-accent'}`}
              onClick={() => handleTabClick('design')}
              role="tab"
              aria-controls="design"
              aria-selected={activeTab === 'design' ? 'true' : 'false'}
            >
              <FaPalette className="inline-block mr-2" />
              Design
            </button>
          </li>
          <li role="presentation">
            <button
              className={`flex-1 inline-block rounded-lg  py-4 px-4 font-bold text-xl text-center border-transparent  ${activeTab === 'web' ? ' border-accent text-background bg-accent' : 'text-background  border-secondary hover:text-accent hover:border-accent'}`}
              onClick={() => handleTabClick('web')}
              role="tab"
              aria-controls="web"
              aria-selected={activeTab === 'web' ? 'true' : 'false'}
            >
              <FaGlobe className="inline-block mr-2" />
              Web
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className={`bg-background bg-opacity-60  p-4 rounded-lg ${activeTab !== 'frameworks' && 'hidden'}`} id="frameworks" role="tabpanel" aria-labelledby="frameworks-tab">
          <div>
            <FaCode className="inline-block mb-2" size={24} />
            <p></p>
          </div>
        </div>
        <div className={`bg-background bg-opacity-60 p-4 rounded-lg ${activeTab !== 'databases' && 'hidden'}`} id="databases" role="tabpanel" aria-labelledby="databases-tab">
          <div>
            <FaDatabase className="inline-block mb-2" size={24} />
            <p>This is the databases tab content.</p>
          </div>
        </div>
        <div className={`bg-background bg-opacity-60 p-4 rounded-lg ${activeTab !== 'languages' && 'hidden'}`} id="languages" role="tabpanel" aria-labelledby="languages-tab">
          <div>
            <FaCode className="inline-block mb-2" size={24} />
            <p>This is the programming languages tab content.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechnologyTabs;
