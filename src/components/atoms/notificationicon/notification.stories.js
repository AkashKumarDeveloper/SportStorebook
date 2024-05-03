import React from "react";
import Notification from "./notification.jsx";

export default {
    title: 'Atoms/Notifications',
    component: Notification,
    argTypes: {
        number: {
            control: "select",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        badgeColor: {
            control: "select",
            options: ['default', 'primary', 'secondary', 'error', 'black']
        },
        iconColor: {
            control: "select",
            options: ['default', 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled']
        }
    },
};

export const Default = (args) => <Notification {...args} />;
Default.args = {
    number: 1,
    badgeColor: 'black',
    iconColor: 'green',
};
