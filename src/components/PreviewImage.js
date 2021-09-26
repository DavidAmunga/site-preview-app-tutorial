import React from 'react';

const PreviewImage = ({ form }) => {
  return (
    <div className="preview flex flex-col">
      <img
        className="w-full object-cover h-32"
        src={form.image}
        alt="some description"
      />
      <div className="px-2 py-2 bg-white">
        <h3 className="text-gray-800 font-bold">
          {form.title.length === 0 ? `Enter A Title` : form.title}
        </h3>
        <p className="">
          {form.description.length === 0
            ? `Enter A Description`
            : `${form.description}`}
        </p>
      </div>
    </div>
  );
};

export default PreviewImage;
