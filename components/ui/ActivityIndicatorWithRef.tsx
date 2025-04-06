import React, { forwardRef } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { HostComponent } from 'react-native';

type Props = ActivityIndicatorProps;

const ActivityIndicatorWithRef = forwardRef<HostComponent<unknown>, Props>((props, ref) => {
    return <ActivityIndicator {...props} ref={ref} />;
});export default ActivityIndicatorWithRef;
