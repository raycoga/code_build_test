import React, { memo } from "react";

const index = memo(() => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
});

export default index;
