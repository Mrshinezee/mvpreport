import { useState, useEffect } from 'react';
import axios from 'axios';
import { svgs } from '../assets/svgs';
import DropDown from '../components/dropDown';

const ContentHeader = () => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);

  // useEffect(() => {
  //   const projectsUrl = `${process.env.REACT_APP_URL}/projects`;
  //   const gatewaysUrl = `${process.env.REACT_APP_URL}/gateways`;
  //   async () => {
  //     const pResults = axios.get(projectsUrl);
  //     // const gResults = axios.get(gatewaysUrl);

  //     setProjects(pResults.data);
  //     // setGateways(gResults.data);
  //   };
  // }, []);

  useEffect(() => {
    // declare the async data fetching function
    const projectsUrl = `${process.env.REACT_APP_URL}/projects`;
    const fetchProjects = async () => {
      const pResults = await axios.get(projectsUrl);
      setProjects(pResults?.data?.data?.map((result) => result.name));
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    // declare the async data fetching function
    const gatewaysUrl = `${process.env.REACT_APP_URL}/gateways`;
    const fetchGateways = async () => {
      const gResults = await axios.get(gatewaysUrl);
      setGateways(gResults?.data?.data?.map((result) => result.name));
    };
    fetchGateways();
  }, []);

  return (
    <div className="projects">
      <div className="between">
        <div className="start column">
          <div className="t-blue header-one report">Reports</div>
          <div className="ash-blue header-two">
            Easily generate a report of your transactions
          </div>
        </div>
        <div>
          <DropDown
            width="135px"
            options={['All projects', ...projects]}
            defaultOption="All projects"
            icon={<svgs.ARROW_DOWN />}
          />
          <DropDown
            width="145px"
            options={[' All gateways', ...gateways]}
            defaultOption=" All gateways"
            icon={<svgs.ARROW_DOWN />}
          />

          <button type="button" className="regal-green">
            From date
          </button>
          <button type="button" className="regal-green">
            To date
          </button>
          <button type="button" className="deep-blue">
            Generate report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
