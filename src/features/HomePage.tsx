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
    <div  >
     
      <div className="container">
        <h2 style={{
          display: "row",
          textAlign: "center",
          margin: "3em 0em 1em 0em"
        }}
        >Stages of financing</h2>
      </div>

      <div
        className="container"
        style={{
        //   margin: "1em 0em 1em 0em"
        //   //  alignContent: "center",
          alignItems: "flex-center",
          paddingBlockEnd: "3.2em"
        //   // margin: "0em 0em 0em 6%"
        }}
      >
        <div className="row" data-toggle="dropdown"
        
        >
          <div className="col-sm">
          <ProjectContainerDraft />
          </div>
          <div className="col-sm">
          <ProjectContainerUpcomming />
          </div>
          <div className="col-sm">
          <ProjectContainerActive />
          </div>
          <div className="col-sm">
          <ProjectContainerFinish />
          </div>
        </div>
      </div>


      
      {/* <div className="text-central text-lg-smart " style={{
        alignItems: "flex-center",
        display: 'flex'
      }}>
        <div style={{ margin: '4%' }}><h1>{value}</h1>
        <button onClick={() => dispatch(increase())}> increase </button>
        <button onClick={() => dispatch(decrease())}> decrease </button>
      </div >
        <span style={{
          // display: 'flex',
          //  margin: '2em 1em 1em 2em', 
          //  padding: 'right:5em' 
        }} >
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
      </div>  */}


      
    </div>
  );
};

export default HomePage;
