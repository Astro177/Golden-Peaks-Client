import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center mt-72">
        <ThreeDots
          height="200"
          width="200"
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