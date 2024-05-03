import React from 'react';
import ImageAvatars from './Avatar.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Atoms/ImageAvatars',
  component: ImageAvatars,
};

const Template = (args) => <ImageAvatars {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatars: [
    { name: "Remy Sharp", src: "/static/images/avatar/1.jpg" }
  ],
};
