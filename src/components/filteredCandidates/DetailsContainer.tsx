import React from "react";

interface DetailsContainerProps {
  data: any;
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col overflow-y-auto h-48">
        {data &&
          (Array.isArray(data)
            ? // Handle array data
              data.map((item: any, index: number) => (
                <div key={index} className="flex flex-row gap-x-8 py-4">
                  {Object.entries(item).map(([key, value]: [string, any]) => (
                    <React.Fragment key={key}>
                      <span className="text-gray-800">
                        {capitalizeFirstLetter(key)}
                      </span>
                      <span className="text-gray-600">
                        {typeof value === "object"
                          ? JSON.stringify(value)
                          : value}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              ))
            : // Handle object data
              Object.entries(data).map(([key, value]: [string, any]) => (
                <div key={key} className="flex flex-row gap-x-8 py-4">
                  <span className="text-gray-800">
                    {capitalizeFirstLetter(key)}
                  </span>
                  <span className="text-gray-600">
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </span>
                </div>
              )))}
      </div>
    </>
  );
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default DetailsContainer;
