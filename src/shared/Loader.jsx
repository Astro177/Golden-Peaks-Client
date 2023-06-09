import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
        <ThreeDots
          height="400"
          width="400"
          radius="9"
          color="#0d9488"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
};

export default Loader;