import React from "react";

function Post(props) {
  return (
    <div
      className={`card`}
      style={{
        color: "#000",
        display: "flex",
        padding: 'none'
      }}
    >
      <div style={{ display: "flex",  padding: '.3em' }}>
        <div style={{ marginRight: 2 + "em" }}>
          {props.profile && (<>
            <img
              alt="avatar"
              src={props.profile.photos.large}
              style={{
                width: 100 + "px",
                height: 100 + "px",
                marginBottom: 1 + "em",
                borderRadius: 50 + "%"
              }}
            />
            <p style={{}}>Likes: {props.likeCounter}</p>
         </> )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
           
          }}
        >
          <p>{props.profile ? <b>{props.profile.fullName}</b> : ""}</p>
          <p style={{}}>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Post);
