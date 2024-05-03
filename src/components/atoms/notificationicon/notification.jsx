import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notification = ({ number, badgeColor, iconColor }) => {
    return (
        <Badge badgeContent={number} color={badgeColor}>
            <NotificationsIcon style={{ color: iconColor }} />
        </Badge>
    );
};

export default Notification;
