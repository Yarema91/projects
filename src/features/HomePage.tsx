import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counter/counterSlice";
import { useAppSelector } from "../hooks/redux";
import ProjectContainer from "./project/ProjectContainerUpcomming";
import ProjectContainerProcess from "./project/ProjectContainerActive";
import ProjectContainerFinish from "./project/ProjectContainerFinish";
import SearchBar from "./project/SearchBar";
import ProjectContainerActive from "./project/ProjectContainerActive";
import ProjectContainerDraft from "./project/ProjectContainerDraft";
import ProjectContainerUpcomming from "./project/ProjectContainerUpcomming";

const HomePage = () => {

  // const value = useAppSelector(state => state.counterReducer.value);
  // const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>

      {/* <div style={{ margin: '4%' }}><h1>{value}</h1>
        <button onClick={() => dispatch(increase())}> increase </button>
        <button onClick={() => dispatch(decrease())}> decrease </button>
      </div > */}
      <h2>Stages of financing</h2>

      <span style={{ display: 'flex', margin: '30px 40px 30px 14.5em', padding: 'right:30px' }} >
      <span style={{ margin: '0 2%' }}>
          <ProjectContainerDraft />
        </span>
        <span style={{ margin: '0 2%' }}>
          <ProjectContainerUpcomming />
        </span>
        <span style={{ margin: '0 2%' }}>
          <ProjectContainerActive />
        </span>
       
        <span style={{ margin: '0 2%' }}>
          <ProjectContainerFinish />
        </span>
        
      </span>
    </div>
  );
};

export default HomePage;
