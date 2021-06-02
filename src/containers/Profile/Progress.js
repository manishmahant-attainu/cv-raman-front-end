import { memo } from 'react';

const Progress = ({dispatch, progress, profile}) => {
  console.log(progress);
  return (
    <>
      <h1>{profile.fullName}</h1>
      <div style={{ background: 'teal', height: '30px', width: progress.width }}></div>
      <div style={{marginTop: '3rem'}}>
        <button onClick={() => dispatch({type:'plus',diff: 60})}>Increase bar size</button>
        <button onClick={() => dispatch({type:'minus',diff: 30})}>Decrease bar size</button>
      </div>
    </>
  );
};

export default memo(Progress);
