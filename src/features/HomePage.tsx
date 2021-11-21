// import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counter/counterSlice";
import { useAppSelector } from "../hooks/redux";
import ProjectContainer from "./project/ProjectContainer";
import ProjectContainerProcess from "./project/ProjectContainerProcess";
import ProjectContainerFinish from "./project/ProjectContainerFinish";
import SearchBar from "./project/SearchBar";

const HomePage = () => {

  // const value = useAppSelector(state => state.counterReducer.value);
  // const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>

      {/* <div style={{ margin: '4%' }}><h1>{value}</h1>
        <button onClick={() => dispatch(increase())}> increase </button>
        <button onClick={() => dispatch(decrease())}> decrease </button>
      </div > */}

      <span style={{ display: 'flex', margin: '70px 50px 30px 14.5em', padding: 'right:30px' }} >
        <span style={{ margin: '0 2%' }}>
          <ProjectContainer />
        </span>
        <span style={{ margin: '0 2%' }}>
          <ProjectContainerProcess />
        </span>
        <span style={{ margin: '0 2%' }}>
          <ProjectContainerFinish />
        </span>
      </span>
    </div>
  );
};

export default HomePage;
