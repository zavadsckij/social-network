import React, { useState, useEffect } from "react";

const StatusWithHooks = props => {
  let [updateMode, setUpdateMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateUpdateMode = () => {
    setUpdateMode(true);
  };

  let deleteUpdateMode = () => {
    setUpdateMode(false);
    props.updateStatus(status);
  };

  let statusValueChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!updateMode ? (
        <div>
         <b>Status: </b> <span onDoubleClick={activateUpdateMode}>
            {props.status || "hello"}
          </span>
        </div>
      ) : (
        <div>
          <input
            type="text"
            autoFocus={true}
            onBlur={deleteUpdateMode}
            onChange={statusValueChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default StatusWithHooks;
